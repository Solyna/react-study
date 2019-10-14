import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ServiceItem extends Component {
    constructor(props){
        super(props)
        this.handleClick=this.handleClick.bind(this)//构造函数中绑定性能会高一些，特别是在高级组件开发中，会有很大的作用
    }
    shouldComponentUpdate(nextProps, nextState) {
         if(nextProps.content !== this.props.content){
             return true
         }else{
             return false
         }
    }
    render() { 
        return ( 
            <li onClick={this.handleClick}>
               {this.props.avname}为你服务- {this.props.content}
            </li>
         );
    }
    handleClick(){
        console.log(this.props.index)
        this.props.deleteItem(this.props.index);
    }
}
ServiceItem.propTypes = {
    avname:PropTypes.string.isRequired,
    content:PropTypes.string,
    index:PropTypes.number,
    deleteItem:PropTypes.func
}
ServiceItem.defaultProps={
    avname:'松岛松'
}
export default ServiceItem;