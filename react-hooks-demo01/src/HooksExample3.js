import React, { useState,useEffect } from 'react';

function HooksExample3(){
    const [count,setCount] = useState(0);//数组解构
    useEffect(()=>{
        /* 第一次代码渲染和和每次组件更新都会执行这个函数 */
        console.log(`useEffect=>You clicked ${count} times`)
        /*  */
    },[count])
    return(
        <div>
            <p>ReactHooks写法：</p>
            <p>使用只支持react版本16.8以上</p>
            <p>You clicked {count}</p>
            <button onClick={()=>setCount(count+1)}>Click me</button>
        </div> 
    )
}
 
export default HooksExample3;

/* useEffect() */