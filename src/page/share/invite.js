import styles from "../../static/css/share.scss";
import logoImg from "../../static/images/share/icon_logo_small.png"
import React, {Component} from 'react';
import bannerImg from "../../static/images/share/banner.jpg";
import {is_touch,reqJson} from "../../util/auth";
import {encrypt} from "../../util/crypto";
import {AutoScroll} from "../../util/share";
import Luo from "iscroll-luo";
import {shareApi, shareGotTelApi} from "../../api/api";
import {message,Spin} from 'antd';
import TextAutoScrollComp from "../../common/TextAutoScroll";



class ShareAppIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data:[],
            page:1,
            isLoad:false,
            gift_time:0,
            phones:[]
        }
    }

    componentDidMount() {
        document.title = "邀请好友";
        let params = reqJson(this.props.location.search);
        this.getList();
        this.getPhoneList();
        console.log(params);
        switch (params.event) {
            default:
                break;
        }
        console.log("begoHASH",encrypt(JSON.stringify({
            uid: 23,
            promotion_id: 1
        })));
        this.shareData = {
            title:"送你一个游戏云端挂机神器,还可免费看各大平台VIP视频哦",
            desc:"腾讯、爱奇艺、芒果TV、优酷VIP视频免费看;手机游戏云端24小时挂机不费流量！",
            image_url:logoImg,
            url:'http://192.168.13.84:3000/share/index?hash=' + encrypt(JSON.stringify(params))
        };
        this.boxData = {
            box:document.querySelector("." + styles['popup-share']),
            bg:document.querySelector("." + styles['popup-share-bg'])
        };
       let autoScroll =  new AutoScroll();
        document.querySelector("#autoTxt") === null || autoScroll.txtScroll(document.querySelector("#autoTxt"),"top");
        
    }
    
    getList = async (isload) => {
        this.setState({
            isLoad:true
        });
        let params = {
            user_id:reqJson(this.props.location.search).uid || null,
            page_size:10,
            page:this.state.page
        };

        // Object.assign(6);
        shareApi(params).then(res=>{
            this.setState({
                isLoad: false,
                gift_time:res.data.gift_time
            });
            if(isload){
                 this.setState({
                    data:[...this.state.data,...res.data.data.data_list]
                });
                console.log("上拉数据 : ",this.state.data);
            }else{
                 this.setState({
                    page:1,
                    data:res.data.data.data_list
                });
                console.log("下拉数据 : ",this.state.data);
            }
        }).catch(e=>{
            message.error("数据获取失败");
        });
    };
    getPhoneList = (params) => {
        shareGotTelApi({
            user_id:reqJson(this.props.location.search).uid || null
        }).then(res=>{
            this.setState({
                phones:res.data.property
            })
        })
    };
    handleTarget = (event) => {
        switch (event) {
            case "wx":
                //调用java方法
                window.h5Bridge.onShareWeChat(this.shareData.title,this.shareData.desc,this.shareData.image_url, this.shareData.url);
                this.handleCancel(this.boxData);
                break;
            case "py":
                //调用java方法
                window.h5Bridge.onShareCircle(this.shareData.title,this.shareData.desc,this.shareData.image_url, this.shareData.url);
                this.handleCancel(this.boxData);
                break;
            case "link":
                //this.shareData.url.select(); // 选择对象
                let clipBoardContent=this.shareData.url;
                message.success(clipBoardContent);
                this.props.clipboardData.setData("Text",clipBoardContent);
                break;
            default:
                alert(event);
                break;
        }
    };
    
    handleBoxShare = (ele) => {
        is_touch(true);
        ele.box.style.height = "auto";
        ele.box.style.paddingTop = (1/75)*50 + 'rem';
        ele.bg.style.display = "block";
    };
    handleCancel = (ele) => {
        is_touch(false);
        ele.box.style.height = 0;
        ele.box.style.paddingTop = 0;
        ele.bg.style.display = "none";
    };

    /** 下拉刷新 **/
    onDown = () => {
        // message.success("下拉执行了");
        this.getList(false);
          /** 注意此处，就算没有数据或接口调用失败了等情况，也要刷一下原始数据，Luo内部才知道状态更新了 **/
    };

    /** 上拉加载更多 **/
    onUp = async () => {
        // message.success("上拉执行了");
        let prePage = this.state.page;
        prePage++;
        await this.setState({
            page:prePage
        });
        this.getList(true);
        /** 注意此处，就算没有更多数据了或接口调用失败了等情况，也要刷一下原始数据，Luo内部才知道状态更新了 **/
    };
    
    render() {
        
        return (
            <div className={styles["yfz-app-invite"]}>
                <div className={styles["banner"]}>
                    <img src={bannerImg} alt="24小时畅玩会员特权" />
                    <div>
                        
                        {this.state.phones.length === 0 || (
                            <TextAutoScrollComp data = {this.state.phones} />
                        ) }
                        
                        <a href="http://www.288.com">规则></a>
                    </div>
                    <span>您邀请的好友也可获得24小时畅玩会员特权</span>
                </div>
                <button className="btn-max" onClick={() => this.handleBoxShare(this.boxData)}>立即邀请</button>
                <h4>――&nbsp;&nbsp;邀请记录&nbsp;&nbsp;――</h4>
                <div className="inviter-list">
                    
                    <h4>已获得 <b className="c-red fs28">{this.state.gift_time}</b> 小时畅玩会员特权</h4>
                    <ul id="refreshContainer">
                        <Luo 
                            id='id'
                             onDown={()=>this.onDown()}
                             onUp={()=>this.onUp()}
                        >
                            {this.state.data.length === 0 && <div className="txt-c mt30">无邀请数据</div>}
                            {this.state.data.map((item,i)=>{
                               
                                let tel = item.phone.substring(0,3) + "****" + item.phone.substring(7);
                                console.log(item.length);
                                return (<li className="clear" key={i}>
                              
                                    <span className="tel">{tel}</span>
                                    <span className="res">{item.user_status === 1 ? '已注册' : '未注册'}</span>
                                    {item.user_status === 1 ? (
                                        <div className="c-red">获得24小时</div>
                                    ) : (<button className="btn-min">获得24小时</button>)}
                                </li>)
                                }
                                
                            )}
                            {this.state.isLoad && (<div className="txt-c mt30"><Spin /></div>)}
                        </Luo>
                    </ul>
                    <p className="refreshText" />
                </div>
                <ul className="share-btn mt30">
                    <li onClick={()=>this.handleTarget("wx")}>微信邀请</li>
                    <li onClick={()=>this.handleTarget("py")}>朋友圈邀请</li>
                </ul>
                <div className={styles['popup-share']}>
                    <h2>送好友24小时畅玩会员特权<br />好友注册后您也能获得</h2>
                    <ul className="list">
                        <li className="wx" onClick={()=>this.handleTarget("wx")}><i/>微信好友</li>
                        <li className="py" onClick={()=>this.handleTarget("py")}><i/>微信朋友圈</li>
                        <li className="link" onClick={()=>this.handleTarget("link")}><i/>复制链接</li>
                    </ul>
                    <button onClick={() => this.handleCancel(this.boxData)}>取消</button>
                </div>
                <div className={styles['popup-share-bg']} onClick={() => this.handleCancel(this.boxData)} />
            </div>
           
        );
    }
}
export default ShareAppIndex;
