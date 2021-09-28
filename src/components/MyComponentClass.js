import React, { Component } from 'react';

export default class MyComponentClass extends Component {
    state = {
        count: 0,
        date: new Date(),
    };

    componentDidMount() {
        const { count } = this.state;
        document.title = `Click ${count} Time`;

        setInterval(this.tick, 1000);
    }

    componentDidUpdate() {
        const { count } = this.state;
        document.title = `Click ${count} Time`;
    }

    addClick = () => {
        this.setState(({ count }) => ({
            count: count + 1,
        }));
    };

    tick = () => {
        this.setState({
            date: new Date(),
        });
    };

    render() {
        const { date } = this.state;
        return (
            <div>
                <h1>Time: {date.toLocaleTimeString()} </h1>
                <h1>
                    <button type="button" onClick={this.addClick}>
                        click
                    </button>
                </h1>
            </div>
        );
    }
}
