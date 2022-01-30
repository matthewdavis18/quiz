
import React from 'react';

export default function IntroPage(props) {



    return (
        <div className="intro">
            <h2>Quizzical</h2>
            <p>Test Your Knowledge</p>
            <button onClick={props.setShowIntro}>Begin Quiz</button>
        </div>)
}