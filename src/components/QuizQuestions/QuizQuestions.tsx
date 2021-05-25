import React from 'react';
import { Questions } from './QuizQuestions.style';

const QuizQuestions = () => {
    return (
        <Questions>
            <div className="score">
                <h3>Score: 0</h3>
                <h3>Question: 1/10</h3>
            </div>
            <div className="question">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <button>Easy</button>
            <button>Medium</button>
            <button>Hard</button>
            <button>Hard</button>
            <button className='next-btn'>Next Question</button>
        </Questions>
    )
}

export default QuizQuestions
