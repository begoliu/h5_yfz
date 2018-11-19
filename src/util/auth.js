/** ---------- 验证 ----------- **/

/**
 * 验证手机号
 * @param tel 手机号
 * @returns {boolean} true 正确  false 错误
 */
export const authTel = (tel) => {
     
    return tel.match(/^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/) === null ? false : true;

};