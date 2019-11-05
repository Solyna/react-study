import $ from 'jquery';
class Unit {
    /* 通过父类保存参数 */
    constructor(element) {
        this.currentElement = element;
    }
}
/*  */
class ReactTextUnit extends Unit {
    /* 每个类都会重写getMarkUp */
    getMarkUp(rootId) {
        /* 保存当前元素的id */
        this._rootId = rootId;
        /* 并且返回当前元素对应的html脚本 */
        return `<span data-reactid="${rootId}">${this.currentElement}</span>`
    }
}

class ReactNativeUnit extends Unit {
    getMarkUp(rootId) {
        this._rootId = rootId;
        let {
            type,
            props
        } = this.currentElement;
        /* 拼接需要渲染的内容 */
        let tagStart = `<${type} data-reactid="${rootId}"`
        let tagEnd = `</${type}`;
        let contentStr;
        for (let propName in props) {
            /* propName属性名是事件的情况 */
            if (/on[A-Z]/.test(propName)) {
                let eventType = propName.slice(2).toLowerCase(); //click事件
                /* 不能给字符串绑事件，所以用到事件委托 */
                /* react里面的事件都是通过事件委托的方式绑定 */
                $(document).on(eventType, `[data-reactid="${rootId}"]`, props[propName])
            } else if (propName === 'children') {
                contentStr = props[propName].map((child, idx) => {
                    /* 递归循环子节点 */
                    let childInstance = createReactUnit(child);
                    /* 返回的是多个元素的字符串的数组 */
                    return childInstance.getMarkUp(`${rootId}.${idx}`)
                }).join('')
            } else {
                tagStart += (`${propName}=${props[propName]}`)

            }
        }
        return tagStart + '>' + contentStr + tagEnd
    }
}
/* 负责渲染react组件的 */
class ReactCompositUnit extends Unit {
    getMarkUp(rootId) {
        this._rootId = rootId;
        let {
            type: Component,//type:Counter
            props//{name:'xxx'}
        } = this.currentElement;

        /* 返回当前类的组件实例，这个组件实例有render方法 */
        let componentInstance = new Component(props)

        componentInstance.componentWillMount&&componentInstance.componentWillMount()
       
        /* 调用render后返回的结果 */
        let reactComponentRender = componentInstance.render();//返回number:1

        /* 递归渲染 组件render后的返回结果*/
        let reactCompositUnitInstance = createReactUnit(reactComponentRender);
        
        //返回实例，还需拿到markup,继续往下看
        let markup = reactCompositUnitInstance.getMarkUp(rootId)//<span data-reactid="0">1</span>
        /* 在递归后绑定的事件，  儿子先绑定成功后，再绑定父亲 */
        $(document).on('mounted',()=>{
            componentInstance.componentDidMount&&componentInstance.componentDidMount()
        })
       
        return markup; //实现把render方法返回的结果 作为字符串返还回去
    }
}

function createReactUnit(element) {
    /* 渲染字符串文本 */
    if (typeof element === 'string' || typeof element === 'number') {
        /* 返回当前类型的实例 */
        /* 该类型的实例上有一个方法getMarkUp */
        return new ReactTextUnit(element)
    }
    /* 渲染jsx语法 */
    if (typeof element === 'object' && typeof element.type === 'string') {
        return new ReactNativeUnit(element);
    }
    /* 渲染类 */
    if (typeof element === 'object' && typeof element.type === 'function') {
        /* 返回当前复合组件的实例 */
        return new ReactCompositUnit(element); //{type:Counter,{name:'xxx'}}
    }
}
export default createReactUnit;