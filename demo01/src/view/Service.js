import React, { Component,Fragment } from 'react';
import store from '../store/index'
import ServiceItem from './ServiceItem';
import TodoList from './TodoList';
import axios from 'axios';
import 'antd/dist/antd.css';
import {Input,Button,List} from 'antd';
 
const data=[
    '早8点开晨会，分配今天的开发工作',
    '早9点和项目经理作开发需求讨论会',
    '晚5:30对今日代码进行review'
]

class Service extends Component{
    constructor(props){
        super(props)//调用父类的构造函数，固定写法
        console.log(store.getState());
        this.state={
            inputValue:'song',
            list:['基础按摩','精油推背']
        }
        this.changeInputValue = this.changeInputValue.bind(this);

        this.storeChange = this.storeChange.bind(this);//转变this指向
        store.subscribe(this.storeChange)//订阅Redux的状态
    }
    componentDidMount(){
        axios.post('https://web-api.juejin.im/v3/web/wbbr/bgeda')
        .then((res)=>{console.log('axios 获取数据成功:'+JSON.stringify(res))  })
        .catch((error)=>{console.log('axios 获取数据失败'+error)})
    }
    render(){
        return(
            <Fragment>
                <div>
                    <Input
                        style={{width:'250px'}}
                        id="songling" 
                        className="input"
                        value={this.state.inputValue} 
                        onChange={this.inputChange.bind(this)}
                        ref={(input)=>{this.input=input}}/> 
                    <Button type="primary" onClick={this.addList.bind(this)}> 增加服务 </Button>
                </div>
                {/* 正确的注释的写法 */}

                <ul>
                    {
                        this.state.list.map((item,index)=>{
                        return (
                                <ServiceItem
                                 key={index+item}
                                 content={item}
                                 index={index}
                                 list={this.state.list}
                                 deleteItem={this.deleteItem.bind(this)}/>
                            )
                        })
                    }
                </ul> 

                <div>
                    <Input 
                        placeholder={this.state.inputValue} 
                        style={{ width:'250px', marginRight:'10px'}}
                        onChange={this.changeInputValue}
                    />
                    <Button type="primary">增加</Button>
                </div>

                <div style={{margin:'10px',width:'300px'}}>
                    <List
                        bordered
                        dataSource={data}
                        renderItem={item=>(<List.Item>{item}</List.Item>)}
                    />    
                </div>

                <TodoList/>
            </Fragment>
            
        )
    }
    inputChange(e){
        console.log(e.target.value)
        /* this.setState({
            inputValue:e.target.value
        }) */
        /* 绑定ref后上面可以写成下面的代码 */
        this.setState({
            inputValue:this.input.value
            //更加语义化，但是也不建议使用，React的是数据驱动的，所以用ref会出现各种问题
        })
    }
    addList(){
        this.setState({
            list:[...this.state.list,this.state.inputValue]
        })
    }
    deleteItem(index){
        let list = this.state.list;
        list.splice(index,1)
        this.setState({
            list:list
        })
    }
    changeInputValue(e){
        console.log(e.target.value);
        const action = {
            type:'changeInput',
            value:e.target.value
        }
        store.dispatch(action)
    }
    storeChange(){
        this.setState(store.getState())
    }
}
export default Service;