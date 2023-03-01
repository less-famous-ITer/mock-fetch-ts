import { Request } from "../fetch";

export namespace Params {

    interface Par {
        [x: string]: string
    }

    interface Result {
        url: String;
        params: Par;
    }

    /**
     * 解析查询参数
     * @param url
     */
    export function params(url: String | Request): Result | undefined {

        let param: Par = {}

        if (typeof url === 'string') {

            let temp = url.split('?')
            console.log(temp)

            let temp3 = temp[1].split('&').map(item => {
                return item.split('=')
            })
            console.log(temp3)

            temp3.forEach(item => {
                param[item[0]] = item[1]
            })

            console.log({
                url: temp[0],
                params: param
            })

            return {
                url: temp[0],
                params: param
            }
        }

    }

}
