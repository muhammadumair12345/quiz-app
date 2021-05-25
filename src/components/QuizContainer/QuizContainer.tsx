import React, { useState } from 'react';
import QuizCategory from '../QuizCategory/QuizCategory';
import QuizHeader from '../QuizHeader/QuizHeader';
import QuizQuestions from '../QuizQuestions/QuizQuestions';
import { Container } from './QuizContainer.style';

const QuizContainer = () => {
    const [startFlag,setStartFlag]=useState<boolean>(false);
    return (
        <Container>
            <QuizHeader/>
            {!startFlag?
            <QuizCategory setStartFlag={setStartFlag}/>:
            <QuizQuestions/>}
        </Container>
    )
}

export default QuizContainer
