export default function match(pattern: string, url: string): boolean {

    let pattern_temp = pattern

    // TODO: 测试是否存在查询参数
    let params = /\/:.*/.exec(pattern_temp)

    // TODO: 将带查询参数的转化为正则字符串
    if(params !== null) {
        pattern_temp = pattern_temp.replace(/\/:.*/, '')
        let param = (params as RegExpExecArray)[0]
        console.log(pattern_temp)
        console.log(param)
        let temp = param.split('/:').splice(1)
        console.log(temp)
        temp = Array(temp.length).fill('.*')
        console.log(temp)
        pattern_temp = pattern_temp + '/' + temp.join('/')
        console.log(pattern_temp)
    }

    const _pattern = new RegExp(pattern_temp)
    const _url = url.split('?')
    const res = _pattern.test(_url[0])


    return res
}
