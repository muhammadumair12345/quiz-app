import React from 'react'
import QuizHeader from './QuizHeader';
import { Container } from './QuizContainer.style';
import QuizCategory from './QuizCategory';

const QuizContainer = () => {
    return (
        <Container>
            <QuizHeader/>
            <QuizCategory/>
        </Container>
    )
}

export default QuizContainer
