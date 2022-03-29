import { useState } from "react";
import { Modal, Button } from "antd";
import DaumPostcode from "react-daum-postcode";

const ModalCustonPage = () => {
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
    console.log(data);
    setIsOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      {/* 모달 안에 입력했다가 다시 들어갔을 경우에 입력값을 삭제하고 새창으로 다시 띄우는 방법 */}
      {isOpen && (
        <Modal
          title="Basic Modal"
          visible={true}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <DaumPostcode onComplete={handleComplete} />
        </Modal>
      )}
      {/* 모달 숨겼다가 나타나게 하는 방법 
       <Modal
        title="Basic Modal"
        visible={isOpen}    
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <DaumPostcode onComplete={handleComplete} />
      </Modal> */}
    </>
  );
};

export default ModalCustonPage;
