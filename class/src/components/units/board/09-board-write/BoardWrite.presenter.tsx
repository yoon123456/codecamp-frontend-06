//프리젠터 컴포넌트
import {IBoardWriteUIProps} from './BoardWrite.types'
import {SubmitButton, WriterInput} from './BoardWrite.styles'   //styles에서 각각 export 해오기 때문에 {}안에 어떤것을 불러 올지 골라서 적어준다


export default function BoardWriteUI(props: IBoardWriteUIProps){   //export default는 한개만 존재한다.
    
    return (
        <div>
            {/* <div>{data}</div> */}
            <h1>{props.isEdit ? "수정" : "등록"} 페이지</h1>
            작성자: <WriterInput type="text" onChange={props.onChangeWriter} defaultValue={props.data?.fetchBoard.writer} /><br />
            제목: <input type="text" onChange={props.onChangeTitle} defaultValue={props.data?.fetchBoard.title} /><br />
            내용: <input type="text" onChange={props.onChangeContents} defaultValue={props.data?.fetchBoard.contents} /><br />
            <SubmitButton onClick={props.isEdit ? props.onClickUpdate : props.callGraphqlApi} isActive={props.isActive}>
                {props.isEdit ? "수정" : "등록"}하기
            </SubmitButton>
        </div>
    )

}



