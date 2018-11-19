import React, {Component} from 'react';
import styles from "../../static/css/bag.scss";
import logoLineImg from "../../static/images/share/banner_line_logo.png"
import gotOneImg from "../../static/images/share/got_1.png"
import gotTwoImg from "../../static/images/share/got_2.png"
import gotBtnImg from "../../static/images/share/got_btn.png"
class ShareGotBagIndex extends Component {
    componentDidMount() {
        document.title = "送你一份新人大礼包"
    }

    handleGot = () => {
        this.props.history.push("/share/form")

    };
    render() {
        return (
            <div className={styles['yfz-main']}>
                <h4>云辅助·让玩游戏更便捷</h4>
                <img src={logoLineImg} alt="云辅助·让玩游戏更便捷"/>
                <ul className={styles["imgGroup"]}>
                    <li><img src={gotOneImg} alt="云辅助"/></li>
                    <li><img src={gotTwoImg} alt="云辅助"/></li>
                </ul>
                <div className={styles["gotBagImg"]}><img src={gotBtnImg} alt="邀您免费领取3重豪礼" /></div>
                <ul className="txt mt40 auto">
                    <li>1、超好用的热门游戏辅助，全部免费</li>
                    <li>2、游戏托管，打怪刷BOSS24小时不间断</li>
                    <li>3、全网视频VIP会员，统统免费看</li>
                </ul>
                
                <button className="btn-max" onClick={this.handleGot}>免费领取</button>
            </div>
        );
    }
}
export default ShareGotBagIndex;
