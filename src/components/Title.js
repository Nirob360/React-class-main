import React from 'react';

function Title() {
    console.log('title.......');
    return (
        <div>
            <h2>UseCallBack Hook tutorial</h2>
        </div>
    );
}

export default React.memo(Title);
