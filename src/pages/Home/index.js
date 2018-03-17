import React, { Component } from 'react';

class Home extends Component {
    constructor(props) {
        super();
        this.state = {
            count: 0,
        }
    }

    _handleClick() {
        this.setState({
            count: ++ this.state.count,
        });
    }

    render() {
        return (
            <div>
                <h2>这里是主页</h2>
                <p>当前计数：<strong>{this.state.count}</strong></p>
                <button onClick={this._handleClick.bind(this)}>Add</button>
            </div>
        );
    }
}

export default Home;
