import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import MarketWriterPageUI from "./marketWriter.presenter";
import { useMutation } from "@apollo/client";
import { CREATE_USED_ITEM } from "./marketWriter.query";
import {
  IMutation,
  IMutationCreateUseditemArgs,
} from "../../../../commons/types/generated/type";
import { Modal } from "antd";
import { IFormValue } from "./marketWriter.types";
import { useRouter } from "next/router";

const schema = yup.object({
  name: yup.string().required("상품명은 필수입력사항 입니다"),
  remarks: yup.string().required("한줄요약은 필수입력사항 입니다"),
  contents: yup
    .string()
    .max(200, "200자 이내로 적어주세요")
    .required("상세내용은 필수입력사항 입니다"),
  price: yup.string().required("가격은 필수입력사항 입니다"),
});

export default function MarketBoardWriter() {
  const router = useRouter();
  const { register, handleSubmit, formState, setValue, trigger } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const [createUsedItem] = useMutation<
    Pick<IMutation, "createUseditem">,
    IMutationCreateUseditemArgs
  >(CREATE_USED_ITEM);

  const onChangeContents = (value: string) => {
    console.log(value);
    setValue("contents", value === "<p><br></p>" ? "" : value);
    trigger("contents");
  };

  const onClickSubmit = async (data: IFormValue) => {
    console.log(data);
    if (!(data.name && data.remarks && data.contents && data.price)) {
      alert("모두 입력해 주세요!");
      return;
    }
    if (data.name && data.remarks && data.contents && data.price) {
      try {
        const result = await createUsedItem({
          variables: {
            createUseditemInput: {
              ...data,
              price: Number(data.price),
            },
          },
        });
        console.log(result);
        console.log(result.data);
        // router.push(`/market/${result.data?.createUseditem._id}`);
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

  return (
    <MarketWriterPageUI
      onChangeContents={onChangeContents}
      onClickSubmit={onClickSubmit}
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
    />
  );
}
