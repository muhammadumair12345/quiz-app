import React, { useContext, useState } from 'react';
import { QuizContext } from '../../context/QuizContext';
import QuizCategory from '../QuizCategory/QuizCategory';
import QuizHeader from '../QuizHeader/QuizHeader';
import QuizQuestions from '../QuizQuestions/QuizQuestions';
import { Container } from './QuizContainer.style';

const QuizContainer = () => {
    const {startFlag}=useContext<any>(QuizContext);
    return (
        <Container>
            <QuizHeader/>
            {!startFlag?
            <QuizCategory/>:
            <QuizQuestions/>}
        </Container>
    )
}

export default QuizContainer
