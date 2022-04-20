// import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";

// 프리렌더링으로 인해 일어나는 오류를 해결하기 위해 dynamic import를 진행한다 서버사이드렌더링을 false로 선언했다
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function WebEditorPage() {
  const onChangeContents = (value: string) => {
    console.log(value);
  };
  return (
    <div>
      작성자: <input type="text" />
      <br />
      비밀번호: <input type="password" />
      <br />
      제목: <input type="text" />
      <br />
      내용:
      {typeof window !== "undefined" && (
        <ReactQuill onChange={onChangeContents} />
      )}
      <br />
      <button>등록하기</button>
    </div>
  );
}
