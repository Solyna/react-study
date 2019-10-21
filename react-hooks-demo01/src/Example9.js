import React, { useState, useEffect, useCallback } from 'react';

/* 自定义Hook函数 */
function useWinSize(){
    const [ size,setSize ] = useState({
        width:document.documentElement.clientWidth,//默认值
        height:document.documentElement.clientHeight,
    })
// 重新计算大小
//useCallback缓存整个方法
    const onResize = useCallback(()=>{
        setSize({
            /* 修改后 */
            width:document.documentElement.clientWidth,//默认值
            height:document.documentElement.clientHeight
        })
    },[])

    useEffect(()=>{
        /* 注册Windows监听事件 */
        window.addEventListener('resize',onResize)
        return ()=>{
            window.removeEventListener('resize',onResize)
        }
    },[onResize])

    return size;
}

/* 使用 */

function Example9(){
    const size = useWinSize();

    return (
        <div>页面size:{size.width}x{size.height}</div>
    )
}

export default Example9;