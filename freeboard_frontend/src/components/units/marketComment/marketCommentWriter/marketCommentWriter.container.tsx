import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { MouseEvent } from "react";
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
import {
  IFormValue,
  IMarketCommentWriter,
  IMyVariables,
} from "./marketCommentWriter.types";
import { UPDATE_USED_ITEM_QUESTION } from "../marketCommentList/marketCommentList.query";

export default function MarketCommentWriterPage(props: IMarketCommentWriter) {
  const router = useRouter();
  const { register, handleSubmit, watch, setValue, getValues } = useForm({
    mode: "onChange",
  });

  const [createUseditemQuestion] = useMutation<
    Pick<IMutation, "createUseditemQuestion">,
    IMutationCreateUseditemQuestionArgs
  >(CREATE_USED_ITEM_QUESTION);

  const [updateUseditemQuestion] = useMutation(UPDATE_USED_ITEM_QUESTION);

  const contentslength = watch().contents?.length;

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
              variables: { useditemId: String(router.query.marketId) },
            },
          ],
        });
        Modal.success({
          content: "댓글 등록에 성공했습니다!!",
        });
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

  const onClickCommentUpdate = async (data: IFormValue) => {
    const myVariables: IMyVariables = {
      updateUseditemQuestionInput: {},
      useditemQuestionId: props.useditemQuestionId,
    };
    if (data.contents) {
      myVariables.updateUseditemQuestionInput.contents = data.contents;
    }
    try {
      const updateComments = await updateUseditemQuestion({
        variables: myVariables,
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTIONS,
            variables: { useditemId: String(router.query.marketId) },
          },
        ],
      });
      props.setIsEdit(false);
      Modal.success({
        content: "댓글 수정에 성공하였습니다 ",
      });
    } catch (error) {
      Modal.error({
        content: "댓글 수정에 실패하였습니다 ",
      });
    }
  };

  return (
    <MarketCommentWriterUI
      onCilckComment={onCilckComment}
      onClickCommentUpdate={onClickCommentUpdate}
      register={register}
      handleSubmit={handleSubmit}
      contentslength={contentslength}
      isEditProps={props.isEditProps}
      getValues={getValues}
    />
  );
}
