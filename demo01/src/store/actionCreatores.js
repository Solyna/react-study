import {
    CHANGE_INPUT,
    ADD_ITEM,
    DELETE_ITEM,
    GET_LIST,
    GET_MY_LIST
} from './actionTypes';
import axios from 'axios';

export const changeInputAction = (value) => ({
    type: CHANGE_INPUT,
    value
})
export const addItemAction = () => ({
    type: ADD_ITEM
})

export const deleteItemAction = (index) => ({
    type: DELETE_ITEM,
    index
})
/* 返回对象 */
export const getListAction = (data) => ({
    type: GET_LIST,
    data
})
/* redux-thunk使用 */
/* 返回函数方法 */
export const getTodoList = ()=>{
    return(dispatch)=>{
        axios.get('https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList').then((res)=>{
            console.log(res.data)
            const data = res.data;
            const action = getListAction(data);
            dispatch(action)
        })
    }
}
/* 返回对象 */
export const getMyListAction = ()=>({
    type:GET_MY_LIST
})