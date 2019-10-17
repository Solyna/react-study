import React, { useState , createContext,useContext } from 'react';
/* createContext函数创建context */
/* context的作用就是对它包含的组件树提供全局共享数据的一种技术 */
const CountContext = createContext();
/* 引入一个Counter组件 */
function Counter(){
    const count = useContext(CountContext);
    return(
        <h2>通过useContext接收父组件传过来的值：{count}</h2>
    )
}

function HooksExample4(){
    const [ count , setCount ] = useState(0);
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={()=>{setCount(count+1)}}>click me</button>
            {/* 把count变量允许跨层级实现传递和使用（也就是实现上下文）
            当父组件的count变量发生变化时，子组件也会发生变化 */}
            <CountContext.Provider value={count}>
                <Counter/>
            </CountContext.Provider>
        </div>
    )
}
export default HooksExample4;