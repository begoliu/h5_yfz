import React, {Component} from 'react';
import styles from "../../static/css/share.scss";
import bannerLineMoneyImg from "../../static/images/share/banner_line_money.jpg";
import logoImg from "../../static/images/share/icon_logo_big.png"
import bannerTxtOneImg from "../../static/images/share/banner_txt_1.jpg"

class ShareFormPage extends Component {
    componentDidMount() {
        document.title = "送你一份新人大礼包";
    }

    handleForm = (e) => {
        e.preventDefault();
        console.log(this.inputNode.value);
    };
    
    render() {
        return (
            <div className={styles['yfz-from']}>
                <div className="top-title">
                    <img src={bannerLineMoneyImg} alt="云辅助" />
                    <div className="title">
                        <img className="logo" src={logoImg} alt="云辅助" />
                        <span><b>云辅助</b>·让玩游戏更便捷</span>
                    </div>
                </div>
                
                <div className={styles['input-box']}>
                    <img src={bannerTxtOneImg} alt="送你24小时畅玩会员特权"/>
                        <input ref={input=>this.inputNode = input} type="text" placeholder="请输入手机号码" />
                        <button className="btn-max" onClick={this.handleForm}>立即领取</button>
                </div>
            </div>
        );
    }
}

export default ShareFormPage;