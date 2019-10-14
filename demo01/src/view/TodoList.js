import React, { Component } from 'react';
import 'antd/dist/antd.css';
import store from '../store';
import TodoListUI from './TodoListUI';
import {changeInputAction,addItemAction ,deleteItemAction, getTodoList,getMyListAction} from '../store/actionCreatores';

class TodoList extends Component {
    constructor(props){
        super(props);
        this.state = store.getState();
        this.changeInputValue= this.changeInputValue.bind(this)
        this.clickBtn = this.clickBtn.bind(this);
        this.storeChange = this.storeChange.bind(this)  //转变this指向
        this.deleteItem = this.deleteItem.bind(this);
        store.subscribe(this.storeChange) //订阅Redux的状态
    }
    render() { 
        return ( 
            <TodoListUI 
                inputValue={this.state.inputValue}
                changeInputValue={this.changeInputValue}
                clickBtn={this.clickBtn}
                list={this.state.list}
                deleteItem={this.deleteItem}/>
         );
    }
    componentDidMount(){
        /* 使用redux-thunk，异步逻辑放到actionCreator里了 */
        /* axios.get('https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList').then((res)=>{
            console.log(res.data)
            const data = res.data;
            const action = getListAction(data);
            store.dispatch(action);
        }) */
        // const action = getTodoList();
        // store.dispatch(action)

        const action = getMyListAction();
        store.dispatch(action)
    }
    
    storeChange(){
        this.setState(store.getState())
    }
    changeInputValue(e){
        console.log(e.target.value)
        const action = changeInputAction(e.target.value)
        store.dispatch(action)
    }
    clickBtn(){
        console.log('jspang.com')
        const action = addItemAction()
        store.dispatch(action)
    }
    deleteItem(index){
        console.log(index)
        const action = deleteItemAction(index)
        store.dispatch(action)
    }
}
 
export default TodoList;