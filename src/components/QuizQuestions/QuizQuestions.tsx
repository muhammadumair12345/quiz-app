import React, { useContext,useState } from 'react';
import { QuizContext } from '../../context/QuizContext';
import { Questions } from './QuizQuestions.style';

const QuizQuestions = () => {
    const [disableFlag,setDisableFlag]=useState<boolean>(false)
    const {loader,quizData,nextCounter,setNextCounter,
        setStartFlag,setDifficultyFlag,setScore,score}=useContext<any>(QuizContext);

    const onChangeNextCounter=(e:any)=>{
        setDisableFlag(false);
        if(nextCounter<9){
            setNextCounter((prevCounter:number)=>++prevCounter);
        }
        else{
            setNextCounter(0);
            setStartFlag(false);
            setDifficultyFlag(false);
            setScore(0);
        }
    }

    const onChangeScore=(e:any)=>{
        setDisableFlag(true);
        const user_answer:string=e.target.value;
        if(user_answer===quizData[nextCounter].correct_answer){
            setScore((prevScore:number)=>++prevScore);
        }
    }
    
    return (
        <Questions>
            <div className="score">
                <h3>Score: {score}</h3>
                <h3>Question: {nextCounter+1}/10</h3>
            </div>
            {!loader?
            <div>Loading ...</div>:
            <>
            <div className="question">
            <p>{quizData[nextCounter].question}</p>
            </div>
            {
             quizData[nextCounter].choice.map((option:string)=>(
                <button disabled={disableFlag} value={option} key={option} onClick={onChangeScore}>{option}</button>
             ))   
            }
            </>}
            <button onClick={onChangeNextCounter} className='next-btn'>Next Question</button>
        </Questions>
    )
}

export default QuizQuestions
