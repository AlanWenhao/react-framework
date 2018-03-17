import {GET_USER_INFO_REQUEST, GET_USER_INFO_SUCCESS, GET_USER_INFO_FAIL} from '../actions/userInfo';

const initState = {
    isLoading: true,
    userInfo: {},
    errorMsg: ''
}

export default function reducer(state = initState, action) {
    switch(action.type) {
        case GET_USER_INFO_REQUEST:
            return {
                ...state,
                isLoading: true,
                userInfo: {},
                errorMsg: ''
            };
        case GET_USER_INFO_SUCCESS:
            return {
                ...state,
                userInfo: action.userInfo,
                isLoading: false,
                errorMsg: ''
            };
        case GET_USER_INFO_FAIL:
            return {
                ...state,
                userInfo: {},
                isLoading: false,
                errorMsg: '请求错误'
            };
        default:
            return state;
    }
}
