import React from 'react';

function ShowCount({ count, title }) {
    console.log('show count');
    return (
        <div>
            <p>
                {title} is {count}
            </p>
        </div>
    );
}

export default React.memo(ShowCount);
