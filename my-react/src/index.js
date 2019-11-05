import React from './react';

class SubCounter {
    componentWillMount(){
        console.log('child组件将要挂载')
    }
    componentDidMount(){
        console.log('child组件挂载完成')
    }
    render(){
        return '123'
    }
}

class Counter extends React.Component {

    constructor(props){
        super(props);
        this.state = {number:1}
    }
    componentWillMount(){
        console.log('parent 组件将要挂载')
    }
    componentDidMount(){
        console.log('parent 组件挂载完成')
    }
    render(){
        console.log(this.props.name);
        // return this.state.number;
        return <SubCounter/>
    }
}
// React.render('hello', document.getElementById('root'))

function say(){
    alert(1)
}

// createElement(标签，属性，内容,子元素)
let element = React.createElement('div',{name:'xxx'},'hello',
React.createElement('button',{onClick:say},'123'));


// console.log(element instanceof Element);
/* jsx语法 转化成  虚拟dom */
// React.render(element, document.getElementById('root'))

/*  */
/* 
    <Counter name="songling"></Counter>
    等于
    React.createElement(Counter,{name:'songling'}) 
*/
React.render(React.createElement(Counter,{name:'songling'}), document.getElementById('root'))
