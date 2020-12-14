const nodemailer = require("nodemailer");
const { default: Axios } = require("axios");

// 发送邮件函数
async function sendMail(text) {
    var user = "442104171@qq.com";//自己的邮箱
    var pass = "aoyesxdkacdgbjdb"; //qq邮箱授权码
    var to = "442104171@qq.com";//对方的邮箱
    let transporter = nodemailer.createTransport({
        host: "smtp.qq.com",
        port: 587,
        secure: false,
        auth: {
            user: user, // 用户账号
            pass: pass, //授权码,通过QQ获取
        },
    });
    const info = await transporter.sendMail({
        from: `亲爱的老公<${user}>`, // sender address
        to: `亲爱的老婆<${to}>`, // list of receivers
        subject: "亲爱的老婆", // Subject line
        text: text, // plain text body
    });
    console.log("发送成功", info);
}
async function getHoneyedWords() {
    const url = "https://chp.shadiao.app/api.php";
    //获取这个接口的信息
    const { data } = await Axios.get(url)
    return data;
}
async function getWeather() {
    const url = 'http://www.tianqiapi.com/api?version=v6&appid=28465178&appsecret=490GXAjI &city=' + encodeURI('新乐')
    const { data } = await Axios.get(url)
    return `天气：${data.wea} 当前温度：${data.tem}°C ${data.air_tips}`
}
function getDay() {
    const day = new Date('2016-7-30')
    console.log("🚀 ~ file: index.js ~ line 39 ~ getDay ~ day", day)
    const dateSpan = Date.parse(day) - Date.parse(new Date())
    const iDays = Math.floor(Math.abs(dateSpan) / (24 * 3600 * 1000))
    return iDays
}
function getCurrentDate() {
    var myDate = new Date();
    var year = myDate.getFullYear(); //年
    var month = myDate.getMonth() + 1; //月
    var day = myDate.getDate(); //日
    var days = myDate.getDay();
    switch (days) {
        case 1:
            days = '星期一';
            break;
        case 2:
            days = '星期二';
            break;
        case 3:
            days = '星期三';
            break;
        case 4:
            days = '星期四';
            break;
        case 5:
            days = '星期五';
            break;
        case 6:
            days = '星期六';
            break;
        case 0:
            days = '星期日';
            break;
    }
    var str = "今天是" + year + "年" + month + "月" + day + "日 " + days;
    return str;
}
console.log(getCurrentDate())
// sendMail('nihao')