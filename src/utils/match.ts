/**
 * 匹配预设路径与URL
 * @param pattern
 * @param url
 */
export default function match(pattern: string, url: string): boolean {

    // 存储预设路径
    let pattern_temp = pattern

    // TODO: 将预设路径中的路径参数转化为.*进行正则匹配
    let params = /\/:.*/.exec(pattern_temp)
    if(params !== null) {
        // console.log('预设路径中存在路径参数')
        // 提取预设路径参数中的URL
        pattern_temp = pattern_temp.replace(/\/:.*/, '')
        // 将预设路径中的路径参数转化为.*用于后续匹配
        let param = (params as RegExpExecArray)[0]
        let temp = param.split('/:').splice(1)
        temp = Array(temp.length).fill('.*')
        pattern_temp = pattern_temp + '/' + temp.join('/')
    }

    // 抛弃URL的查询参数
    const _pattern = new RegExp(pattern_temp)
    const _url = url.split('?')

    // 完美匹配才返回true
    if(_url[0].replace(_pattern, '').length !== 0) {
        return false
    }
    return true
}
