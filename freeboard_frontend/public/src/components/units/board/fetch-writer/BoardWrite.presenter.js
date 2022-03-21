import 
{Board,
BoardHeader,
BoardHeaderProfile,
BoardHeaderProfilePhoto, 
BoardHeaderProfileWrapper,
BoardHeaderProfileWrapperName,
BoardHeaderProfileWrapperDate,
BoardHeaderIconWrapper,
BoardHeaderAddress,
BoardHeaderIcon,
BoardHeaderIconLink,
BoardHeaderIconMap,
BoardBody,
BoardBodyTitle,
BoardBodyImage,
BoardBodyContents,
BoardBodyVideo,
BoardFooter,
BoardFooterLike,
BoardFooterDislike} 
from './BoardWrite.styles';

// import {Iframe} from 'react-iframe'



export default function BoardWriterUI(props){
    return(
        <Board>
            <BoardHeader>
                <BoardHeaderProfile>
                    <BoardHeaderProfilePhoto><img src='/ic_profile-56px.png'/></BoardHeaderProfilePhoto>
                    <BoardHeaderProfileWrapper>
                        <BoardHeaderProfileWrapperName>{props.data?.fetchBoard.writer}</BoardHeaderProfileWrapperName>
                        <BoardHeaderProfileWrapperDate>date: {props.data?.fetchBoard.createdAt}</BoardHeaderProfileWrapperDate>
                    </BoardHeaderProfileWrapper>
                </BoardHeaderProfile>
                <BoardHeaderIconWrapper>
                    <BoardHeaderAddress>말풍선자리</BoardHeaderAddress>
                    <BoardHeaderIcon>
                        <BoardHeaderIconLink><img src='/Vector.png'/></BoardHeaderIconLink>
                        <BoardHeaderIconMap><img src='/ic_location_on-32px.png'/></BoardHeaderIconMap>
                    </BoardHeaderIcon>
                </BoardHeaderIconWrapper>
            </BoardHeader>
    
            <BoardBody>
                <BoardBodyTitle>{props.data?.fetchBoard.title}</BoardBodyTitle>
                <BoardBodyImage><img src='/펭수.jpeg'/></BoardBodyImage>
                <BoardBodyContents>{props.data?.fetchBoard.contents}</BoardBodyContents>
                <BoardBodyVideo>
                    <img src='/비디오 예시.jpg'/>
                    {/* <Iframe width="560" height="315" src="https://www.youtube.com/embed/6_TSNXYGyUA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen/> */}
                </BoardBodyVideo>
            </BoardBody>
    
            <BoardFooter>
                <BoardFooterLike><img src='/Vector (1).png'/>{props.data?.fetchBoard.likeCount}</BoardFooterLike>
                <BoardFooterDislike><img src='/Vector (2).png'/>{props.data?.fetchBoard.dislikeCount}</BoardFooterDislike>
            </BoardFooter>
        </Board>
    )

    //<iframe width="560" height="315" src="https://www.youtube.com/embed/6_TSNXYGyUA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    




}

