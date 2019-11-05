import $ from 'jquery';
import createReactUnit from './unit';
import createElement from './element';
import Component from './component';
let React = {
    render,
    nextRootIndex:0,
    createElement,
    Component
}

/* 给每个元素添加一个属性，为了方便获取到这个元素 */
/* render方法里传入元素和容器 */
function render(element,container){
    /* 写一个工厂函数，来创建对应的react元素 */
    /* 通过这个工厂函数来创建 */
    /* 创建一个react单元实例 */
    /*let markUp = `<span data-reactid="${React.nextRootIndex}">${element}</span>`
      $(container).html(markUp); */
    let createReactUnitInstance = createReactUnit(element);
    let markUp = createReactUnitInstance.getMarkUp(React.nextRootIndex);
    $(container).html(markUp);
    /*触发 挂载完成的方法 */
    $(document).trigger('mounted');//所有组件都ok了
}
export default React;