import React, { useEffect, useState } from 'react';

export default function MyComponent() {
    const [count, setCount] = useState(0);

    const [date, setDate] = useState(new Date());

    const tick = () => {
        setDate(new Date());
    };
    useEffect(() => {
        console.log('updating document title');
        document.title = `Click ${count} Time`;
    }, [count]);

    useEffect(() => {
        const interval = setInterval(tick, 1000);
        // do cleanUP stop the timer
        return () => {
            clearInterval(interval);
        };
    }, []);

    const AddClick = () => {
        setCount((preveValue) => preveValue + 1);
    };

    return (
        <div>
            <h1>Time: {date.toLocaleTimeString()} </h1>
            <h1>
                <button type="button" onClick={AddClick}>
                    click
                </button>
            </h1>
        </div>
    );
}
