import React, { useContext } from 'react';
import { QuizContext } from '../../context/QuizContext';
import { Questions } from './QuizQuestions.style';

const QuizQuestions = () => {
    const {loader,quizData}=useContext<any>(QuizContext);
    
    return (
        <Questions>
            <div className="score">
                <h3>Score: 0</h3>
                <h3>Question: 1/10</h3>
            </div>
            {!loader?
            <div>Loading ...</div>:
            <>
            <div className="question">
            <p>{quizData[0].question}</p>
            </div>
            {
             quizData[0].choice.map((option:string)=>(
                <button value={option} key={option}>{option}</button>
             ))   
            }
            </>}
            <button className='next-btn'>Next Question</button>
        </Questions>
    )
}

export default QuizQuestions
