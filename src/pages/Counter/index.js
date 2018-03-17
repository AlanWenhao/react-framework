import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increment, decrement, reset } from '../../redux/actions/counter';

const mapStateToProps = (state) => {
    return {
        counter: state.counter
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => {
            dispatch(increment());
        },
        decrement: () => {
            dispatch(decrement());
        },
        reset: () => {
            dispatch(reset());
        }
    }
}

class Counter extends Component {
    render() {
        return (
            <div>
                <h2>显示redux计数<strong>{this.props.counter.count}</strong></h2>
                <button onClick={() => this.props.increment()}>Add</button>
                <button onClick={() => this.props.decrement()}>Minus</button>
                <button onclick={() => this.props.reset()}>Reset</button>
            </div>
        )   
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
