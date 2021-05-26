import React, { useContext,useState } from 'react';
import { QuizContext } from '../../context/QuizContext';
import { Questions,Loader,ChoiceBtn,AnswerStatus } from './QuizQuestions.style';

const QuizQuestions = () => {
    const [disableFlag,setDisableFlag]=useState<boolean>(false);
    const {loader,quizData,nextCounter,setNextCounter,
        setStartFlag,setDifficultyFlag,setScore,score}=useContext<any>(QuizContext);
    const [checkAnswer,setCheckAnswer]=useState<string>('');

    const onChangeNextCounter=(e:any)=>{
        setDisableFlag(false);
        setCheckAnswer("");
        if(nextCounter<9){
            setNextCounter((prevCounter:number)=>++prevCounter);
        }
    }

    const onChangeScore=(e:any)=>{
        setDisableFlag(true);
        const user_answer:string=e.target.value;
        if(user_answer===quizData[nextCounter].correct_answer){
            setCheckAnswer("correct answer!");
            setScore((prevScore:number)=>++prevScore);
        }
        else{
            setCheckAnswer("incorrect answer!");
        }
    }
    

    const exitQuiz=(e:any)=>{
        setNextCounter(0);
        setStartFlag(false);
        setDifficultyFlag(false);
        setScore(0);
    }

    const continueQuiz=(e:any)=>{
        setNextCounter(0);
        setDisableFlag(false);
        setScore(0);
    }
    
    return (
        <Questions>
            <div className="score">
                <h3>Score: {score}</h3>
                <h3>Question: {nextCounter+1}/10</h3>
            </div>
            {!loader?
            <Loader/>:
            <>
            <div className="question">
            <p>{quizData[nextCounter].question}</p>
            </div>
            {
             quizData[nextCounter].choice.map((option:string)=>(
                <ChoiceBtn disabled={disableFlag} value={option} key={option} onClick={onChangeScore}>{option}</ChoiceBtn>
             ))   
            }
            </>}
            {
            nextCounter!=9?
            <>
            <button onClick={onChangeNextCounter} className='next-btn'>Next Question</button>
            <AnswerStatus answer={checkAnswer}>{checkAnswer}</AnswerStatus>
            </>:
            <div className="exit-continue">
                <button className='continue-btn' onClick={continueQuiz}>Continue Quiz</button>
                <button className='exit-btn' onClick={exitQuiz}>Exit Quiz</button>
            </div>
            }
            </Questions>
    )
}

export default QuizQuestions
