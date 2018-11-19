import React, {Component} from 'react';
import {Link} from "react-router-dom";
import styles from "../../static/css/share.scss";
import logoImg from "../../static/images/share/icon_logo_small.png"
class ShareDownload extends Component {
    componentDidMount() {
        document.title = "12553";
    }

    render() {
        return (
            <div className={styles['yfz-download']}>
                <div className="top">
                    <h4>恭喜您获得24小时畅玩会员特权</h4>
                    <div className="tel">
                        已放入账户：152****9178  
                        <Link to="/share/form">修改>></Link>
                    </div>
                    
                </div>
                <ul>
                    <li>
                        <span>超好用的热门游戏辅助，全部免费</span>
                        <button>去使用</button>
                    </li>
                    <li>
                        <span>游戏托管，打怪刷BOSS24小时不间断</span>
                        <button>去使用</button>
                    </li>
                    <li>
                        <span>全网视频VIP会员，统统免费看</span>
                        <button>去观看</button>
                    </li>
                </ul>
                <div className="btn">
                    <button><img src={logoImg} alt="云辅助APP" />立即下载云辅助APP</button>
                </div>
            </div>
        );
    }
}

export default ShareDownload;