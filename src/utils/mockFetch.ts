export default function mockFetch(url: String, config ? : Object) {
    return new Promise((resolve, reject) => {
        resolve(url)
    })
}

// '((input: RequestInfo | URL, init?: RequestInit | undefined) => Promise<Response>) & ((input: RequestInfo | URL, init?: RequestInit | undefined) => Promise<...>)'


