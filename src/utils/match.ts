export default function match(pattern: string, url: string): boolean {

    let pattern_temp = pattern

    // TODO: 测试是否存在查询参数
    let params = /\/:.*/.exec(pattern_temp)

    // TODO: 将带查询参数的转化为正则字符串
    if(params !== null) {
        console.log('存在查询参数')
        pattern_temp = pattern_temp.replace(/\/:.*/, '')
        let param = (params as RegExpExecArray)[0]
        let temp = param.split('/:').splice(1)
        temp = Array(temp.length).fill('.*')
        pattern_temp = pattern_temp + '/' + temp.join('/')
    }

    const _pattern = new RegExp(pattern_temp)
    const _url = url.split('?')

    if(_url[0].replace(_pattern, '').length !== 0) {
        return false
    }
    return true
}
