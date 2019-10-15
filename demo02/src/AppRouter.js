import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Index from './Pages/Index';
import List from './Pages/List';

/* 无状态组件 */
function AppRouter() {
  return (
    <Router>
        <ul>
            <li> <Link to="/">首页</Link> </li>
            <li><Link to="/list/">列表</Link> </li>
        </ul>
        {/* exact精确匹配,不要的话只要路由里有'/'都会匹配到然后跳转,一般首页要做精确匹配 */}
        <Route path="/" exact component={Index} />
        <Route path="/list/" component={List} />
    </Router>
  );
}
export default AppRouter;