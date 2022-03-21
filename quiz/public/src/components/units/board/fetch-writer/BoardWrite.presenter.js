import { Title, Wrapper,Writer,Number,Contents } from "../fetch-writer/BoardWrite.styles";

export default function BoardWriteUI(props){

    return(
        <Wrapper>
            <Number>{props.data?.fetchBoard.number}번 게시글에 오신 것을 환영합니다!!</Number>
            <Title>제목: {props.data?.fetchBoard.title}</Title>
            <Writer>작성자: {props.data?.fetchBoard.writer}</Writer>
            <Contents>내용: {props.data?.fetchBoard.contents}</Contents>
        </Wrapper>
    )

}




