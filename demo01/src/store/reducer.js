import {CHANGE_INPUT,ADD_ITEM,DELETE_ITEM,GET_LIST} from './actionTypes'

const defaultState = {
    inputValue: 'Write Something',
    list: [
        '早上4点起床，锻炼身体',
        '中午下班游泳一小时'
    ]
} //默认数据
export default (state = defaultState, action) => {
    /* Reducer只能接受state，不能改变state */
    if (action.type === CHANGE_INPUT) {
        let newState = JSON.parse(JSON.stringify(state)); //深度拷贝state
        newState.inputValue = action.value;
        return newState;
    }
    if (action.type === ADD_ITEM) { //根据type值，编写业务逻辑
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue) //push新的内容到列表中去
        newState.inputValue = ''
        return newState
    }
    if (action.type === DELETE_ITEM) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index, 1) //删除数组中对应的值
        return newState
    }
    if (action.type === GET_LIST) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.list = action.data.list//复制新的list数组进去
        return newState
    }
    console.log(state, action)
    return state
} //就是一个方法函数 b