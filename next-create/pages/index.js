import React from 'react'
/* 标签式导航 */
import Link from 'next/link'
/* 编程式跳转 */
import Router from 'next/router'

const Home=()=>{
/* 六个钩子事件 */
/* routeChangeStart */
/* routeChangeComplete */
/* beforeHistoryChange */
/* routeChangeError */
/* hashChangeStart */
/* hashChangeComplete */

  Router.events.on('routeChangeStart',(...args)=>{
    console.log('1.routeChangeStart->路由开始变化，参数为:',...args)
  })

  Router.events.on('routeChangeComplete',(...args)=>{
    console.log('2.routeChangeComplete->路由变化结束，参数为:',...args)
  })

  Router.events.on('beforeHistoryChange',(...args)=>{
    console.log('3.beforeHistoryChange->路由变化结束，参数为:',...args)
  })
  /* 404的情况无法监听 */
  Router.events.on('routeChangeError',(...args)=>{
    console.log('4.routeChangeError->路由发生错误，参数为:',...args)
  })
  Router.events.on('hashChangeStart',(...args)=>{
    console.log('5.hashChangeStart->哈希路由切换之前，参数为:',...args)
  })
  Router.events.on('hashChangeComplete',(...args)=>{
    console.log('6.hashChangeComplete->哈希路由转变之后，参数为:',...args)
  })



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
      <div>
        <Link href="#songling"><a>选择宋00</a></Link>
      </div>
    </>
  )
  
}

export default Home;
