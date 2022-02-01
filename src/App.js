import React from 'react';

//----------------------Importing thr React Componets------------------
import Header from './componets/Header';
import Card from './componets/Card';
import emojiData from './emojidata';

function createNewEntry(entryData) {
return ( <Card emoji={entryData.emoji} emojiTitle={entryData.emojiTitle} emojiDescription={entryData.emojiDescription} />);
}

function App() {
    return <div>
    <Header />
    <div className="card-container">
   {emojiData.map(createNewEntry)}
    </div>
    </div>
}

export default App;

