import React from 'react';
import { Avatar, Space, Tag, Col, Button, Card, Divider } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { ExpandOutlined } from '@ant-design/icons';

// const defaultText =
//   'The Career Ready Mentoring Program connects UNSW students from their second year of study.';
export default function RecommProjects({
  projectTitle,
  // firstName,
  // lastName,
  projectDescription,
  // email,
  // projectStatus,
  // user_id,
  project_id,
  // loading,
  // userType,
  // location,
  // startDate,
  skills,
  handleClick,
}) {
  return (
    <Col lg={12} md={12} sm={24} xs={24}>
      <Card
        title={
          <>
            <div style={{ textAlign: 'left' }}>
              <Space align='start' wrap>
                <Avatar icon={<UserOutlined />} style={{ float: 'left' }} />
                <>{projectTitle || 'Project Title'}</>
              </Space>
            </div>
          </>
        }
        style={{ float: 'left' }}
        actions={[
          <Button onClick={() => handleClick('project_id', project_id)}>
            <ExpandOutlined key='expand' />
            View Project
          </Button>,
        ]}
      >
        {projectDescription}
        <Divider />
        <Space wrap>
          {skills.split(',').map((skill) => (
            <Tag color='#2db7f5'>{skill}</Tag>
          ))}
        </Space>
      </Card>
    </Col>
  );
}
