import styled from '@emotion/styled' 


export const Board =styled.div`
box-sizing: border-box;
width: 1200px;
margin: 60px auto;
padding: 80px;
box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
display:  flex;
flex-direction: column;
justify-content: center;
align-items: center;

`
export const BoardHeader =styled.div`
width: 996px;
height: 90px;
border-bottom: 1px solid #BDBDBD;
padding: 10px;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
margin-bottom: 30px;

`
export const BoardHeaderProfile =styled.div`
width: 500px;
padding: 5px;
height: 30px;
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;

`
export const BoardHeaderProfilePhoto =styled.div`
width: 50px;
height: 50px;
padding: 3px;
`
export const BoardHeaderProfileWrapper =styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
padding: 3px;
`
export const BoardHeaderProfileWrapperName =styled.div`
font-size: 24px;
color: black;
width: 400px;
height: 36px;
font-weight: 500;
`
export const BoardHeaderProfileWrapperDate =styled.div`
font-size: 16px;
color: #828282;
width: 400px;
height: 24px;
font-weight: 400;
`
export const BoardHeaderIconWrapper =styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 300px;
height: 100px;
`
export const BoardHeaderAddress =styled.div`
align-items: center;
width: 200px;
height: 40px;
`
export const BoardHeaderIcon =styled.div`
display: flex;
flex-direction: row;
justify-content: flex-end;
align-items: center;
width: 200px;
height: 500px;
`

export const BoardHeaderIconLink =styled.div`
display: flex;
margin-right: 30px;
`
export const BoardHeaderIconMap = styled.div`
display: flex;
`
export const BoardBody = styled.div`
display:  flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 996px;
padding: 10px;   

`
export const BoardBodyTitle = styled.h1`
width: 996px;
height: 90px;
padding: 20px;
font-weight: 700;
font-size: 36px;
`
export const BoardBodyImage = styled.div`
width: 90vw;
height: 50vh;
margin-bottom: 30px;
object-fit: cover;
`
export const BoardBodyContents = styled.div`
width: 996px;
height: 100px;
margin-bottom: 30px;
`
export const BoardBodyVideo = styled.div`     //동영상으로 바뀔경우 iframe 사용한다
width : 560px;
height: 315px;
margin-bottom: 50px;
`
export const BoardFooter = styled.div`
display:  flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
width: 150px;
height: 70px;
padding: 10px;   
`
export const BoardFooterLike= styled.div`
display: flex;
padding-right: 50px;
`
export const BoardFooterDislike = styled.div`
display: flex;
`