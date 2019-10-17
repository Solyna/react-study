import React, { Component } from 'react';
import HooksExample from './HooksExample';
import HooksExample2 from './HooksExample2';
import HooksExample3 from './HooksExample3';
import HooksExample4 from './HooksExample4';
import UseReducerDemo from './UseReducerDemo';
import Example6 from './useReducer/Example6';

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
                <p>UseReducer案例</p><hr/>
                <Example6/>
                <p>HooksExample2</p><hr/>
                <HooksExample2/>
                <p>HooksExample3</p><hr/>
                <HooksExample3/>
                <p>HooksExample</p><hr/>
                <HooksExample/>
                <p>HooksExample4</p><hr/>
                <HooksExample4/>
                <p>UseReducerDemo</p><hr/>
                <UseReducerDemo/>
                
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