/*
* McLoader.js
* Copyright 1997-2017 Medicom Inc. All rights reserved.
* Author: Medicom
* Version: 4.1.10.1
* Date: 2017-11-22
* Write by: arjun
*/

//嵌套时，请调整为美康合理用药服务器IP地址，不要最后的 “/”
// this.mcWebServiceUrl = "http://10.104.193.39:9094/passvt";
// this.mcWebServiceUrl = "http://10.102.11.43:9094/passvt";
// 处理url，代理请求
let arr = window.globalUrl.baseURL.split(':')
arr[2] = '9094/'
let newUrl = arr.join(':')
this.mcWebServiceUrl = `${newUrl}passvt`
var McLoadJSName = 'McLoader.js';
var McBaseUrl = McGetLoadBaseUrl();


this.mc_passim_proxy_url = "http://127.0.0.1:9094/mc_passim_proxy.html";//HIS服务器存放mc_passim_proxy绝对路径

function McGetLoadBaseUrl() {

    if (!!mcWebServiceUrl) {
        return mcWebServiceUrl + '/PassContent/PassJs/passjava/';
    }

    var regex = new RegExp(McLoadJSName.replace('.', '\.'), 'gi');
    var elems = document.getElementsByTagName('SCRIPT');
    for (var i = 0; i < elems.length; i++) {
        var src = elems[i].getAttribute('src');
        if (regex.test(src)) {
            var reg = /\?v=.*?$/gi;//去掉版本号
            return src.replace(regex, '').replace(reg, '');
        }
    }
    return '';
}

//McAjax.Ready();


function McLoadJs(src) {
    document.write('<script src="' + src + '" type="text/javascript"></sc' + 'ript>');
}


function McLoadCss(href) {
    document.write('<link href="' + href + '" rel="stylesheet" type="text/css" />');
}


function McAsyncLoadJs(src) {

    var head = document.getElementsByTagName('HEAD')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = src;
    head.appendChild(script);
}


function McAsyncLoadCss(href) {
    var head = document.getElementsByTagName('HEAD')[0];
    var link = document.createElement("link");
    link.href = href;
    link.rel = 'stylesheet';
    head.appendChild(link);
}

McLoad();

function McLoad() {
    if (typeof (IsLoadMcPass) == "undefined" || IsLoadMcPass == 1) {
        McLoadCss(McBaseUrl + 'McCssAll.css');
        McLoadJs(McBaseUrl + 'McConfig.js');
		McLoadJs(McBaseUrl + 'McJsAll_tool.js');
		//McLoadJs(McBaseUrl + 'Java_PassIm.js');
    }
}
