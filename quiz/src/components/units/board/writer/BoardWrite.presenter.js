import { Wrapper,Writer,Title,Contents,Input,SubmitButton } from "./BoardWrite.styles"

export default function BoardWriteUI(props){

    return(
        <Wrapper>
            <Writer>작성자</Writer>
            <Input type="text" onChange={props.onChangeWriter}/> 
            <Title>제목</Title>
            <Input type="text"onChange={props.onChangeTitle}/>
            <Contents>내용</Contents> 
            <Input type="text"onChange={props.onChangeContents}/>
            <SubmitButton onClick={props.callGraphqlApi} isActive={props.isActive}>등록하기</SubmitButton>
        </Wrapper>
    )


}
