import React, { useCallback, useState } from 'react';
import './App.css';
import Button from './components/Button';
import ShowCount from './components/ShowCount';
import Title from './components/Title';

export default function App() {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    const incrementByOne = useCallback(() => {
        setCount1((prevValue) => prevValue + 1);
    }, []);
    const incrementByFive = useCallback(() => {
        setCount2((prevCount) => prevCount + 5);
    }, []);

    return (
        <div className="App">
            <Title />
            <ShowCount count={count1} title="Counter 1" />
            <Button handleClick={incrementByOne}> increment by one</Button>
            <hr />
            <ShowCount count={count2} title="Counter 5" />
            <Button handleClick={incrementByFive}>Increment by Five </Button>
        </div>
    );
}
