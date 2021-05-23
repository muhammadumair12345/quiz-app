import styled,{createGlobalStyle} from 'styled-components';
import BGImage from './images/bg_quiz.jpg';

export const GlobalStyle=createGlobalStyle`
    *{
        margin:0;
        box-sizing:border-box;
        font-family:'Catamaran',sans-serif;
    }
    body{
        margin:0;
        height:100vh;
        background-image:url(${BGImage});
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        display:flex;
        justify-content:center;
        align-items:center;
    }
`

export const Wrapper=styled.div`
    
`