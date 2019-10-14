import React, { Component } from 'react';
import store from './store';
import {connect} from 'react-redux';

/* 无状态组件 */
/* const TodoList =(props)=>{
    let {inputValue ,inputChange,clickButton,list} = props; // 粘贴过来后，此处要进行修改
    return (
        <div>
            <div>
                <input value={inputValue} onChange={inputChange} />
                <button onClick={clickButton}>提交</button>
            </div>
            <ul>
                {
                    list.map((item,index)=>{
                        return (<li key={index}>{item}</li>)
                    })
                }
            </ul>
        </div>
    );
} */
class TodoList extends Component {
    constructor(props){
        super(props);
        this.state = store.getState();
    }
    render() { 
        let {inputValue ,inputChange,clickButton,list} = this.props;
        return (
            <div>
            <div>
                <input value={inputValue}
                onChange={inputChange}/>
                <button onClick={clickButton}>提交</button>
            </div>
            <ul>
                {
                    list.map((item,index)=>{
                        return(
                            <li key={index}>{item}</li>
                        )
                    })
                }
               
            </ul>
        </div>
         );
    }
}

const stateToProps = (state)=>{
    return {
        inputValue:state.inputValue,
        list:state.list
    }
}
const dispatchToProps = (dispatch)=>{
    return{
        inputChange(e){
            console.log(e.target.value)
            let action = {
                type:'change_input',
                value:e.target.value
            }
            dispatch(action)
        },
        clickButton(){
            let action = {type:'add_item'}
            dispatch(action)
        }
    }
}
/* connect的作用是把UI组件（无状态组件）和业务逻辑代码的分开，然后通过connect再链接到一起，让代码更加清晰和易于维护。这也是React-Redux最大的有点。 */
export default connect(stateToProps,dispatchToProps)(TodoList)