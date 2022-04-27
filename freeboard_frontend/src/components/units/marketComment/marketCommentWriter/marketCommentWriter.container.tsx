import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import {
  IMutation,
  IMutationCreateUseditemQuestionArgs,
} from "../../../../commons/types/generated/type";
import MarketCommentWriterUI from "./marketCommentWriter.presenter";
import {
  CREATE_USED_ITEM_QUESTION,
  FETCH_USED_ITEM_QUESTIONS,
} from "./marketCommentWriter.query";
import { IFormValue } from "./marketCommentWriter.types";

export default function MarketCommentWriterPage() {
  const router = useRouter();
  const { register, handleSubmit, watch, setValue } = useForm({
    mode: "onChange",
  });

  const [createUseditemQuestion] = useMutation<
    Pick<IMutation, "createUseditemQuestion">,
    IMutationCreateUseditemQuestionArgs
  >(CREATE_USED_ITEM_QUESTION);

  const contents = watch().contents?.length;

  const onCilckComment = async (data: IFormValue) => {
    const { contents } = data;
    if (data.contents) {
      try {
        await createUseditemQuestion({
          variables: {
            createUseditemQuestionInput: {
              contents: contents,
            },
            useditemId: String(router.query.marketId),
          },
          refetchQueries: [
            {
              query: FETCH_USED_ITEM_QUESTIONS,
              variables: { useditemId: router.query.marketId },
            },
          ],
        });
        Modal.success({
          content: "댓글 등록에 성공했습니다!!",
        });
        console.log("ㅃㅃ", data.contents);
        setValue("contents", "");
      } catch (error) {
        if (error instanceof Error)
          Modal.error({
            title: "This is an error message",
            content: "댓글 등록에 실패했습니다",
          });
      }
    }
  };

  return (
    <MarketCommentWriterUI
      onCilckComment={onCilckComment}
      register={register}
      handleSubmit={handleSubmit}
      contents={contents}
    />
  );
}
