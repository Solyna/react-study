import React from 'react';
import { Button } from 'antd'

/* 无状态组件 */
const Hello: React.SFC<{ name: string }> = ({ name }) => <div>Hello,{name}</div>

/*Class声明组件 */
class Message extends React.Component<{
    message: string
}, {
    count: number
}>{
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }
    public increment = () => {
        const { count } = this.state;
        this.setState({
            count: count + 1
        })
    }
    public render() {
        return (
            <div>
                {/* 通过<>的第一个参数来指定props的类型。通过第二个参数来指定state的类型。 */}
                <Button onClick={this.increment}>{this.props.message}</Button>
                <h2>{this.state.count}</h2>
                
            </div>
        )
    }
}

const App = () => (
    <>
        <Hello name={'123'} />
        <Message message="点击" />
    </>
)

export default App;