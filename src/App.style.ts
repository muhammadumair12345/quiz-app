import {createGlobalStyle} from 'styled-components';
import BGQuizImage from './images/bg-quiz.jpg';

export const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        box-sizing:border-box;
        font-family: 'Catamaran', sans-serif;
    }
    body{
        height: 100vh;
        background-color: #ffa600;
        background-image: url(${BGQuizImage});
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;