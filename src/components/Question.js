import React from "react";
import data from "./data.js";
import Answers from "./Answers.js";

export default function Question(props) {
    const [selected, setSelected] = React.useState("");
    const [finalData, setFinalData] = React.useState([]);
    const [selectedAnswers, setSelectedAnswers] = React.useState([]);
    const [checked, setChecked] = React.useState(true);
    const [score, setScore] = React.useState(0);

    ///save the correct answers to an array in state

    function saveCorrectAnswers() {
        let correctAnswers = [];
        for (let i = 0; i < data.results.length; i++) {
            correctAnswers.push(data.results[i].correct_answer);
        }
        return correctAnswers;
    }

    function handleSubmit(event) {
        event.preventDefault();
        setChecked(false)
        console.log(score)
    }

    function addToSelected(obj) {
        setSelectedAnswers(selectedAnswers => [...selectedAnswers, obj]);
        console.log(selectedAnswers)
    }

    ///create a new object with correct answers and incorrect answers randomly shuffled.




    let newData = data.results.map((question) => {
        let allOptions = [question.correct_answer, ...question.incorrect_answers];
        return { ...question, all: allOptions.sort(() => Math.random() - 0.5) };
    });





    let cleanData = newData.map((question) => {
        return { ...question, question: question.question.replace(/&quot;/g, '"') };
    })

    React.useEffect(() => { setFinalData(cleanData) }, [])



    let questionComponents = finalData.map((question) => {
        if (finalData.length > 0) return (
            <div className="question" key={question.question}>
                <h3>{question.question}</h3>
                <Answers setScore={setScore} checked={checked} data={question} setSelectedAnswers={addToSelected} correctAnswer={question.correct_answer} />
            </div>
        );
    });



    return (
        <div>
            <form onSubmit={handleSubmit}>
                {questionComponents}
                {checked && <button>Check Answers</button>}
                {!checked && <p className='results'>{`You scored ${score}/5 correct answers`}</p>}
            </form>
        </div>
    );
}
