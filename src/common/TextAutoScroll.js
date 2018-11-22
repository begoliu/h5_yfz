import React, {Component} from 'react';
import {TextAutoScroll} from "../util/share";
import styles from '../static/css/share.scss'

class TextAutoScrollComp extends Component {
    componentDidMount() {
        let textAutoScroll = new TextAutoScroll();
        textAutoScroll.startScroll(document.querySelector("#text"), textAutoScroll.ScrollTypeEnum.LeftRight);
    }

    render() {
        return (

            <div id="text" className={styles['textAutoScroll']} style={{height: 'auto'}}>
                {this.props.data.map((item,i)=> <span>{item.substring(0,3) + "****" + item.substring(7)} 刚刚获得24小时畅玩会员</span>)}
            </div>

        )
    }
}

export default TextAutoScrollComp;