import styled from '@emotion/styled' 

export const Title = styled.h1`
    box-sizing: border-box;
    font-size: 36px;
    font-weight: 700 bold;
    line-height: 53.28px;
    display:  flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 1200px;
    margin: 60px auto;
    padding: 80px;
    border: 1px solid #BDBDBD;
   

`

export const Wrapper= styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 20px;
`

export const WrapperBody = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 20px 20px 0;
   
    
`
export const Star =styled.div`
    display: inline;
    color: #FFD600;
`

export const InputHeader =styled.div`
    font-size: 16px;
    font-weight: 500; 
`

export const InputBody = styled.input`
    width: 486px;
    height: 52px;
    border: 1px solid #BDBDBD;
`

export const InputTitle = styled.input`
    width: 996px;
    height: 52px;
    border: 1px solid #BDBDBD;
    margin: 0 0 20px 0;

`

export const InputContents = styled.input`
    width: 996px;
    height: 480px;
    border: 1px solid #BDBDBD;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    padding: 0 10px 20px 0;
    width: 996px;
    font-size: 16px;
    font-weight: 500;
`

export const InputPostNumber = styled.input`
    width: 77px;
    height: 52px;
    border: 1px solid #BDBDBD;
    margin: 0 10px 0 0;
`
export const InputPostNumberSearch = styled.button`
    width: 124px;
    height: 52px;
    border: 1px solid #BDBDBD;
    background-color: black;
    color: white;
`
export const InputPhoto = styled.button`
    width: 77px;
    height: 77px;
    border: 1px solid #BDBDBD;
    margin: 0 10px 0 0;
    background-color: #BDBDBD;
   `

export const Option =styled.div`
    font-size: 16px;
    width: 996px;
    height: 30px;
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const Choice =styled.input`
    display: inline-block;
    &:checked{
    background-color: #FFD600;
    }
     
`
export const Label =styled.div`
    font-size: 16px; 
    display : inline;
     
`
export const Submit = styled.button`
    box-sizing: border-box;
    font-size: 20px;
    font-weight: 500 ;
    display:  flex;
    justify-content: center;
    align-items: center;
    width: 179px;
    height: 52px;
    margin: 60px auto;
    padding: 40px;
    border: 1px solid #BDBDBD;
    background-color: #FFD600;
`

export const Error = styled.div`
    color: #FFD600;
    font-size: 18px;
`