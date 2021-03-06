import React from 'react';
import { Skeleton, Card, Avatar, Tag, Col } from 'antd';
import { ExpandOutlined, UserOutlined } from '@ant-design/icons';
import { getRandomColor } from 'components/tools/colorGenerator';
import AppTexts from 'components/utils/AppTexts';
import Buttons from 'components/utils/Buttons';

const { Meta } = Card;
export default function UserCard({
  city,
  country,
  first_name,
  last_name,
  links,
  pic,
  score,
  state,
  title,
  user_id,
  zipcode,
  loading,
  handleClick,
}) {
  return (
    <Col lg={8} md={12} sm={24} xs={24}>
      <Skeleton loading={loading} avatar active>
        <Card
          style={{ width: 300, marginTop: 16 }}
          className='list-card'
          actions={[
            null,
            <Buttons
              handleClick={() => handleClick('user_id', user_id)}
              content={
                <>
                  <ExpandOutlined key='expand' /> View Profile
                </>
              }
            />,
          ]}
        >
          <Skeleton loading={loading} avatar active>
            <Meta
              avatar={
                <Avatar
                  icon={<UserOutlined />}
                  style={{
                    backgroundColor: getRandomColor(
                      `${first_name} ${last_name}`,
                    ),
                  }}
                />
              }
              title={`${first_name} ${last_name}`}
              description={title}
              style={{ textAlign: 'left' }}
            />
          </Skeleton>
          <Tag className='card-user-type' color='#3ca6b5'>
            User
          </Tag>
        </Card>
      </Skeleton>
    </Col>
  );
}
// data.city
// data.country
// data.first_name
// data.last_name
// data.links
// data.pic
// data.score
// data.state
// data.title
// data.user_id
// data.zipcode
