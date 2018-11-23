
//http://192.168.13.202:6810/1.0.0

/**
 * 接口
 * @type {string}
 */
let baseApi = 'http://trss.f3322.net:6810/1.0.0';
if (process.env.YFZ_NODE_ENV === 'release') {
    baseApi = 'http://trss5951.f3322.net:6810/1.0.0';
} else if (process.env.YFZ_NODE_ENV === 'test') {
    baseApi = 'http://http://trss1.f3322.net:6810/1.0.0';
} else if(process.env.YFZ_NODE_ENV === 'dev') {
    baseApi = 'http://trss.f3322.net:6810/1.0.0';
}

/**
 * 绝对路径网站域名
 * @type {string}
 */

let baseUri =  'http://yfz.begoliu.com';
if(process.env.YFZ_NODE_ENV === 'release') {
    baseUri = 'http://hd.288.com/';
}else if(process.env.YFZ_NODE_ENV === 'test') {
    baseUri = 'http://test.begoliu.com';
}else if(process.env.YFZ_NODE_ENV === 'dev') {
    baseUri = 'http://dev.begoliu.com';
}





export  {baseApi,baseUri};