import React from 'react';
import useWindowWidth from './useWindowWidth';

export default function Layout() {
    const customHook = useWindowWidth(600);

    return (
        <div>
            <h2> You are browsing {customHook ? 'small' : 'large'} Divice</h2>
        </div>
    );
}
