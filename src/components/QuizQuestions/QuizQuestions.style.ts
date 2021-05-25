import styled from 'styled-components';

export const Questions = styled.div`
    margin-top:20px;
    flex-grow:1;
    display: flex;
    flex-direction: column;
    justify-content:space-between;
    text-align: center;
    color:#fff;
    >
    p{
        text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);
        font-weight: bold;
    }
    .score{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .question{
        user-select: none;
        padding:0.4rem;
        border:2px solid #fff;
        border-radius: 15px;
        box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    }
    button{
        user-select: none;
        cursor: pointer;
        border: 2px solid #d38558;
        box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
        border-radius: 6px;
        padding: 0.6rem;
        background: linear-gradient(180deg, #ffffff, #FFEB3B);
        color:#ec8400;
        text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);
    }
    button:focus{
        outline:none;
        border: 3px solid #fe8f00;
    }
    button:hover{
        opacity: 0.8;
    }
    .next-btn{
        background: linear-gradient(180deg, #ffffff, #ffcc91);
        padding: 0.2rem;
        width:150px;
        align-self: center;
        color:#ec8400;
    }
`;