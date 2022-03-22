import {gql, useMutation, useQuery} from '@apollo/client'
import styled from '@emotion/styled'

const FETCH_BOARDS = gql`
    query fetchBoards{
        fetchBoards{
            number
            writer
            title
            contents
        }
    }
`

const DELETE_BOARD = gql`
    mutation deleteBoard($number:Int){
        deleteBoard(number:$number){
            message
        }
    }
`
const Row = styled.div`
    display: flex;
    
`
const Column = styled.div`
    width: 20%;
`

export default function MapBoardPage(){
    const [deleteBoard] = useMutation( DELETE_BOARD )
    const { data } = useQuery (FETCH_BOARDS)

    const onClickDelete =(event)=>{
        deleteBoard({
            variables:{ number: Number(event.target.id) },
            refetchQueries: [{query: FETCH_BOARDS }]
        })
    }

    console.log(data)

    return(
        <div>
            {data?.fetchBoards.map((el) => (
                //<Fragment key={el.number}/></Fragment>
                <Row key={el.number}>
                    <Column><input type="checkbox"/></Column>
                    <Column>{el.number}</Column>
                    <Column>{el.writer}</Column>
                    <Column>{el.title}</Column>
                    <Column>
                        <button id={el.number} onClick={onClickDelete}>삭제</button>
                    </Column>
                </Row>
            ))}
        </div>
            // 조건부 랜더링: {data && data.fetchBoard.contents} === data가 있으면 data.fetchBoard.contents를 보여줘
        )   //optional-chaining : {data?.fetchBoard.number}
} 
//<Row key={index}> 로 할경우 삭제되면 삭제된 인덱스번호 목록으로 다음 인덱스가 새로 채워지기 때문에 index는 사용하지 않는다