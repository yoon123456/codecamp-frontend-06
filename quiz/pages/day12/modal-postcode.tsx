import React, { useState } from "react";
import { Modal, Button } from "antd";
import DaumPostcode from "react-daum-postcode";

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const [post, setPost] = useState("");

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const handleComplete = (data: any) => {
    setPost(data.address);
    console.log(data);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        모달열기
      </Button>
      <div>{post}</div>
      <Modal
        title="주소등록"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <DaumPostcode onComplete={handleComplete} />
        <p>주소등록이 완료되었습니다</p>
      </Modal>
    </>
  );
}
