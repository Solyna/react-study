import React, { Component } from 'react';
import HooksExample from './HooksExample';
import HooksExample2 from './HooksExample2';
import HooksExample3 from './HooksExample3';

class Example extends Component {
    constructor(props) {
        super(props);
        this.state = { count:0 }
    }
    render() { 
        return ( 
            <div>
                <p>原始写法：</p>
                <p>You clicked {this.state.count}</p>
                <button onClick={this.addCount.bind(this)}>Click me</button>
                <HooksExample2/>
                <HooksExample3/>
                <HooksExample/>
            </div>
         );
    }
    addCount(){
        this.setState({
            count:this.state.count+1
        })
    }
}
 
export default Example;