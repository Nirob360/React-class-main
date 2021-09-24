import React from 'react';

export default function BoilingVerdict({ cessius = 0 }) {
    if (cessius >= 100) {
        return <h3>the water would Boil.</h3>;
    }
    return <h3>Water would not boil.</h3>;
}
