export const GET_USER_INFO_REQUEST = "userInfo/GET_USER_INFO_REQUEST";
export const GET_USER_INFO_SECCESS = "GET_USER_INFO_SECCESS";
export const GET_USER_INFO_FAIL = "GET_USER_INFO_FAIL";

function getUserInfoRequest() {
    return {
        type: GET_USER_INFO_REQUEST
    }
}

function getUserInfoSuccess(userInfo) {
    return {
        type: GET_USER_INFO_SECCESS,
        userInfo: userInfo
    }
}

function getUserInfoFail() {
    return {
        type: GET_USER_INFO_FAIL
    }
}

export function getUserInfo() {
    return function(dispatch) {
        dispatch(getUserInfoRequest());

        return fetch('http://localhost:8888/api/user.json')
            .then((response) => {
                return response.json();
            })
            .then((json) => {
                dispatch(getUserInfoSuccess(json));
            })
            .catch(() => {
                dispatch(getUserInfoFail());
            });
    }
}
