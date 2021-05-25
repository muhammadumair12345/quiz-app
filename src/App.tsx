import React from 'react';
import QuizContainer from './components/QuizContainer/QuizContainer';
import { GlobalStyle } from './App.style';
import { QuizProvider } from './context/QuizContext';

const App = () => {
  return (
    <QuizProvider>
      <GlobalStyle/>
      <QuizContainer/>
    </QuizProvider>
  )
}

export default App
