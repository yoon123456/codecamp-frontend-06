import styled from '@emotion/styled'

export const Wrapper = styled.div`
    box-sizing: border-box;
    width: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid gray;
    padding: 50px;
    margin: 50px auto;
`
export const Title = styled.div`
    width: 500px;
    height: 60px;
    padding: 20x;
    font-size: 36px;
    border-bottom: 1px solid gray;
    margin-bottom: 40px;

`
export const SellerInput = styled.input`
    width: 500px;
    height: 50px;
    padding: 20px;
    font-size: 24px;
    border-bottom: 1px solid gray;
    border-radius: 5px;
    margin-bottom: 5px;
    :hover {
    background-color: #f5f0d7;
    border-color: none;
    }
`
export const NameInput = styled.input`
    width: 500px;
    height: 50px;
    padding: 20px;
    font-size: 24px;
    border-bottom: 1px solid gray;
    border-radius: 5px;
    margin-bottom:  20px;
    :hover {
    background-color: #f5f0d7;
    border-color: none;
    }
`
export const DetailInput = styled.input`
    width: 500px;
    height: 100px;
    padding: 20px;
    font-size: 24px;
    border-bottom: 1px solid gray;
    border-radius: 5px;
    margin-bottom:  20px;
    :hover {
    background-color: #f5f0d7;
    border-color: none;
    }
`
export const PriceInput = styled.input`
    width: 500px;
    height: 50px;
    padding: 20px;
    font-size: 24px;
    border-bottom: 1px solid gray;
    border-radius: 5px;
    margin-bottom:  20px;
    :hover {
    background-color: #f5f0d7;
    border-color: none;
    }
`
export const SubmitButton = styled.button`
    width: 150px;
    height: 50px;
    padding: 10px;
    font-size: 24px;
    border-radius: 5px;
    border: 2px solid gray;
    cursor: pointer;
    background-color: ${(props) => props.isActive ? "#fad20c" : "none"};
`

