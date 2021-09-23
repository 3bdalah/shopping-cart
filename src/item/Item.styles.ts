import styled from 'styled-components';
// import { Wrapper } from './../../src/app.styles';
export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    border:1px solid lightblue;
    border-radius :20px;
    height: 100%;
    button{
        border-radius : 10px;
        border: 0;
        width:200px;
        height:40px;
        margin :3px auto;
    }
    img{
        max-height:250px;
        object-fit:cover;
        border-radius:20px;
    }
    div{
        font-family:Arial, Helvetica, sans-serif;
        padding:1rem;
    }
`;