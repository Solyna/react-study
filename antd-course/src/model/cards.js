import * as cardsService from '../service/cards';

const listData = [{
    id: 1,
    name : 'umi',
    desc : '极快的类 Next.js 的 React 应用框架',
    url  : 'https://umijs.org'
  },
  {
    id: 2,  
    name : 'antd',
    desc : '一个服务于企业级产品的设计体系',
    url  : 'https://ant.design/index-cn'
  },
  {
    id: 3,
    name : 'antd-pro',
    desc : '一个服务于企业级产品的设计体系',
    url  : 'https://ant.design/index-cn'
  }
  ];

const delay = (millisecond) => {
    return new Promise((resolve) => {
      setTimeout(resolve, millisecond);
    });
  };

export default {
    namespace:'cards',
    state:{
        cardsList:[],
    },
    effects:{
        /* 代表事件的Action对象，由于函数体不需要Action内容，所有使用`_`占位符代替Action对象了。 */
        *queryList({ _ },{ call,put }){
            // const result = yield call(cardsService.queryList);
            // console.log('queryList');
            // console.log(result);
            // yield put({type:'saveList',payload:{cardsList:result.result}})
            /* 由于没有接口，这里先用假数据代替 */
          
            yield call(delay,2000)
            yield put({type:'saveList',payload:{cardsList:listData}})
        },
        *addOne({payload},{call,put,select}){
            const {cardsList} = yield select(state=>state.cards)
            let arr = [{
                id:cardsList.length+1,
                ...payload
            }]
            console.log('cardsList',cardsList)
            yield put({
                type:'saveList',
                payload:{cardsList:cardsList.concat(arr)}
            })
        }

    },
    reducers:{
        saveList(state,{payload:{cardsList}}){
            return{
                ...state,
                cardsList
            }
        }
    }
}