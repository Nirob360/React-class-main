import React from 'react';

export default function Text({ addEmoji }) {
    const text = 'i am Javascript Programing Language.';
    return <div>{addEmoji ? addEmoji(text, '💜 ') : text}</div>;
}
