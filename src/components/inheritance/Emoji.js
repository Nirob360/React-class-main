import React, { Component } from 'react';

export default class Emoji extends Component {
    addEmoji = (text, emoji) => ` ${emoji} ${text} ${emoji}`;

    render(overwrite) {
        let text = ' Im the Emoji component';
        if (overwrite) text = overwrite;

        return <div>{text}</div>;
    }
}
