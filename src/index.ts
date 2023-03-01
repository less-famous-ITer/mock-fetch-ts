import Mock from './index.test.2'
import center from "./store/center";
import fetch from "./index.test.3";

Mock('123', '4567', (req, res) => {
    console.log('123', 'func', req, res)
})

// center.$emit('1234567', 1, 2)
fetch('1234567', 1, 9)
