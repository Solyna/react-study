import React, { useState,useMemo } from 'react';

function ChildComponent({name,children}){
    function changeXiaohong(name){
        console.log('她来了，她来了。小红向我们走来了')
        return name+',小红向我们走来了'
    }

    // const actionXiaohong = changeXiaohong(name)
    /* useMemo主要用来解决使用React hooks产生的无用渲染的性能问题 */
    /* 使用function的形式来声明组件，失去了shouldCompnentUpdate（在组件更新之前）这个生命周期，
    也就是说我们没有办法通过组件更新前条件来决定组件是否更新。
    而且在函数组件中，也不再区分mount和update两个状态，
    这意味着函数组件的每一次调用都会执行内部的所有逻辑，就带来了非常大的性能损耗。 */
    const actionXiaohong = useMemo(()=>changeXiaohong(name),[name]) 
    return (
        <div>
            <div>{actionXiaohong}</div>
            <div>{children}</div>
        </div>
    )
}

function Example7(){
    const [xiaohong , setXiaohong] = useState('小红待客状态')
    const [zhiling , setZhiling] = useState('志玲待客状态')
    return(
        <div>
           <button onClick={()=>{setXiaohong(new Date().getTime())}}>小红</button>
           <button onClick={()=>{setZhiling(new Date().getTime()+',志玲向我们走来了')}}>志玲</button>
           <ChildComponent name={xiaohong}>{zhiling}</ChildComponent>
        </div>
    )
}
export default Example7;