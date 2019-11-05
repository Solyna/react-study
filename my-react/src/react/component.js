class Component{
    /* 接收子类传过来的属性 */
    constructor(props){
        /* 并挂载到自己身上 */
        this.props = props
    }
    setState(){
        console.log('更新状态')
    }
}
export default Component;