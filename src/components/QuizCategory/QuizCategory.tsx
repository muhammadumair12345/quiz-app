import React from 'react';
import { Category } from './QuizCategory.style';

interface Props{
    setStartFlag: React.Dispatch<React.SetStateAction<boolean>>;
  };

const QuizCategory:React.FC<Props> = ({setStartFlag}) => {

    const changeStartFlag =(e:any):void=>{
        setStartFlag(true)
    }

    return (
        <Category>
            <h3>Select Quiz Category</h3>
            <select name="pets">
                <option value="">Choose Category</option>
                <option value="computer">Computer</option>
                <option value="maths">Maths</option>
                <option value="science">Science</option>
            </select>
            <h3>Select Difficulty Level</h3>
            <button className="easy-btn">Easy</button>
            <button className="medium-btn">Medium</button>
            <button className="hard-btn">Hard</button>
            <button className="start-btn" onClick={changeStartFlag}>Start Quiz</button>
        </Category>
    )
}

export default QuizCategory
