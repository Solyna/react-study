import Link from 'next/link';
/* withRouter是Next.js框架的高级组件，用来处理路由用 */
import {withRouter} from 'next/router'


 const RouterB = ({router})=>
    {
        return(
            <>
                <div>{router.query.name}就是传过来的参数啦</div>
                <div>标签式导航B页面</div>
                <Link href="/"><a>返回首页</a></Link>
            </>
        )
    }

export default withRouter(RouterB)