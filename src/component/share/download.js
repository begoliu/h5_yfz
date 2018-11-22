import React, {Component} from 'react';
import styles from "../../static/css/share.scss";
import logoImg from "../../static/images/share/icon_logo_small.png"
import {Spin} from "antd";
import {browser} from "../../util/auth";
import ShareFormComponent from "./form";

class ShareDownLoadComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible:false,
            isLoad:false,
            isExist:false
        }
    }

    componentDidMount() {
        if(this.props.hasOwnProperty("location") && this.props.location.hasOwnProperty("state") && this.props.location.state !== undefined) {
            this.setState({
                isExist:true
            })
        }
        if(this.props.hasOwnProperty("data")){
            this.setState({
                isExist:true
            })
        }
    }

    modifyPhone = () => {
        this.setState({
            visible:true
        })
    };

    showDownload = (e) => {
        this.setState({
            isLoad:true
        });
        if (browser.versions.ios) {
            window.location.href = "application://com.myun.helper";
            
            setTimeout(() => {
                this.setState({
                    isLoad:false
                });
                window.location.href = "http://www.288.com/yfz.apk";
                window.location.href = "http://www.288.com/yfz.apk";  //为什么要加两遍我下面会说到
            },2000)
        }else if (browser.versions.android){
            window.location = "application://com.myun.helper";
            setTimeout(()=>{
                this.setState({
                    isLoad:false
                });
                window.location.href = "http://www.288.com/yfz.apk";
            },2000)
        }
    };
  
    render() {
       let telHide = this.props.hasOwnProperty("location") && this.props.location.hasOwnProperty("state") && this.props.location.state !== undefined ? this.props.location.state.curUserInfo.telHide :
           this.props.hasOwnProperty('data') && this.props.data.telHide;
        return !this.state.visible ? (
            
            <div className={styles['yfz-download']}>
                {this.state.isLoad && <Spin className="spin" />}
                <div className="top">
                    <h4>恭喜您获得24小时畅玩会员特权</h4>
                    {this.state.isExist && (
                        <div className="tel">
                                已放入账户：{telHide}
                                <span onClick={this.modifyPhone}>修改>></span>
                            {/*{!this.props.hasOwnProperty("location") || <span onClick={this.modifyPhone}>修改>></span>}*/}
                        </div>
                    )}
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
                    <button onClick={this.showDownload}><img src={logoImg} alt="云辅助APP" />立即下载云辅助APP</button>
                </div>
            </div>
        ):(
            <ShareFormComponent 
                data = {this.props.hasOwnProperty("location") ? this.props.location.state.curUserInfo : this.props.data} 
                modify = {this.state.visible}
                isRedirect = {false}
            />
        );
    }
}

export default ShareDownLoadComponent;