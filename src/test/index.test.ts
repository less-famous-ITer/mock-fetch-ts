interface Shop {
    [houseNum: string]: Function;
}


class shopCenter {
    public shopList: Shop;
    constructor() {
        this.shopList = {}
    }
    add(houseNum: string, callback: Function): void {
        this.shopList[houseNum] = callback
    }
    buy(houseNum: string, ...args: Array<any>): void {
        this.shopList[houseNum].apply(this, args)
    }
}

let center = new shopCenter()

export default center
