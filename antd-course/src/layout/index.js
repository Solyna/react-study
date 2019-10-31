import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import Link from 'umi/link';

/* Header，Footer,Sider,Content组件在Layout 组件模块下 */
const {Header,Footer,Sider,Content} = Layout;

/* 引入子菜单组件 */
const SubMenu = Menu.SubMenu;

class BasicLayout extends Component{
    render(){
        return(
            <Layout>
                <Sider width={256} style={{minHeight:'100vh',color:'white'}}>
                    {/* Menu 是 Sider 的子组件，SubMenu 是 Menu 的子组件，Menu.Item 是最小的导航选项。 */}
                    <div style={{ height: '32px', background: 'rgba(255,255,255,.2)', margin: '16px'}}/>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1">
                            <Icon type="pie-chart" />
                            <span>Helloworld</span>
                        </Menu.Item>
                        <SubMenu
                            key="sub1"
                            title={<span><Icon type="dashboard" /><span>Dashboard</span></span>}
                            >
                                <Menu.Item key="2"><Link to="/dashboard/analysis">分析页</Link></Menu.Item>
                                <Menu.Item key="3"><Link to="/dashboard/monitor">监控页</Link></Menu.Item>
                                <Menu.Item key="4"><Link to="/dashboard/workplace">工作台</Link></Menu.Item>
                        </SubMenu>
                        <SubMenu
                            key="sub2"
                            title={<span><Icon type="dashboard" /><span>复杂页面</span></span>}>
                                <Menu.Item key="5"><Link to="/complex/table">表格</Link></Menu.Item>
                                <Menu.Item key="6"><Link to="/complex/form">表单</Link></Menu.Item>
                                <Menu.Item key="7"><Link to="/complex/chart">图表</Link></Menu.Item>

                        </SubMenu>
                        <SubMenu
                            key="sub3"
                            title={<span><Icon type="dashboard" /><span>进阶功能</span></span>}>
                                <Menu.Item key="8"><Link to="/advanced/typescript">使用typeScript</Link></Menu.Item>
                        </SubMenu>
                    </Menu> 
                </Sider>
                <Layout>
                    <Header style={{background:'#fff',textAlign:'center',padding:0}}>头部</Header>
                    <Content style={{margin:'24px 16px 0'}}>
                        <div style={{padding:24,background:'#fff',minHeight:360}}>   
                            { this.props.children }
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </Layout>
        )
    }
}

export default BasicLayout;