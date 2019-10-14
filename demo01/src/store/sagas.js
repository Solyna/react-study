import {takeEvery,put} from 'redux-saga/effects';
import {GET_MY_LIST} from './actionTypes';
import axios from 'axios';
import {getListAction} from './actionCreatores';

/* generator函数 */
function* mySaga(){
    yield takeEvery(GET_MY_LIST,getList);
}
function* getList(){
    console.log('000')
  /*   axios.get('https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList').then((res)=>{
            console.log(res.data)
            const data = res.data;
            const action = getListAction(data);
            put(action)
        }) */
    const res = yield axios.get('https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList')
    const action = getListAction(res.data);
    yield put(action)
}
export default mySaga;