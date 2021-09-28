import React from 'react';

function Input({ text, placeholder }, passValue) {
    return (
        <div>
            <input ref={passValue} type={text} placeholder={placeholder} />
        </div>
    );
}

const ForwordRef = React.forwardRef(Input);

export default ForwordRef;
