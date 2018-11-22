import React, {Component} from 'react';
import styles from "../../static/css/share.scss";
import bannerLineMoneyImg from "../../static/images/share/banner_line_money.jpg";
import logoImg from "../../static/images/share/icon_logo_big.png"
import bannerTxtOneImg from "../../static/images/share/banner_txt_1.jpg";
import {authTel} from "../../util/auth";
import {Form,message} from "antd";
import ShareDownLoadComponent from "./download";
import {shareReceiveApi} from "../../api/api";
import { Redirect } from "react-router-dom"

class ShareFormComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNext:false,
            data:{}
        }
    }
    handleForm = async (e) => {
        
        e.preventDefault();
        if(authTel(this.inputNode.value)){
            let telHide = this.inputNode.value.substring(0,3) + "*****" + this.inputNode.value.substring(7);
            let params = {
                phone:this.inputNode.value,
                user_id:this.props.data.user_id || this.props.data.uid,
                promotion_id:this.props.data.promotion_id,
            };
            
            
            this.props.modify && Object.assign(params,{replace_phone:this.props.data.phone});
            shareReceiveApi(params).then(async res => {
                switch(res.code) {
                    case 0:
                        await this.setState({
                            isNext:true,
                            data:{
                                ...params,
                                telHide
                            }
                        });
                        break;
                    default:
                        message.error(res.msg);
                        break;
                }
            }).catch(e=>{
                alert(e);
            });
        }else{
            message.error("请输入正确的手机号")
        }
    };
    
    receivedUser = (params) => {
        shareReceiveApi(this.props.data)
    };

    render() {

        if(this.props.isRedirect && this.state.isNext){
            return <Redirect push to={{
                pathname:"/share/download" ,
                state:{
                    curUserInfo:this.state.data
                }
            }}
            />
        }
  
        return this.state.isNext ? (
            <ShareDownLoadComponent data={this.state.data}  />
            
        ) : (
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
        )
       
    }
}
Form.create()(ShareFormComponent);
export default ShareFormComponent;