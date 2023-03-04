"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function match(pattern, url) {
    // 暂存pattern
    let pattern_temp = pattern;
    let params_result = {};
    // TODO: 将预设路径中的路径参数转化为.*进行正则匹配
    let params = /\/:.*/.exec(pattern_temp);
    if (params !== null) {
        // 提取预设路径参数中的URL
        pattern_temp = pattern_temp.replace(/\/:.*/, '');
        console.log('url: ' + pattern_temp);
        let url_par = url.replace(pattern_temp, '').split('?')[0].split('/').splice(1);
        // 将预设路径中的路径参数转化为.*用于后续匹配
        let param = params[0];
        let _params = param.split('/:').splice(1);
        // console.log(_params)
        // console.log(url_par)
        for (let i = 0; i < _params.length; i++) {
            params_result[_params[i]] = url_par[i];
        }
        let temp = param.split('/:').splice(1);
        temp = Array(temp.length).fill('.*');
        pattern_temp = pattern_temp + '/' + temp.join('/');
    }
    // 抛弃URL的查询参数
    const _pattern = new RegExp(pattern_temp);
    const _url = url.split('?');
    let query = {};
    // 存在查询参数
    if (_url.length > 1) {
        let que = _url[1].split('&').map(item => {
            return item.split('=');
        });
        que.forEach(item => {
            query[item[0]] = item[1];
        });
    }
    // 完美匹配才返回true
    if (_url[0].replace(_pattern, '').length !== 0) {
        return {
            bool: false,
            params: params_result,
            query
        };
    }
    return {
        bool: true,
        params: params_result,
        query
    };
}
exports.default = match;
