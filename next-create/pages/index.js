import React from 'react'
/* 标签式导航 */
import Link from 'next/link'
/* 编程式跳转 */
import Router from 'next/router'

const Home=()=>{
  function gotoB(){
   /*  Router.push('/routerB?name=编程式传参参数B') */
   Router.push({
     pathname:'/routerB',
     query:{name:'参数BBBBB'}
   })
  }

  return(
    <>
      <div>我是首页</div>
      <div><Link href={{pathname:'/routerA',query:{name:'参数a'}}}><a>去RouterA页面</a></Link></div>
      <div><Link href="/routerB?name=参数b"><a>去RouterB页面</a></Link></div>
      <div>
        <button onClick={gotoB}>编程式导航跳转到A页面</button>
      </div>
    </>
  )
  
}

export default Home;
