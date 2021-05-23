import React from 'react';
import {AnswerObject} from '../App';

type Props={
    question:string,
    answers:string[],
    callback:(e:React.MouseEvent<HTMLButtonElement>)=>void,
    userAnswer:AnswerObject|undefined,
    questionNr:number,
    totalQuestions:number,
}

const QuestionCard:React.FC<Props> = ({question,answers,callback,userAnswer,questionNr,totalQuestions}) => {
    return (
        <div>
            <p className="number">
                Question: {questionNr} / {totalQuestions}
            </p>
            <p>{question}</p>
            <div>
                {answers.map((answer,index)=>(
                <div key={index}>
                    <button disabled={!!userAnswer} value={answer} onClick={callback}>{answer}</button>
                </div>
                ))}
            </div>
        </div>
    )
}

export default QuestionCard
