import { ChangeEvent, useState } from "react";

export default function ImageUploadPreviewPage() {
  const [imageUrl, setImageUrl] = useState("");

  const onChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) {
      alert("파일이 없어욤");
      return;
    }
    const fileReader = new FileReader();
    // 임시 url 형태로 만들어준다
    fileReader.readAsDataURL(file);
    fileReader.onload = (data) => {
      if (typeof data.target?.result === "string")
        console.log(data.target?.result);
      setImageUrl(data.target?.result);
    };
  };

  return (
    <div>
      <input type="file" onChange={onChangeFile} />
      <img src={imageUrl} />
    </div>
  );
}
