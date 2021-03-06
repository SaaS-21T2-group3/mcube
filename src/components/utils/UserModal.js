import React from 'react';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Modal } from 'antd';
import Profile from 'components/Profile/Profile';

function UserModal({ isModalVisible, userID, handleCancel }) {
  let id = userID?.split('_')[1];
  const { confirm } = Modal;

  function showConfirm() {
    confirm({
      title: 'Do you want to connect?',
      icon: <ExclamationCircleOutlined />,
      onOk() {
        alert('OK');
      },
    });
  }

  return (
    <Modal
      title='User Profile'
      visible={isModalVisible}
      onCancel={handleCancel}
      onOk={showConfirm}
      width='100%'
      style={{
        maxWidth: 1000,
        height: '80%',
      }}
    >
      <Profile user_id={id} />
    </Modal>
  );
}

export default UserModal;
