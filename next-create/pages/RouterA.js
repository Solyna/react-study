import Link from 'next/link';
import React, { useState } from 'react';

function RouterA (){
    const [color,setColor] = useState('blue');

    const changeColor=()=>{
        setColor(color=='blue'?'red':'blue')
    }
    return(
        <>
            <div>标签式导航A页面</div>
            {/* ！！！注意这里有个坑：他不支持兄弟标签并列的情况 */}
            {/*  <Link href="/jspangA">
                <span>去JspangA页面</span>
                <span>前端博客</span>
            </Link> */}
            {/* 可以把这两个标签外边套一个父标签 */}
            {/* <Link href="/jspangA">
                <a>
                    <span>去JspangA页面</span>
                    <span>前端博客</span>
                </a>
            </Link> */}
            <Link href="/">
                <a>返回首页</a>
            </Link>
            <div>
                <button onClick={changeColor}>改变颜色</button>
            </div>
            <style jsx>
                {`
                    div {color:${color}}
                `}
            </style>
        </>
)}
export default RouterA;