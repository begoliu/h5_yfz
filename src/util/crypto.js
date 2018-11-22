import crypto from 'crypto';

//唯一（公共）秘钥 AES
const aesKey = 'mayun';  

//转换hash
export const enHash = str => {
    const hash = crypto.createHash('sha256');
    hash.update(str);
    //加盐
    hash.update('mayun');
    return hash.digest('hex');
};


//加密
export const encrypt = str => {
    let cipher=crypto.createCipher('aes192', aesKey);
    let enc=cipher.update(str,"utf8","hex");
    enc += cipher.final('hex');
    return enc;
};
//解密
export const decode = str => {
    // typeof str === undefined && new Error("hash为空");
    //str === 'undefined' || new Error("hash为空");
    let decipher=crypto.createDecipher('aes192', aesKey);
    let dec=decipher.update(str,"hex", "utf8");
    try{
        dec+=decipher.final("utf8");
    }catch(e){
        dec = -1;
       new Error("无效的hash")
    }
    return dec;
};


