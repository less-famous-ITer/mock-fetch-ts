"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class shopCenter {
    constructor() {
        this.shopList = {};
    }
    add(houseNum, callback) {
        this.shopList[houseNum] = callback;
    }
    buy(houseNum, ...args) {
        this.shopList[houseNum].apply(this, args);
    }
}
let center = new shopCenter();
exports.default = center;
