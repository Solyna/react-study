import React from 'react'
/* 标签式导航 */
import Link from 'next/link'
/* 编程式跳转 */
import Router from 'next/router'

const Home=()=>{
  function gotoA(){
    Router.push('/routerA')
  }

  return(
    <>
      <div>我是首页</div>
      <div><Link href="/routerA"><a>去RouterA页面</a></Link></div>
      <div><Link href="/routerB"><a>去RouterB页面</a></Link></div>
      <div>
        <button onClick={gotoA}>编程式导航跳转到A页面</button>
      </div>
    </>
  )
  
}

export default Home;
