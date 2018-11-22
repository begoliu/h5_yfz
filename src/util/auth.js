/** ---------- 验证 ----------- **/


/**
 * 验证手机号
 * @param tel 手机号
 * @returns {boolean} true 正确  false 错误
 */
export const authTel = (tel) => {
     
    return tel.match(/^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/) !== null;

};


/**
 * 验证是否是微信浏览器
 * @returns {boolean}  true:是   false:否
 */
export const is_wechat = () => {
    let ua = navigator.userAgent.toLowerCase();
    return ua.indexOf('micromessenger') !== -1;
};


export const is_touch = (bool) => {
    let mo = function(e){
        e.preventDefault();
    };
    if(bool){
        // document.body.style.overflow='hidden';
        document.addEventListener("touchmove",mo,false);//禁止页面滑动
    }else{
        // document.body.style.overflow='';//出现滚动条
        document.removeEventListener("touchmove",mo,false);
    }
};


export const reqJson = (req_msg) => {
    let json = {};
    // req_msg
    req_msg.substring(1).split('&').forEach((item,index)=>{
        json[item.split("=")[0]] = item.split("=")[1]
    });
    return json;
    
};

export const img2byte = (url) => {
    console.log(url);
    let oReq = new XMLHttpRequest();
    let xx = null;
    // console.log(oReq);
    oReq.open("GET", url, true);
    oReq.responseType = "arraybuffer";
    oReq.onload = function (oEvent) {
        // console.log(oEvent);
        let arrayBuffer = oReq.response;
        if (arrayBuffer) {
            let byteArray = new Uint8Array(arrayBuffer);
            console.log("data1 = ", byteArray );
            xx = byteArray;
        }
    };
    console.log(xx);
};





export const browser = {

    versions: function() {

        let u = navigator.userAgent;
        // let app = navigator.appVersion;

        return {

            trident: u.indexOf('Trident') > -1,

            presto: u.indexOf('Presto') > -1,

            webKit: u.indexOf('AppleWebKit') > -1,

            gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') === -1,

            mobile: !!u.match(/AppleWebKit.*Mobile.*/),

            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),

            android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1,

            iPhone: u.indexOf('iPhone') > -1,

            iPad: u.indexOf('iPad') > -1,

            webApp: u.indexOf('Safari') === -1,

            souyue: u.indexOf('souyue') > -1,

            superapp: u.indexOf('superapp') > -1,

            weixin:u.toLowerCase().indexOf('micromessenger') > -1,

            Safari:u.indexOf('Safari') > -1

        };

    }(),

    language: (navigator.browserLanguage || navigator.language).toLowerCase()

};




