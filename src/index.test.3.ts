import center from "./store/center";


export default function fetch(houseNum: string, req: {} , res: {}) {

    center.$emit(houseNum, req, res)
}

