import React from 'react';
import { Table } from 'antd';
import {connect} from 'dva';

class List extends React.Component{
    columns=[
        {
            title: '名称',
            dataIndex: 'name',
          },
          {
            title: '描述',
            dataIndex: 'desc',
          },
          {
            title: '链接',
            dataIndex: 'url',
            render(value) {
              return (
                <a href={value}>{value}</a>
              );
            },
          }
    ]
    componentDidMount() {
        this.props.dispatch({
            type:'cards/queryList'
        })
    }
    render(){
        const {cardsList,cardsLoading} = this.props
        return(
            <div>
                <Table columns={this.columns} dataSource={cardsList} loading={cardsLoading} rowKey="id"></Table>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        cardsList: state.cards.cardsList,
        /* loading 是dva-loading注入到state的，表示请求状态，结构如下 */
        /* 
        loading: {
          global: false, //全局加载状态
          models: {      //model加载状态
            users: false,
            todos: false,
            ...
          },
          effects: {    // effects加载状态
            'users/list': false  
          }
        }
        文档链接：https://github.com/dvajs/dva/tree/master/packages/dva-loading
        */
        cardsLoading: state.loading.effects['cards/queryList'],
    }
}


export default connect(mapStateToProps)(List);