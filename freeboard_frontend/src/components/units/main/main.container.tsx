import { useRouter } from "next/router";
import { useState } from "react";
import MainPageUi from "./main.presenter";
export default function MainPageState() {
  const [name, setName] = useState("");
  const router = useRouter();
  const onChangeName = (event: any) => {
    setName(event?.target.value);
  };
  const onClickGoHome = () => {
    router.push("/boards");
  };

  return (
    <MainPageUi
      name={name}
      onChangeName={onChangeName}
      onClickGoHome={onClickGoHome}
    />
  );
}