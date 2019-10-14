import {createStore, applyMiddleware,compose} from 'redux';//引入createStore方法
import reducer from './reducer';
// import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
//创建saga中间件
import mySaga from './sagas';
const sagaMiddleware = createSagaMiddleware();



/* compose增强函数 */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__({}):compose;

// const  enhancer = composeEnhancers(applyMiddleware(thunk));
/* createStore只可以接收两个函数，因为之前第二个函数的位置配置了React DevTools插件就不能使用了
如果想两个同时使用，需要使用增强函数 */

/* redux-saga */
const  enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));
const store = createStore(reducer,enhancer)//创建数据存储仓库
/* 执行run，让saga运行起来 */
sagaMiddleware.run(mySaga);

/* store是唯一的 */
/* const store = createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()); */
    //创建数据存储仓库

export default store;