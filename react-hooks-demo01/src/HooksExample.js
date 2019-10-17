import React, { useState,useEffect } from 'react';
import { BrowserRouter as Router,Route, Link } from "react-router-dom";

function Index(){
    /* useEffect的第二个参数是一个数组，
    数组中可以写入很多状态对应的变量，当状态值发生变化时，我们才进行解绑。
    当传入空数组时，就是当组件将被销毁时才进行解绑，
    也就实现了componentWillUnmount的生命周期函数 */
    useEffect(()=>{
        console.log('useEffect=>老弟，你来了！Index页面')
    },[])
    return(
        <h2>song 00</h2>
    )
}
function List(){
    useEffect(()=>{
        console.log('useEffect=>老弟，你来了！List页面')
    })
    return(
        <h2>List-page</h2>
    )
}


function HooksExample(){
    const [count,setCount] = useState(0);//数组解构
    return(
        <div>
            <p>ReactHooks写法：</p>
            <p>使用只支持react版本16.8以上</p>
            <p>You clicked {count}</p>
            <button onClick={()=>setCount(count+1)}>Click me</button>

            {/* 路由 */}
            <Router>
                <ul>
                    <li>
                        <Link to="/">首页</Link>
                    </li>
                    <li>
                        <Link to="/list/">列表</Link>
                    </li>
                </ul>
                <Route path="/" exact component={Index}></Route>
                <Route path="/list/" component={List}></Route>
            </Router>
        </div> 
    )
}
 
export default HooksExample;