// 整个所有reducer的文件
// reducer 是根据 state 和 action 生成新 state 的纯函数
import counter from './reducers/counter';
import userInfo from './reducers/userInfo';

export default function combineReducers(state = {}, action) {
    return {
        counter: counter(state.counter, action),
        userInfo: userInfo(state.userInfo, action)
    }
}
