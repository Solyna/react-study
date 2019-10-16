import React, { Component } from 'react';
class List extends Component {
    constructor(props){
        super(props)
        this.state={}
    }
    render() { 
        return ( <h2>List-Page->{this.state.id}</h2> );
    }
    componentDidMount() {
        /* 动态传值-3 ，在组件上接收并显示传递值 */
        console.log(this.props)
        /* 
        path:自己定义的路由规则，可以清楚的看到是可以传递id参数的。
        url: 真实的访问路径，这上面可以清楚的看到传递过来的参数是什么。
        params:传递过来的参数，key和value值。
        */
        let tempId = this.props.match.params.id;
        this.setState({
            id:tempId
        })
    }
}
 
export default List;