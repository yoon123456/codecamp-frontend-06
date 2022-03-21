import styled from '@emotion/styled'

export const Wrapper = styled.div`
    box-sizing: border-box;
    width: 990px;
    margin: 20px auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 2px solid black;
    box-shadow :5px #bec3c8;
    padding: 50px ;
`
export const Writer= styled.div`
    width: 700px;
    height: 100px;
    padding: 10px;
    margin-bottom: 20px;
    font-size: 70px;
    color: orangered;
`
export const Title= styled.div`
    width: 700px;
    height: 100px;
    padding: 10px;
    font-size: 70px;
    margin-bottom: 20px;
    color: #0755b1;
`
export const Contents= styled.div`
    width: 700px;
    height: 100px;
    padding: 10px;
    font-size: 70px;
    margin-bottom: 20px;
    color: darkgoldenrod;
`
export const Input = styled.input`
    width: 700px;
    height: 100px;
    border: 1px solid gray;
    padding: 5px;
    font-size: 70px;
    margin-bottom: 20px;

`
export const SubmitButton = styled.button`
    width: 400px;
    height: 100px;
    padding: 10px;
    font-size: 70px;
    border-radius: 5px;
    background-color: ${(props)=>props.isActive ? "#ca70ee": "none"};
`
