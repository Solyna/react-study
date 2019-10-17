import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Index from './Pages/Index';
import List from './Pages/List';
import Home from './Pages/Home';

/* 无状态组件 */
function AppRouter() {
  return (
    <Router>
        <ul>
            <li> <Link to="/">首页</Link> </li>
            {/* 动态传值-2,设置传递的id值 */}
            <li><Link to="/list/123">列表</Link> </li>
        </ul>
        {/* exact精确匹配,不要的话只要路由里有'/'都会匹配到然后跳转,一般首页要做精确匹配 */}
        <Route path="/" exact component={Index} />
        {/* 动态传值-1.设置规则：设置以:开始，紧跟着你传递的key名称 */}
        <Route path="/list/:id" component={List} />
        <Route path="/home/" component={Home} />
    </Router>
  );
}
export default AppRouter;