import React, {Component} from 'react';
import styles from "../../static/css/share.scss";
import logoLineImg from "../../static/images/share/banner_line_logo.png"
import gotOneImg from "../../static/images/share/got_1.png"
import gotTwoImg from "../../static/images/share/got_2.png"
import gotBtnImg from "../../static/images/share/got_btn.png"
import {decode} from "../../util/crypto";
import {reqJson} from "../../util/auth";
import {message} from "antd";
import ShareFormComponent from "../../component/share/form";


class ShareGotBagIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNext:false,
            idBag:-1
        }
    }
    componentDidMount() {
        document.title = "送你一份新人大礼包";
        // alert(is_wechat());
    }

    handleGot = () => {
        
        
        
        let res = reqJson(this.props.location.search).hash === undefined ? -1 :
            decode(reqJson(this.props.location.search).hash);
        switch(res){
            case -1:
                message.error("无权限,不能访问!");
                break;
            default:

                let idBag = JSON.parse(res);
                //message.success(uid);
                this.setState({
                    isNext:true,
                    idBag
                });
                
                //校验用户id 接口
                break;
        }
    };
    render() {
 
        return this.state.isNext ?  (
            <ShareFormComponent data={this.state.idBag} isRedirect={true} />
        ) : (
            <div className={styles['yfz-bag']}>
                
                <h4>云辅助·让玩游戏更便捷{this.state.isNext}</h4>
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
        )
    }
}
export default ShareGotBagIndex;
