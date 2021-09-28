import React, { useState } from 'react';
import './App.css';
import MyComponent from './components/MyComponent';

export default function App() {
    const [show, setShow] = useState(true);
    return (
        <div className="App">
            <div>{show && <MyComponent />} </div>

            <h2>
                <button type="button" onClick={() => setShow((prevShow) => !prevShow)}>
                    {show ? 'Hide post' : 'show post'}
                </button>
            </h2>
        </div>
    );
}
