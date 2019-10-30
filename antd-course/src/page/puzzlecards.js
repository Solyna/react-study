import React, { Component } from 'react';
import { Card } from 'antd';
import { connect } from 'dva';

const namespace = 'puzzlecards';

const mapStateToProps = (state) => {
    const cardList = state[namespace].data;
    return{
        cardList
    }
}
/* 通过 mapDispatchToProps 给页面注入方法 onDidMount
页面在 mount 完毕后调用该方法。它发送一个 puzzlecards/queryInitCards 的 action，
这个请求被 puzzlecards 中的 queryInitCards 这个 effects 所处理。 */
const mapDispatchToProps = (dispatch) =>{
    return {
        onDidMount:()=>{
            dispatch({
                type:`${namespace}/queryInitCards`,
            })
        }
    }
}

@connect(mapStateToProps,mapDispatchToProps)

export default class PuzzleCardsPage extends Component {
    componentDidMount(){
        this.props.onDidMount();
    }
    render() { 
        return ( 
            <div>
                {
                    this.props.cardList.map(card=>{
                    return(
                        <Card key={card.id}>
                            <div>Q:{card.title}</div>
                            <div>
                                <strong>A:{card.body}</strong>
                            </div>
                        </Card>
                    )
                })
                }

            </div>
         );
    }
}
 
