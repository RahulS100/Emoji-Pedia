import React from 'react';


function Note(props) {
    return (<div className="card">
    <span className="emoji-icon">{props.emoji}</span>
    <dl>
    <dt className="emoji-title">{props.emojiTitle}</dt>
    <dd className="emoji-description">{props.emojiDescription}</dd>
    </dl>
    </div>);
}

export default Note;