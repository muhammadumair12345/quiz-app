import styled from 'styled-components';

export const Category = styled.div`
    margin-top:20px;
    flex-grow:1;
    display: flex;
    flex-direction: column;
    justify-content:space-between;
    >h3{
        text-align: center;
        color: #fff;
    }
    button,select{
        cursor: pointer;
        border: 2px solid #d38558;
        box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
        border-radius: 6px;
        padding: 0.8rem;
        text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);
    }
    button:hover{
        opacity: 0.8;
    }
    select{
        padding: 0.2rem;
    }
    select:focus,button:focus{
        outline:none;
        border: 2px solid #fe8f00;
    }
    .easy-btn{
        background: linear-gradient(180deg, #ffffff, #456520);
        color:#1a2909;
    }
    .easy-btn:focus{
        border: 2px solid #1a2909;
    }
    .medium-btn{
        background: linear-gradient(180deg, #ffffff, #184c75);
        color:#132738;
    }
    .medium-btn:focus{
        border: 2px solid #132738;
    }
    .hard-btn{
        background: linear-gradient(180deg, #ffffff, #a02920);
        color:#6d1912;
    }
    .hard-btn:focus{
        border: 2px solid #6d1912;
    }
    .start-btn{
        background: linear-gradient(180deg, #ffffff, #ffcc91);
        padding: 0.2rem;
        width:150px;
        align-self: center;
        color:#ec8400;
    }
`;