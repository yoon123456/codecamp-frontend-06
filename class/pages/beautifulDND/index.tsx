// drag n drop 라이브러리 이용해서 구현한 코드

import React, { useCallback, useState } from "react";
import * as S from "./home.styles";
import Gallery from "react-photo-gallery";
import {
  SortableContainer,
  SortableElement,
  arrayMove,
} from "react-sortable-hoc";
import Photo from "../commons/gallary";
import { photos } from "./photos";
import ImageViewer from "react-simple-image-viewer";
import { Color } from "./Color";
import Canvas from "../../pages/Canvas";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { v4 as uuid } from "uuid";

const SortablePhoto = SortableElement((item: any) => <Photo {...item} />);
const SortableGallery = SortableContainer(({ items }: any) => (
  <Gallery
    photos={items}
    renderImage={(props) => <SortablePhoto {...props} />}
  />
));

export default function HomePresenter() {
  // ---------------------------------- //
  const [color, setColor] = useState("black");
  const [items, setItems] = useState(photos);
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [show, setShow] = useState(false);
  const [layout, setLayout] = useState(1);

  const onSortEnd = ({ oldIndex, newIndex }: any) => {
    setItems(arrayMove(items, oldIndex, newIndex));
    console.log(oldIndex, newIndex);
  };

  const openImageViewer = useCallback((index: any) => {
    // setCurrentImage(index);
    setIsViewerOpen(true);
    console.log(index);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  const handleShow = () => {
    setShow((prev) => !prev);
  };

  const handleLayout1 = () => {
    setLayout(1);
  };
  const handleLayout2 = () => {
    setLayout(2);
  };
  const handleLayout4 = () => {
    setLayout(4);
  };
  const handleLayout9 = () => {
    setLayout(9);
  };

  const handleDoubleClick = () => {
    setLayout(1);
  };

  const handleEnd = (result: any) => {
    if (!result.destination) return;
    const newItems = items;
    const [reorderItems] = newItems.splice(result.source.index, 1);
    newItems.splice(result.destination.index, 0, reorderItems);
    setItems(newItems);
  };

  const handleColor = (e: any) => {
    setColor(e.target.value);
  };
  return (
    <S.Wrapper>
      <S.Header>
        <S.SearchWrap>
          <S.Label>환자검색</S.Label>
          <S.Search type="text" placeholder="환자이름" />
          <S.Button>검색</S.Button>
        </S.SearchWrap>
        <S.PaintWrap>
          <S.Button2>주문하기</S.Button2>
          <S.Button2>등록하기</S.Button2>
          <S.Button2 onClick={handleShow}>
            {show ? "그만하기" : "그리기"}
          </S.Button2>
          {show && (
            <S.Paints>
              {Color.map((el, i) => (
                <S.Paint
                  key={i}
                  color={el.color}
                  value={el.value}
                  onClick={handleColor}
                />
              ))}
            </S.Paints>
          )}
        </S.PaintWrap>
        <S.LayoutWrap>
          <S.Label>화면분할</S.Label>
          <S.Button onClick={handleLayout1}>1분할</S.Button>
          <S.Button onClick={handleLayout2}>2분할</S.Button>
          <S.Button onClick={handleLayout4}>4분할</S.Button>
          <S.Button onClick={handleLayout9}>9분할</S.Button>
        </S.LayoutWrap>
      </S.Header>
      <S.Body>
        <DragDropContext onDragEnd={handleEnd}>
          <Droppable droppableId="images">
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                <S.BodyLeft>
                  <S.Up>
                    <S.Ul>
                      <S.Li>2022-07-09</S.Li>
                      <S.Li>2022-07-01</S.Li>
                      <S.Li>2022-06-28</S.Li>
                      <S.Li>2022-06-20</S.Li>
                      <S.Li>2022-06-02</S.Li>
                    </S.Ul>
                  </S.Up>
                  <S.Down>
                    {photos.map((el, i) => (
                      <Draggable key={uuid()} draggableId={el.id} index={i}>
                        {(provided, snapshot) => (
                          <S.ListGrid
                            draggable="true"
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            ref={provided.innerRef}
                          >
                            <S.Thumnail src={el.src} draggable="true" />
                          </S.ListGrid>
                        )}
                      </Draggable>
                    ))}
                  </S.Down>
                </S.BodyLeft>
                {show ? <Canvas color={color} /> : <div></div>}
                <S.BodyRight>
                  {layout === 1 && <S.Grid></S.Grid>}
                  {layout === 2 && (
                    <S.Layout2 onDoubleClick={handleDoubleClick}>
                      <S.Grid draggable="true"></S.Grid>{" "}
                      <S.Grid draggable="true"></S.Grid>
                    </S.Layout2>
                  )}
                  {layout === 4 && (
                    <S.Layout4 onDoubleClick={handleDoubleClick}>
                      <S.Grid draggable="true"></S.Grid>{" "}
                      <S.Grid draggable="true"></S.Grid>
                      <S.Grid draggable="true"></S.Grid>{" "}
                      <S.Grid draggable="true"></S.Grid>
                    </S.Layout4>
                  )}
                  {layout === 9 && !isViewerOpen && (
                    <div
                      onDoubleClick={handleDoubleClick}
                      onClick={() => openImageViewer(index)}
                    >
                      <SortableGallery
                        // @ts-ignore
                        items={items}
                        onSortEnd={onSortEnd}
                        axis={"xy"}
                      />
                    </div>
                  )}
                  {isViewerOpen && (
                    <ImageViewer
                      src={photos.map((el) => el.src)}
                      currentIndex={currentImage}
                      onClose={closeImageViewer}
                      disableScroll={true}
                      backgroundStyle={{
                        backgroundColor: "rgba(0,0,0,0.9)",
                      }}
                      closeOnClickOutside={true}
                    />
                  )}
                </S.BodyRight>
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </S.Body>
    </S.Wrapper>
  );
}
function index(index: any) {
  throw new Error("Function not implemented.");
}
