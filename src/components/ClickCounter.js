import React, { Component } from 'react';

export default class ClickCounter extends Component {
    render() {
        const { counter, incrementCount } = this.props;
        return (
            <div>
                <button type="button" onClick={incrementCount}>
                    Click {counter} tims
                </button>
            </div>
        );
    }
}
