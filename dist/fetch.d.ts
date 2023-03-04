/**
 * fetch配置对象
 * method: string 请求方法
 * body?: string 请求体
 */
interface fetchConfig {
    method: string;
    headers?: {
        [key: string]: string;
    };
    body?: string;
    mode?: string;
    credentials?: string;
    cache?: string;
    redirect?: string;
    referrer?: string;
    referrerPolicy?: string;
    integrity?: string;
}
export default function fetch(url: string, config: fetchConfig): Promise<Response>;
export {};
