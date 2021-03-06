import request from '../util/request';
import { message } from 'antd';
// request 是 demo 项目脚手架中提供的一个做 http 请求的方法，是对于 fetch 的封装，返回 Promise

const delay= (millisecond)=>{
    return new Promise((resolve)=>{
        setTimeout(resolve,millisecond);
    })
}

export default {
    namespace:'puzzlecards',
    state:{
        data:[],
        counter: 0,
    },
    effects:{
        *queryInitCards(_, sagaEffects) {
            const { call, put } = sagaEffects;
            // const endPointURI = 'https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_joke';
            const endPointURI = '/dev/posts/1';
            try{
                /*  获取服务器端数据*/
                const puzzle = yield call(request, endPointURI);
                /* 添加一个卡片数据，这个会触发reducer的执行，于是会看到视图中添加了一个新卡片 */
                yield put({ type: 'addNewCard', payload: puzzle });
                /* 暂停了3秒 */
                yield call(delay, 3000);
                /* 第二次获取服务器端数据 */
                const puzzle2 = yield call(request, endPointURI);
                /* 再添加一个卡片数据。这个又会触发 reducer 的执行。于是看到第二个卡片添加到视图上去。 */
                yield put({ type: 'addNewCard', payload: puzzle2 });
            }catch(e){
                message.error('数据获取失败')
            }
            
          }
    },
    reducers:{
        addNewCard(state,{ payload:newCard }){
            const nextCounter = state.counter +1;
            const newCardWithId = {...newCard,id:nextCounter};
            const nextData = state.data.concat(newCardWithId);
            return{
                data:nextData,
                counter:nextCounter
            }
        } 
    }
    
}