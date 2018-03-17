import React, { Component } from 'react';
import { commect } from 'redux';
import { getUserInfo } from '../../redux/actions/userInfo';

class UserInfo extends Component {
    render() {
        const { userInfo, isLoading, errorMsg } = this.props.userInfo;
        return (
            <div>
                <h2>用户信息页面</h2>
                {isLoading ? '请求中。。。' :
                    (errorMsg ? errorMsg : 
                        <div>
                            <h3>用户信息</h3>
                            <p>用户名：<strong></strong></p>
                        </div>
                    )
                }
                <button onClick={() => this.props.getUserInfo()}>请求</button>
            </div>
        )
    }
}

export default connect((state) => ({ userInfo: state.userInfo }, { getUserInfo }))(UserInfo);
