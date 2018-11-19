import "../../static/css/base.scss";
import styles from "../../static/css/invite.scss";
import React, {Component} from 'react';

import bannerImg from "../../static/images/share/banner.jpg";

class ShareAppIndex extends Component {
    componentDidMount() {
        document.title = "邀请有奖";
    }

    handleTarget = () => {
        // this.props.history.push("/");
    };
    render() {
        return (
            <div className={styles["yfz-main"]}>
                <div className={styles['banner']}>
                    <img src={bannerImg} alt="24小时畅玩会员特权" />
                    <div>
                        <span>152******25刚刚获得24小时畅玩会员</span>
                        <a href="http://www.288.com">规则></a>
                    </div>
                    <span>您邀请的好友也可获得24小时畅玩会员特权</span>
                </div>
                <button className="btn-max" onClick={this.handleTarget}>立即邀请</button>
                <h4>――&nbsp;&nbsp;邀请记录&nbsp;&nbsp;――</h4>
                <div className="inviter-list">
                    <h4>已获得 <b className="c-red fs28">72</b> 小时畅玩会员特权</h4>
                    <ul>
                        <li className="clear">
                            <span className="tel">152****1855</span>
                            <span className="res">已注册</span>
                            <div className="c-red">获得24小时</div>
                        </li>
                        <li className="clear">
                            <span className="tel">152****1855</span>
                            <span className="res">已注册</span>
                            <button className="btn-min">获得24小时</button>
                        </li>
                        <li className="clear">
                            <span className="tel">152****1855</span>
                            <span className="c-red">未注册</span>
                            <div className="c-red">获得24小时</div>
                        </li>
                        <li className="clear">
                            <span className="tel">152****1855</span>
                            <span className="res">已注册</span>
                            <button className="btn-min">获得24小时</button>
                        </li>
                        <li className="clear">
                            <span className="tel">152****1855</span>
                            <span className="c-red">未注册</span>
                            <div className="c-red">获得24小时</div>
                        </li>
                        <li className="clear">
                            <span className="tel">152****1855</span>
                            <span className="res">已注册</span>
                            <button className="btn-min">获得24小时</button>
                        </li>
                    </ul>
                </div>
                <ul className="share-btn mt30">
                    <li onClick={window.wx.actionFromJs()}>微信邀请</li>
                    <li onClick={window.wx.actionFromJs()}>朋友圈邀请</li>
                </ul>
            </div>
        );
    }
}
export default ShareAppIndex;
