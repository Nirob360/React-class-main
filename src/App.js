import React from 'react';
import './App.css';
import Emoji from './components/composition/Emoji';
import Text from './components/composition/Text';

function App() {
    return (
        <div className="App">
            <Emoji>{({ addEmoji }) => <Text addEmoji={addEmoji} />}</Emoji>
        </div>
    );
}

export default App;
