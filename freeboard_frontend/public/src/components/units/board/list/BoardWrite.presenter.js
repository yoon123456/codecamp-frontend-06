import * as S from './BoardWrite.styles'        
        
export default function ListUI(props){

     
    return(    
        <S.Box>
            <S.Row>
                <S.Search type="text" placeholder='제목을 검색해주세요'></S.Search>
                <S.SearchDate type="text" placeholder='YYYY.MM.DD'></S.SearchDate>
                <S.ButtonBlack>검색</S.ButtonBlack>
            </S.Row>
            <S.ListHeader>
                <S.List>번호</S.List>
                <S.List>제목</S.List>
                <S.List>작성자</S.List>
                <S.List>날짜</S.List>
            </S.ListHeader>
                <div>
                    {props.data?.fetchBoards.map((el) => (
                        <S.Row key={el._id}>
                            <S.ListId>{el._id}</S.ListId>
                            <S.ListTitle>{el.title}</S.ListTitle>
                            <S.ListWriter>{el.writer}</S.ListWriter>
                            <S.ListDate>{el.createdAt}</S.ListDate>
                        </S.Row> 
                    ))}
                    <S.Button>게시물 등록하기</S.Button>
                </div>
           
        </S.Box>
    )
}     