import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import MainPageUI from "./main.presenter";
export default function MainPageState() {
  const [name, setName] = useState("");
  const router = useRouter();
  const onChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event?.target.value);
  };
  const onClickGoHome = () => {
    router.push("/boards");
  };

  return (
    <MainPageUI
      name={name}
      onChangeName={onChangeName}
      onClickGoHome={onClickGoHome}
    />
  );
}
