import {SubmitButton, WriterInput} from './BoardWrite.styles'   //styles에서 각각 export 해오기 때문에 {}안에 어떤것을 불러 올지 골라서 적어준다

export default function BoardWriteUI(props){   //export default는 한개만 존재한다.
    
    return(
        <div>
        {/* <div>{data}</div> */}
        작성자: <WriterInput type="text" onChange={props.onChangeWriter}/> <br/>
        제목: <input type="text"onChange={props.onChangeTitle}/> <br/>
        내용: <input type="text"onChange={props.onChangeContents}/> <br/>
        <SubmitButton onClick={props.callGraphqlApi} isActive={props.isActive}>GRAPHQL-API 요청하기</SubmitButton>
        </div>
    )

}



