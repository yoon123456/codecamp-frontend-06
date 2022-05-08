import { useForm } from "react-hook-form";

interface IFormValues {
  writer?: string;
  title?: string;
  contents?: string;
}

export default function ReactHookFormpage() {
  const { register, handleSubmit, formState } = useForm();

  // 등록하기 버튼을 누르면 한번만 요청이 갈수 있도록 하는 기능 (여러번 눌러도 요청이 가지 않도록)
  // 누르면 isSubmitting이 true 값으로 바뀜
  formState.isSubmitting;

  const onClickSubmit = (data: IFormValues) => {
    console.log(data);
  };

  console.log("리렌더링 체크");

  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      작성자:
      <input type="text" {...register("writer")} />
      제목: <input type="text" {...register("title")} />
      내용:
      <input type="text" {...register("contents")} />
      <button disabled={formState.isSubmitting}>등록하기</button>
    </form>
  );
}
