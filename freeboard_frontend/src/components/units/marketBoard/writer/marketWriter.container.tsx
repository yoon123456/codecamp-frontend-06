import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import MarketWriterPageUI from "./marketWriter.presenter";
import { useMutation } from "@apollo/client";
import { CREATE_USED_ITEM, UPDATE_USED_ITEM } from "./marketWriter.query";
import {
  IMutation,
  IMutationCreateUseditemArgs,
  IMutationUpdateUseditemArgs,
} from "../../../../commons/types/generated/type";
import { Modal } from "antd";
import {
  IFormValue,
  IMarketWriteProps,
  IMyVariables,
} from "./marketWriter.types";
import { useRouter } from "next/router";
import { ChangeEvent, useEffect, useState } from "react";
import HashTagPage from "./hashTag";

const schema = yup.object({
  name: yup.string().required("상품명은 필수입력사항 입니다"),
  remarks: yup.string().required("한줄요약은 필수입력사항 입니다"),
  contents: yup
    .string()
    .max(200, "200자 이내로 적어주세요")
    .required("상세내용은 필수입력사항 입니다"),
  price: yup.string().required("가격은 필수입력사항 입니다"),
});

export default function MarketBoardWriter(props: IMarketWriteProps) {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState,
    setValue,
    trigger,
    reset,
    getValues,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  const [fileUrls, setFileUrls] = useState(["", "", ""]);
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);
  const [address, setAddress] = useState("");
  const [addressDetail, setAdressDetail] = useState("");
  const [hashArr, setHashArr] = useState<string[]>([]);

  const [createUsedItem] = useMutation<
    Pick<IMutation, "createUseditem">,
    IMutationCreateUseditemArgs
  >(CREATE_USED_ITEM);

  const [updateUseditem] = useMutation<
    Pick<IMutation, "updateUseditem">,
    IMutationUpdateUseditemArgs
  >(UPDATE_USED_ITEM);

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
    setAddress(data.address);
    // setAdressDetail(data.addressDetail);
    setIsOpen(false);
  };

  const onChangeContents = (value: string) => {
    console.log(value);
    setValue("contents", value === "<p><br></p>" ? "" : value);
    trigger("contents");
  };

  const onChangeFileUrls = (fileUrl: string, index: number) => {
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl;
    setFileUrls(newFileUrls);
  };

  const onChangeAddress = (event: ChangeEvent<HTMLInputElement>) => {
    setAdressDetail(event.target.value);
  };

  const onClickSubmit = async (data: IFormValue) => {
    console.log(data);
    if (!(data.name && data.remarks && data.contents && data.price)) {
      alert("모두 입력해 주세요!");
      return;
    }
    const { price, tags, ...rest } = data;
    // const tagArr = tags.split(",");

    if (data.name && data.remarks && data.contents && data.price) {
      try {
        const result = await createUsedItem({
          variables: {
            createUseditemInput: {
              ...rest,
              price: Number(price),
              tags: hashArr,
              images: fileUrls,
              useditemAddress: {
                address: address,
                addressDetail: addressDetail,
                lat: lat,
                lng: lng,
              },
            },
          },
        });
        console.log(result.data, "ㅁㅁㅁ");
        router.push(`/market/${result.data?.createUseditem._id}`);
        Modal.success({
          content: "상품등록에 성공하였습니다",
        });
      } catch (error) {
        Modal.error({
          content: "상품등록에 실패하였습니다",
        });
      }
    }
  };

  const onClickUpdate = async (data: IFormValue) => {
    const { price, tags, ...rest } = data;
    const currentFiles = JSON.stringify(fileUrls);
    const defaultFiles = JSON.stringify(props.data.fetchUseditem.images);
    const isChangedFiles = currentFiles !== defaultFiles;

    if (!register) {
      alert("수정한 내용이 없습니다.");
      return;
    }
    const myVariables: IMyVariables = {
      updateUseditemInput: {},
      useditemId: String(router.query.marketId),
    };

    if (rest.name) {
      myVariables.updateUseditemInput.name = rest.name;
    }
    if (rest.remarks) {
      myVariables.updateUseditemInput.remarks = rest.remarks;
    }
    if (rest.contents) {
      myVariables.updateUseditemInput.contents = rest.contents;
    }
    if (price) {
      myVariables.updateUseditemInput.price = Number(price);
    }

    if (address || addressDetail) {
      myVariables.updateUseditemInput.useditemAddress = {};
    }
    if (address) {
      myVariables.updateUseditemInput.useditemAddress.address = address;
    }
    // if (daumAddressDetail) {
    //   myVariables.updateBoardInput.boardAddress.addressDetail = daumAddressDetail;
    // }
    // if (zonecode) {
    //   myVariables.updateBoardInput.boardAddress.zipcode = zonecode;
    // }
    if (isChangedFiles) {
      myVariables.updateUseditemInput.images = fileUrls;
    }

    try {
      const update = await updateUseditem({
        variables: myVariables,
      });
      console.log(update);
      Modal.success({
        content: "게시글 수정에 성공했습니다!!",
      });
      router.push(`/market/${router.query.marketId}`);
    } catch (error) {
      if (error instanceof Error)
        Modal.error({
          title: "This is an error message",
          content: "게시글 수정에 실패했습니다",
        });
    }
  };

  useEffect(() => {
    if (props.data?.fetchUseditem?.images?.length) {
      setFileUrls([...props.data?.fetchUseditem.images]);
    }
  }, [props.data]);

  return (
    <>
      <MarketWriterPageUI
        onChangeContents={onChangeContents}
        onChangeFileUrls={onChangeFileUrls}
        onClickSubmit={onClickSubmit}
        register={register}
        handleSubmit={handleSubmit}
        reset={reset}
        getValues={getValues}
        onClickUpdate={onClickUpdate}
        formState={formState}
        data={props.data}
        fileUrls={fileUrls}
        isEdit={props.isEdit}
        lat={lat}
        setLat={setLat}
        lng={lng}
        setLng={setLng}
        isOpen={isOpen}
        showModal={showModal}
        handleOk={handleOk}
        handleCancel={handleCancel}
        handleComplete={handleComplete}
        address={address}
        addressDetail={addressDetail}
        onChangeAddress={onChangeAddress}
        hashArr={hashArr}
        setHashArr={setHashArr}
      />
    </>
  );
}
