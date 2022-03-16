import styled from '@emotion/styled' 

export const Wrapper = styled.div`
    box-sizing: border-box;
    margin: 0px;
    width: 540px;
    /* height: 560px; */
    border: 1px solid #AACDFF;
    box-shadow: 7px 7px 39px rgba(0, 104, 255, 0.25);
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 60px;
`
export const Header = styled.h1`
    font-size: 32px;
    color: #0068FF;
    font-weight: bold;
    width: 380px;
    margin-bottom: 40px;
`
export const Email = styled.input`
    width: 380px;
    height: 60px;
    background-color: white;
    border-radius: 7px;
    border: 1px solid #D2D2D2;
    padding: 18px;
    margin-top: 20px;
`
export const Password = styled.input`
    width: 380px;
    height: 60px;
    background-color: white;
    border-radius: 7px;
    border: 1px solid #D2D2D2;
    padding: 18px;
    margin-top: 20px;
`
export const Button = styled.button`
    width: 380px;
    height: 75px;
    border: 1px solid #D2D2D2;
    border-radius: 10px;
    font-size: 18px;
`
export const ErrorEmail = styled.div`
    color: red;
    height: 10px;
    font-size: 11px;

`
export const ErrorPassword = styled.div`
    color: red;
    height: 10px;
    font-size: 11px;

`
export const ErrorAllPassword = styled.div`
    color: red;
    height: 10px;
    font-size: 11px;

`


