import axios from 'axios';
import base from './domain';
import { message } from 'antd';


// 带cookie请求
axios.defaults.withCredentials = true;

//添加响应拦截器
axios.interceptors.response.use(
    res => {
        //对响应数据做些事
        // console.log(res);
        // console.log(res.data)
        if (res.data.code === '11') {
            // message.error(res.data.message);
            setTimeout(() => {
                // this.props.history.push("/");
                // this.props.history.push("/");
                window.location.href = '/app/index';
            }, 1000);
        } else if (res.data.code === 500) {
            message.error(res.data.msg);
        } else if (res.data.code === 502) {
            message.error('系统繁忙，请稍后重试');
        }
        return res;
    },
    error => {
        return Promise.reject(error);
    }
);


// -------------------------------------------  h5_app分享接口  -----------------------------------------------------

// 退出
export const loginOut = params => {
    return axios.get(`${base}/user/loginOut`, { params: params }).then(res => res.data);
};


export const shareApi = params => {
    return axios.post(`${base}/share/user`,params).then(res => res.data);
};

//邀请有奖，获取所有已被赠送畅玩会员的手机号
export const shareGotTelApi = params => {
    return axios.get(`${base}/share/members`,{ params: params }).then(res => res.data);
};

//活动预处理用户注册（用户输入手机号后点击确认按钮)
export const shareReceiveApi = params => {
    return axios.post(`${base}/share/receive`,params).then(res => res.data);
};
