import { Params } from './utils/params';

export interface Request {

}

export interface Config {

}

export interface Response {

}

export default function fetch (url: String | Request, init?: Config): any {
    Params.params(url)
}
