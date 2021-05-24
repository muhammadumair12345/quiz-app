import React from 'react';
import { Category } from './QuizCategory.style';

const QuizCategory = () => {
    return (
        <Category>
            <h3>Select Quiz Category</h3>
            <select name="pets">
                <option value="">--Please choose an option--</option>
                <option value="dog">Dog</option>
                <option value="cat">Cat</option>
                <option value="hamster">Hamster</option>
                <option value="parrot">Parrot</option>
                <option value="spider">Spider</option>
                <option value="goldfish">Goldfish</option>
            </select>
            <h3>Select Difficulty Level</h3>
            <button>Easy</button>
            <button>Medium</button>
            <button>Hard</button>
        </Category>
    )
}

export default QuizCategory
