import React from 'react';
import G2 from '@antv/g2';

class SampleChart extends React.Component {
    constructor(props) {
      super(props);
      this.containerRef = React.createRef();
    }

    componentDidMount() {
        // G2 初始化图形代码
        this.chart = new G2.Chart({
          // this.containerRef.current 即为引用
          container: this.containerRef.current,
          width: 450,
          height: 300
        });
        // 下文会介绍
        this.refreshChart();
    }
    refreshChart = () => {
        // 接收 data 属性作为数据源
        this.chart.source(this.props.data);
        // 此处为硬编码，配置源自 G2 官方示例： https://github.com/antvis/g2
        // 实际开发中需要封装，推荐直接使用 BizCharts。
        this.chart.interval().position('genre*sold').color('genre');
        this.chart.render();
    };
    /* 需要监听组件更新事件，data更新时重新画图。 */
    componentDidUpdate(prevProps) {
      /* 如果当前的 data 没有变化我们图表当然不需要重新绘制。因而，添加一个检查只有 data 更新时才重绘 */
      if(prevProps.data !== this.props.data){
        this.refreshChart();
      }
    }
    /* 如果这个组件不再被使用，那么初始化的图表也应该随着组件一并被销毁。所以，我们还需要监听一下卸载事件 */
    componentWillUnmount() {
      if (this.chart) {
        this.chart.destroy();
      }
    }
    

/* 
    此处我们看到了一个新的属性 ref，通过该属性我们可以获取经过 render 后的真实节点的引用。
    如果 ref 的节点是一个 dom 元素，那么你得到的是文档中真实的 dom 节点，
    如果 ref 的节点是一个 component，那么你获得将是该 component 渲染后的实例。而在这里，我们获取的是 div 的 dom。
    其中 React.createRef 是 React 提供的一个创建引用的便捷方法。
    在获取了 dom 元素后，我们便可以对其进行图表的初始化了。 
*/
    render() {
      return (
        <div ref={this.containerRef} />
      );
    }
  }
  
export default SampleChart;