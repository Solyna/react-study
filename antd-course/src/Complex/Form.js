import React from 'react';
import { Table, Modal, Button, Form, Input } from 'antd';
import {connect} from 'dva';
const FormItem = Form.Item;

class Forms extends React.Component{
    state={
        visible:false
    }
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
    /* 展示表单弹框 */
    showModal = () =>{
        this.setState({
            visible:true
        })
    }
    /* 撤销操作 */
    handleCancel = () => {
        this.setState({
          visible: false,
        });
    }
    /* 确定操作 */
    handleOk = () => {
        const { dispatch, form: { validateFields } } = this.props;
        /* validateFields方法用来验证表单是否完成填写，方便提交操作 */
        validateFields((err, values) => {
          if (!err) {
            dispatch({
              type: 'cards/addOne',
              payload: values,
            });
            this.setState({ visible: false });
          }
        });
    }
    componentDidMount() {
        this.props.dispatch({
            type:'cards/queryList'
        })
    }
    render(){
        const {visible} = this.state;
        /* getFieldDecorator 是用于将包裹的组件与表单进行双向绑定使用。 */
        const {cardsList,cardsLoading,form:{getFieldDecorator}} = this.props
        return(
            <div>
                <Table columns={this.columns} dataSource={cardsList} loading={cardsLoading} rowKey="id"></Table>
            
                <Button onClick={this.showModal}>新建</Button>
                <Modal 
                title="新建记录"
                visible={visible}
                onCancel={this.handleCancel}
                onOk={this.handleOk}>
                    <Form>
                        <FormItem lable="名称">
                            <span>名称:</span>
                            {/* 设置改表单域是否是必填项（required: true） */}
                            {
                                getFieldDecorator('name',{
                                    rules:[{required:true}],
                                })(
                                    <Input/>
                                )
                            }                   
                        </FormItem>
                        <FormItem lable="描述">
                            <span>描述:</span>
                            {getFieldDecorator('desc')(
                                <Input />
                            )}
                        </FormItem>
                        {/* 是否需要类型检查（type: url） */}
                        <FormItem lable="链接">
                            <span>链接:</span>
                            {
                                getFieldDecorator('url', {
                                    rules: [{ type: 'url' }],
                                })(
                                    <Input />
                                )
                            }
                        </FormItem>
                    </Form>

                </Modal>
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

/* Form.create()(Forms)将页面和表单关联,这段代码的作用是创建一个高阶组件，为页面组件 Forms 提供表单所需要的内容(this.props.form)。 */
export default connect(mapStateToProps)(Form.create()(Forms));