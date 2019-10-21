import Link from 'next/link';
/* withRouter是Next.js框架的高级组件，用来处理路由用 */
import {withRouter} from 'next/router'
import axios from 'axios'

 const RouterB = ({router,list})=>
    {
        return(
            <>
                <div>{router.query.name}就是传过来的参数啦</div>
                {/* 接口返回的数据 */}
                <div>{list}</div>
                <div>标签式导航B页面</div>
                <Link href="/"><a>返回首页</a></Link>
                <style jsx>
                    {`
                        div{color:blue;}  
                    `}
                </style>
            </>
        )
    }
/* getInitialProps只能写数据请求 */
/* RouterB.getInitialProps = async ()=>{
    const promise =new Promise((resolve)=>{
        axios('https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList').then(
            (res)=>{
                console.log('远程数据结果：',res)
                resolve(res.data.data)
            }
        )
    })
    return await promise
} */

export default withRouter(RouterB)