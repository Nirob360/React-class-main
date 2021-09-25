import React, { Component } from 'react';

export default class ClickCounter extends Component {
    render() {
        const { counter, incrementCount } = this.props;
        return (
            <div>
                <h1 onMouseOver={incrementCount} onFocus={incrementCount}>
                    Click {counter} tims
                </h1>
            </div>
        );
    }
}
