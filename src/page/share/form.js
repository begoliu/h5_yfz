import React, {Component} from 'react';
import styles from "../../static/css/share.scss";
import bannerLineMoneyImg from "../../static/images/share/banner_line_money.jpg";
import logoImg from "../../static/images/share/icon_logo_big.png"
import bannerTxtOneImg from "../../static/images/share/banner_txt_1.jpg";
import {authTel} from "../../util/auth";

class ShareFormPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tel:''
        }
    }

    componentDidMount() {
        document.title = "送你一份新人大礼包";
    }

    handleChange = () => {
        
        
    };
    handleForm = (e) => {
        e.preventDefault();
        console.log(this.inputNode.value.match(/^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/));
        if(authTel(this.inputNode.value)){
            this.props.history.push("/share/download");
        }else{
            alert("请输入正确的手机号")
        }
        console.log();

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
                        <input ref={input=>this.inputNode = input} type="text" placeholder="请输入手机号码" onChange={this.handleChange} />
                        <button className="btn-max" onClick={this.handleForm}>立即领取</button>
                </div>
            </div>
        );
    }
}

export default ShareFormPage;