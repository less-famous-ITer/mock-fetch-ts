"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 匹配pattern和url
 * @param pattern
 * @param url
 */
function match(pattern, url) {
    // 暂存pattern
    let pattern_temp = pattern;
    // TODO: 将预设路径中的路径参数转化为.*进行正则匹配
    let params = /\/:.*/.exec(pattern_temp);
    if (params !== null) {
        // 提取预设路径参数中的URL
        pattern_temp = pattern_temp.replace(/\/:.*/, '');
        // 将预设路径中的路径参数转化为.*用于后续匹配
        let param = params[0];
        let temp = param.split('/:').splice(1);
        temp = Array(temp.length).fill('.*');
        pattern_temp = pattern_temp + '/' + temp.join('/');
    }
    // 抛弃URL的查询参数
    const _pattern = new RegExp(pattern_temp);
    const _url = url.split('?');
    // 完美匹配才返回true
    if (_url[0].replace(_pattern, '').length !== 0) {
        return false;
    }
    return true;
}
exports.default = match;
