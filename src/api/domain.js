//http://192.168.13.202:6810/1.0.0
let base = 'http://trss.f3322.net:6810/1.0.0';
//:6810
if (process.env.NODE_ENV === 'development') {
    base = 'http://trss.f3322.net:6810/1.0.0';
} else if (process.env.MODEL === 'test') {
    base = 'http://trss.f3322.net:6810/1.0.0';
}
export default base;