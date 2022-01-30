import { setSelectionRange } from '@testing-library/user-event/dist/utils';
import React from 'react';

export default function Answer(props) {
    const [answer, setAnswer] = React.useState();


    function handleInputChange(e) {
        setAnswer(e.target.value);
    }

    React.useEffect(() => {
        if (answer === props.correctAnswer) {
            props.setScore(prev => prev + 1)
        }
    }, [answer])


    const checked = props.data.all.map((choice) => {
        if (choice === props.correctAnswer) {
            return (
                <div className='correctAnswer'>
                    {choice}
                </div>
            )
        }
        if (choice === answer && choice !== props.correctAnswer) { return (<div className='incorrectAnswer'>{choice}</div>) }
        else {
            return (
                <div className='checkedAnswer'>{choice}</div>
            )
        }
    })


    const answerComponents = props.data.all.map((answer, i) => {

        return (
            <div className="answer" >

                <input onChange={handleInputChange} type='radio' value={answer} name={props.data.question} id={answer} ></input>
                <label htmlFor={answer}>{answer}</label>

            </div>
        )
    })



    return props.checked ? (<div className='answers'>{answerComponents}</div>) : <div className='answers'>{checked}</div>
}