/**
 * 匹配pattern和url
 * @param pattern
 * @param url
 */
interface Match {
    bool: boolean;
    params: object;
    query: object;
}
export default function match(pattern: string, url: string): Match;
export {};
