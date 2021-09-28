import React, { useEffect, useRef } from 'react';
import Input from './Input';

export default function Form() {
    const InputRef = useRef();

    useEffect(() => {
        InputRef.current.focus();
    }, []);

    return (
        <div>
            <Input ref={InputRef} type="text" placeholder="Enter somthig" />
        </div>
    );
}
