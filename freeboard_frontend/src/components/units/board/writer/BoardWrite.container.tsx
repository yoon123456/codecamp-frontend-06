// 게시물 등록페이지 이자 게시물 수정페이지

import { useState, ChangeEvent, useEffect } from "react";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import BoardWriteUI from "./BoardWrite.presenter";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries";
import { IBoardWriteProps, IMyVariables } from "./BoardWrite.types";
import { Modal } from "antd";
import {
  IMutation,
  IMutationCreateBoardArgs,
  IMutationUpdateBoardArgs,
} from "../../../../commons/types/generated/type";

export default function BoardWrite(props: IBoardWriteProps) {
  const [isActive, setIsActive] = useState(false);

  // input 과 error 선언
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [address, setAddress] = useState("");
  const [youtube, setYoutube] = useState("");
  const [zonecode, setZonecode] = useState("");
  const [daumAddress, setDaumAdress] = useState("");
  const [daumAddressDetail, setDaumAdressDetail] = useState("");
  const [fileUrls, setFileUrls] = useState(["", "", ""]);

  const [writerError, setWriterError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [contentsError, setContentsError] = useState("");
  const [addressError, setAddressError] = useState("");
  const [youtubeError, setYoutubeError] = useState("");

  // api 선언
  const [createBoard] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATE_BOARD);
  const [updateBoard] = useMutation<
    Pick<IMutation, "updateBoard">,
    IMutationUpdateBoardArgs
  >(UPDATE_BOARD);
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);

  const showModal = () => {
    setIsOpen(true);
  };

  const handleOk = () => {
    setIsOpen(false);
  };

  const handleCancel = () => {
    setIsOpen(false);
  };

  const handleComplete = (data: any) => {
    setDaumAdress(data.address);
    setZonecode(data.zonecode);
    setIsOpen(false);
  };

  function onChangeWriter(event: ChangeEvent<HTMLInputElement>) {
    setWriter(event.target.value);
    if (event.target.value) {
      setWriterError("");
    }
    if (
      writer !== "" &&
      title !== "" &&
      contents !== "" &&
      address !== "" &&
      youtube !== ""
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }

  function onChangePassword(event: ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
    if (event.target.value) {
      setPasswordError("");
    }
    if (
      writer !== "" &&
      title !== "" &&
      contents !== "" &&
      address !== "" &&
      youtube !== ""
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }

  function onChangeTitle(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
    if (event.target.value) {
      setTitleError("");
    }
    if (
      writer !== "" &&
      title !== "" &&
      contents !== "" &&
      address !== "" &&
      youtube !== ""
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }

  function onChangeContents(event: ChangeEvent<HTMLTextAreaElement>) {
    setContents(event.target.value);
    if (event.target.value) {
      setContentsError("");
    }
    if (
      writer !== "" &&
      title !== "" &&
      contents !== "" &&
      address !== "" &&
      youtube !== ""
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }

  function onChangeAddress(event: ChangeEvent<HTMLInputElement>) {
    setAddress(event.target.value);
    setDaumAdressDetail(event.target.value);
    if (event.target.value) {
      setAddressError("");
    }
    if (
      writer !== "" &&
      title !== "" &&
      contents !== "" &&
      address !== "" &&
      youtube !== ""
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }

  function onChangeYoutube(event: ChangeEvent<HTMLInputElement>) {
    setYoutube(event.target.value);
    if (event.target.value) {
      setYoutubeError("");
    }
    if (
      writer !== "" &&
      title !== "" &&
      contents !== "" &&
      address !== "" &&
      event.target.value !== ""
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }

  const onChangeFileUrls = (fileUrl: string, index: number) => {
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl;
    setFileUrls(newFileUrls);
  };

  const onClickSingUp = async () => {
    if (writer === "") {
      setWriterError("이름이 올바르지 않습니다!");
    }
    if (password === "") {
      setPasswordError("비밀번호가 올바르지 않습니다!");
    }
    if (title === "") {
      setTitleError("제목이 올바르지 않습니다!");
    }
    if (contents === "") {
      setContentsError("내용이 올바르지 않습니다!");
    }
    if (address === "") {
      setAddressError("주소가 올바르지 않습니다!");
    }
    if (youtube === "") {
      setYoutubeError("링크를 적어주세요!");
    }
    if (
      writer !== "" &&
      password !== "" &&
      title !== "" &&
      contents !== "" &&
      address !== "" &&
      youtube !== ""
    ) {
      // alert("회원가입을 축하합니다!")
      // 동기방식으로 처리
      try {
        const result = await createBoard({
          variables: {
            createBoardInput: {
              writer: writer,
              password: password,
              title: title,
              contents: contents,
              youtubeUrl: youtube,
              images: fileUrls,
              boardAddress: {
                zipcode: zonecode,
                address: daumAddress,
                addressDetail: daumAddressDetail,
              },
            },
          },
        });
        Modal.success({
          content: "게시글 등록에 성공했습니다!!",
        });
        router.push(`/boards/${result.data?.createBoard._id}`);
      } catch (error) {
        if (error instanceof Error)
          Modal.error({
            title: "This is an error message",
            content: "게시글 등록에 실패했습니다",
          });
      }
    }
  };

  const onClickUpdate = async () => {
    const currentFiles = JSON.stringify(fileUrls);
    const defaultFiles = JSON.stringify(props.data.fetchBoard.images);
    const isChangedFiles = currentFiles !== defaultFiles;

    if (
      !title &&
      !contents &&
      !youtube &&
      !daumAddress &&
      !daumAddressDetail &&
      !zonecode &&
      !isChangedFiles
    ) {
      alert("수정한 내용이 없습니다.");
      return;
    }
    const myVariables: IMyVariables = {
      updateBoardInput: {},
      password: password,
      boardId: String(router.query.boardId),
    };
    if (title) {
      myVariables.updateBoardInput.title = title;
    }
    if (contents) {
      myVariables.updateBoardInput.contents = contents;
    }
    if (youtube) {
      myVariables.updateBoardInput.youtubeUrl = youtube;
    }
    if (daumAddress || (daumAddressDetail && zonecode)) {
      myVariables.updateBoardInput.boardAddress = {};
    }
    if (daumAddress) {
      myVariables.updateBoardInput.boardAddress.address = daumAddress;
    }
    if (daumAddressDetail) {
      myVariables.updateBoardInput.boardAddress.addressDetail =
        daumAddressDetail;
    }
    if (zonecode) {
      myVariables.updateBoardInput.boardAddress.zipcode = zonecode;
    }
    if (isChangedFiles) {
      myVariables.updateBoardInput.images = fileUrls;
    }

    try {
      const update = await updateBoard({
        variables: myVariables,
      });
      Modal.success({
        content: "게시글 수정에 성공했습니다!!",
      });
      router.push(`/boards/${router.query.boardId}`);
    } catch (error) {
      if (error instanceof Error)
        Modal.error({
          title: "This is an error message",
          content: "게시글 수정에 실패했습니다",
        });
    }
  };

  useEffect(() => {
    if (props.data?.fetchBoard.images?.length) {
      setFileUrls([...props.data?.fetchBoard.images]);
    }
  }, [props.data]);

  return (
    <>
      <BoardWriteUI
        onChangeWriter={onChangeWriter}
        onChangePassword={onChangePassword}
        onChangeTitle={onChangeTitle}
        onChangeContents={onChangeContents}
        onChangeAddress={onChangeAddress}
        onChangeYoutube={onChangeYoutube}
        onChangeFileUrls={onChangeFileUrls}
        onClickSingUp={onClickSingUp}
        onClickUpdate={onClickUpdate}
        writerError={writerError}
        passwordError={passwordError}
        titleError={titleError}
        contentsError={contentsError}
        addressError={addressError}
        youtubeError={youtubeError}
        isActive={isActive}
        isEdit={props.isEdit}
        data={props.data}
        showModal={showModal}
        handleOk={handleOk}
        handleCancel={handleCancel}
        handleComplete={handleComplete}
        zonecode={zonecode}
        daumAddress={daumAddress}
        daumAddressDetail={daumAddressDetail}
        fileUrls={fileUrls}
        isOpen={isOpen}
      />
    </>
  );
}
