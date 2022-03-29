import { useState, ChangeEvent } from "react";
import { Modal, Button } from "antd";

const ModalCustonPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [password, setPassword] = useState("");

  const showModal = () => {
    setIsOpen(true);
  };

  const handleOk = () => {
    setIsOpen(false);
  };

  const handleCancel = () => {
    setIsOpen(false);
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal
        title="비밀번호를 입력해주세요"
        visible={isOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        비밀번호 입력: <input type="password" onChange={onChangePassword} />
      </Modal>
    </>
  );
};

export default ModalCustonPage;
