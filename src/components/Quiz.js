import React, {useState, useContext} from 'react';
import {QuizContext} from "../Helpers/Contexts"
import Questions from "../Helpers/Questions.js"
function Quiz() {
    const [currQuestion, setCurrQuestion] = useState(0);
    const [optionChosen, setOptionChosen] = useState(-1)
    const nextQuestion = () => {
        if (currQuestion < 29)
            setCurrQuestion(currQuestion + 1);
    }
    const previousQuestion = () => {
        if (currQuestion > 0)
            setCurrQuestion(currQuestion - 1);
    }
    const restartQuiz = () => {
        //TODO
        setCurrQuestion(0);
    }
    return (
        <div className="Quiz">
            <h1>{Questions[currQuestion].question}</h1>
            <h3>Question {currQuestion + 1}/30</h3>
            <div className="Options">
                <p><strong >A</strong>: {Questions[currQuestion].answers[0].answerOption}</p>
                <p><strong>B</strong>: {Questions[currQuestion].answers[1].answerOption}</p>
                <p><strong>C</strong>: {Questions[currQuestion].answers[2].answerOption}</p>
                <p><strong>D</strong>: {Questions[currQuestion].answers[3].answerOption}</p>
                <button onclick={setOptionChosen("0")}>A</button>
                <button onclick={setOptionChosen("1")}>B</button>
                <button onclick={setOptionChosen("2")}>C</button>
                <button onclick={setOptionChosen("3")}>D</button>
            </div>

            <button onClick={previousQuestion}>Previous Question</button>
            <button onClick={nextQuestion}>Next Question</button>
            <button onClick={restartQuiz}>Restart Quiz</button>
        </div>
    )
}

export default Quiz;