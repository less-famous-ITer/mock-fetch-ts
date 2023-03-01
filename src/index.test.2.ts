import center from './store/center'

export default function Mock(url: string, method: string, callback: (req: {}, res: {}) => void) {
    // center.$on(url+method, callback)
    // center.$on(url+method, (req, res) => {
    //     console.log('fun1', req, res)
    // })
    center.$on(url+method, callback)
}
