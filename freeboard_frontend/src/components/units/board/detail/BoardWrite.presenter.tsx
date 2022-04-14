// 등록한 게시물을 보여주는 페이지  여기에 있는 수정버튼을 누르면 수정페이지로 삭제버튼을 누르면 게시글이 삭제되도록 해야한다  // import {Iframe} from 'react-iframe'

import * as S from "./BoardWrite.styles";
import { getDate } from "../../../commons/libraries/utils";
import { IBoardWriteUIProps } from "./BoardWrite.types";
import { Tooltip } from "antd";

export default function BoardWriterUI(props: IBoardWriteUIProps) {
  const text = (
    <>
      {" "}
      {props.data?.fetchBoard.boardAddress?.address}
      <br />
      {props.data?.fetchBoard.boardAddress?.addressDetail}
    </>
  );
  return (
    <div>
      <S.Board>
        <S.BoardHeader>
          <S.BoardHeaderProfile>
            <S.BoardHeaderProfilePhoto>
              <img src="/img/ic_profile-56px.png" />
            </S.BoardHeaderProfilePhoto>
            <S.BoardHeaderProfileWrapper>
              <S.BoardHeaderProfileWrapperName>
                {props.data?.fetchBoard.writer}
              </S.BoardHeaderProfileWrapperName>
              <S.BoardHeaderProfileWrapperDate>
                Date:{getDate(props.data?.fetchBoard.createdAt)}
              </S.BoardHeaderProfileWrapperDate>
            </S.BoardHeaderProfileWrapper>
          </S.BoardHeaderProfile>
          <S.BoardHeaderIconWrapper>
            <S.BoardHeaderAddress></S.BoardHeaderAddress>
            <S.BoardHeaderIcon>
              <S.BoardHeaderIconLink>
                <img src="/img/Vector.png" />
              </S.BoardHeaderIconLink>
              <S.BoardHeaderIconMap>
                <Tooltip placement="topRight" title={text}>
                  <img src="/img/ic_location_on-32px.png" />
                </Tooltip>
              </S.BoardHeaderIconMap>
            </S.BoardHeaderIcon>
          </S.BoardHeaderIconWrapper>
        </S.BoardHeader>
        <S.BoardBody>
          <S.BoardBodyTitle>{props.data?.fetchBoard.title}</S.BoardBodyTitle>
          <S.BoardBodyImage>
            {props.data?.fetchBoard.images
              ?.filter((el: string) => el)
              .map((el: string) => (
                <S.Image
                  key={el}
                  src={`https://storage.googleapis.com/${el}`}
                />
              ))}
          </S.BoardBodyImage>
          <S.BoardBodyContents>
            {props.data?.fetchBoard.contents}
          </S.BoardBodyContents>
          <S.BoardBodyVideo
            url={props.data?.fetchBoard.youtubeUrl}
            width={500}
            height={300}
          ></S.BoardBodyVideo>
        </S.BoardBody>
        <S.BoardFooter>
          <S.BoardFooterLike onClick={props.onClickLike}>
            <img src="/img/Vector (1).png" />
          </S.BoardFooterLike>
          {props.data?.fetchBoard.likeCount}
          <S.BoardFooterDislike onClick={props.onClickDislike}>
            <img src="/img/Vector (2).png" />
          </S.BoardFooterDislike>
          {props.data?.fetchBoard.dislikeCount}
        </S.BoardFooter>
      </S.Board>
      <S.BottomWrapper>
        <S.Button onClick={props.onClickMoveToBoardList}>목록으로</S.Button>
        <S.Button
          id={props.data?.fetchBoard._id}
          onClick={props.onClickMoveToBoardEdit}
        >
          수정하기
        </S.Button>
        <S.Button id={props.data?.fetchBoard._id} onClick={props.onClickDelete}>
          삭제하기
        </S.Button>
      </S.BottomWrapper>
    </div>
  );
}
