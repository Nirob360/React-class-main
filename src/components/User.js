import React from 'react';

export default function User({ render }) {
    return <h1>{render(true)}</h1>;
}
