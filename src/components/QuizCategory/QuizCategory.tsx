import React,{useContext} from 'react';
import { QuizContext } from '../../context/QuizContext';
import { Category } from './QuizCategory.style';



const QuizCategory = () => {    
    const {setStartFlag,setDifficultyFlag,
        categoryValue,setCategoryValue,
        difficultyFlag,setDifficulty}=useContext<any>(QuizContext);

    const onChangeDifficulty=(e:any)=>{
        setDifficultyFlag(true)
        setDifficulty(e.target.value);
    }

    const onCategorySelected=(e:any)=>{
        const selectedCategory=e.target.value;
        setCategoryValue(selectedCategory);
    }

    return (
        <Category>
            <h3>Select Quiz Category</h3>
            <select name="quiz_category" value={categoryValue} onChange={onCategorySelected} >
			<option value="any">Any Category</option>
			<option value="9">General Knowledge</option>
            <option value="10">Entertainment: Books</option>
            <option value="11">Entertainment: Film</option>
            <option value="12">Entertainment: Music</option>
            <option value="13">Entertainment: Musicals &amp; Theatres</option>
            <option value="14">Entertainment: Television</option>
            <option value="15">Entertainment: Video Games</option>
            <option value="16">Entertainment: Board Games</option>
            <option value="17">Science &amp; Nature</option>
            <option value="18">Science: Computers</option>
            <option value="19">Science: Mathematics</option>
            <option value="20">Mythology</option>
            <option value="21">Sports</option>
            <option value="22">Geography</option>
            <option value="23">History</option>
            <option value="24">Politics</option>
            <option value="25">Art</option>
            <option value="26">Celebrities</option>
            <option value="27">Animals</option>
            <option value="28">Vehicles</option>
            <option value="29">Entertainment: Comics</option>
            <option value="30">Science: Gadgets</option>
            <option value="31">Entertainment: Japanese Anime &amp; Manga</option>
            <option value="32">Entertainment: Cartoon &amp; Animations</option>		
            </select>
            <h3>Select Difficulty Level</h3>
            <button className="easy-btn" value="easy" onClick={onChangeDifficulty}>Easy</button>
            <button className="medium-btn" value="medium" onClick={onChangeDifficulty}>Medium</button>
            <button className="hard-btn" value="hard" onClick={onChangeDifficulty}>Hard</button>
            <button className="start-btn" onClick={(e:any)=>difficultyFlag?setStartFlag(true):alert("Select Difficulty Level")}>Start Quiz</button>
        </Category>
    )
}

export default QuizCategory
