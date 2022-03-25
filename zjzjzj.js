/**
 * 指尖移通自动打卡
 * @Author: late autumn     https://github.com/66903202
 * @Date: 2022-03-19 14:12:40
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */

const url = `https://wxzx.cqyti.com/wxProjectNew/healthy-clock-in/clockIn`;
const method = `POST`;
const headers = {
'Accept-Encoding' : `gzip,compress,br,deflate`,
'sfm' : `TLFf9U9Eh1Pg4DQ14re4bx1K5mM58BaW`,
'Connection' : `keep-alive`,
'content-type' : `application/json`,
'Referer' : `https://servicewechat.com/wxfc560ae5ffd61c28/278/page-frame.html`,
'Host' : `wxzx.cqyti.com`,
'jym' : `957a5179d591e87ed503cd2137c0850c`,
'User-Agent' : `Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.16(0x18001042) NetType/4G Language/zh_CN`
};
const body = `{"telephone":"18580538312","goOut":0,"touchPatient":0,"latitude":"","longitude":"","adverseSymptoms":0,"temperatureNormal":0,"touchPatientInfo":"","currentResidence":"重庆市-重庆市-合川区","truth":1,"backSchool":0,"highRisk":0}`;

const myRequest = {
    url: url,
    method: method,
    headers: headers,
    body: body
};

$task.fetch(myRequest).then(response => {
    console.log(response.statusCode + "\n\n" + response.body);
    $done();
}, reason => {
    console.log(reason.error);
    $done();
});
