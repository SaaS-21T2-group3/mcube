import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import actions from 'redux/Profile/actions';
import {
  Row,
  Col,
  Tag,
  Button,
  Typography,
  Avatar,
  Rate,
  notification,
} from 'antd';
import AppTitles from 'components/utils/AppTitles';
import AppTabs from './AppTabs.js';
import {
  WechatOutlined,
  MailOutlined,
  LinkedinOutlined,
  EditOutlined,
  HomeTwoTone,
  PhoneOutlined,
  PhoneFilled,
} from '@ant-design/icons';
import EditProfileModal from './EditProfileModal.js';
import { getRandomColor } from '../tools/colorGenerator';
import ViewWrapper from './utils/ViewWrapper.js';
import AppTexts from 'components/utils/AppTexts.js';
import { useHistory } from 'react-router-dom';
import avatarImg from 'assets/avatar.jpg';
import SkillsList from './utils/skillsList.js';
function Profile({ user_id }) {
  const { Paragraph } = Typography;
  const dispatch = useDispatch();
  let history = useHistory();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [data, setData] = useState(null);
  const [avgUserRating, setAvgUserRating] = useState(0);
  const { userId } = useSelector((state) => state.authenticateReducer);

  const { profileData, profileDataTemp, rating } = useSelector(
    (state) => state.profileReducer,
  );

  useEffect(() => {
    user_id
      ? dispatch({
          type: actions.GETTEMPUSERDETAILS,
          payload: {
            user_id: user_id,
          },
        })
      : dispatch({
          type: actions.GETUSERDETAILS,
          payload: {
            user_id: userId,
          },
        });
  }, []);

  useEffect(() => {
    if (user_id) {
      setData(profileDataTemp[user_id]);
    } else {
      setData(profileData);
    }
    return () => {};
  }, [profileDataTemp, profileData]);

  useEffect(() => {
    dispatch({
      type: actions.GETAVGUSERRATING,
      payload: {
        user_id: user_id ? user_id : userId,
      },
    });
    setAvgUserRating(rating);
  }, []);
  let skillsList = data?.skill?.map((skil) => (
    <Tag color={getRandomColor(skil.skill_name)}>{skil.skill_name}</Tag>
  ));

  const openEditUsertModel = () => {
    // setUserId(UserId);
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  function openChatModule() {
    history.push({
      pathname: '/messages',
      search: `?talk=${user_id ? user_id : userId}`,
      state: { userId: user_id ? user_id : userId },
    });
  }

  const openLinkedinInNewTab = (url) => {
    window.open(url, '_blank');
  };

  const openMailInNewTab = (url) => {
    window.open(`mailto: ${url}`, '_blank');
  };

  return data ? (
    <ViewWrapper grid={true}>
      {user_id === undefined && (
        <EditProfileModal
          isModalVisible={isModalVisible}
          userId={userId}
          handleCancel={handleCancel}
        />
      )}
      <Row className='profile-wrapper-header' style={{ position: 'relative' }}>
        <div className='profile-wrapper-header-div'>
          <Avatar
            src={avatarImg}
            style={{
              // backgroundColor: 'rgb(154 160 164)',
              backgroundColor: getRandomColor('Navya'),
              margin: 'auto',
            }}
            size={{
              xs: 50,
              sm: 50,
              md: 80,
              lg: 80,
              xl: 100,
              xxl: 100,
            }}
            // icon={<UserOutlined />}
          />
        </div>

        <Col lg={12} md={12} sm={24} xs={24}>
          <div>
            <AppTitles
              containerStyles={{ marginLeft: '0px' }}
              className='large'
              content={`${data?.profile?.first_name}
                ${data?.profile?.last_name}`}
              style={{
                fontWeight: 'bold',
              }}
            />
            <AppTexts
              className='medium italics'
              content={`Title: ${data?.profile?.title}`}
            />
            {/* <div className='italics' style={{ marginLeft: '1%' }}>
              Interests: {interestsList}
            </div> */}
            <div
              className='italics'
              style={{ marginLeft: '2px', marginBottom: '20px' }}
            >
              skills: <SkillsList userId={user_id ? user_id : userId} />
            </div>
            <Rate key={rating} value={rating} disabled />
          </div>
        </Col>
        <Col
          lg={8}
          md={12}
          sm={24}
          xs={24}
          style={{
            justifyContent: 'flex-end',
            display: 'flex',
            flexFlow: 'column',
            alignItems: 'flex-end',
          }}
        >
          <Row justify='start' align='start'>
            {data?.profile?.city ||
            data?.profile?.state ||
            data?.profile?.country ||
            data?.profile?.zipcode !== 0 ? (
              <AppTitles
                content={
                  <HomeTwoTone style={{ fontSize: '25px' }} size='30px' />
                }
                style={{ fontWeight: 'bold' }}
              />
            ) : null}
            <AppTitles
              size='small'
              content={`
              ${data?.profile?.city}
              ${data?.profile?.state}
              ${data?.profile?.country}
              ${data?.profile?.zipcode === 0 ? '' : data?.profile?.zipcode}`}
            />
          </Row>

          <div>
            <Button
              type='dashed'
              shape='round'
              icon={<WechatOutlined />}
              size={20}
              style={{ margin: '4px' }}
              onClick={openChatModule}
            />
            <Button
              type='dashed'
              shape='round'
              icon={<MailOutlined />}
              size={20}
              style={{ margin: '4px' }}
              onClick={() => openMailInNewTab(data?.profile?.email)}
            />
            <Button
              type='dashed'
              shape='round'
              icon={<LinkedinOutlined />}
              size={20}
              style={{ margin: '4px' }}
              onClick={() => openLinkedinInNewTab(data?.profile?.links)}
            />
            <Button
              type='dashed'
              shape='round'
              size={20}
              onClick={() =>
                notification['info']({
                  message: 'Contact number copied',
                  placement: 'bottomRight',
                })
              }
              style={{ margin: '4px' }}
            >
              <Paragraph
                copyable={{
                  text: data?.profile?.mobile_no,
                  icon: [
                    <PhoneOutlined key='copy-icon' />,
                    <PhoneFilled key='copied-icon' />,
                  ],
                  tooltips: ['Copy Contact info!', 'Copied!'],
                }}
              ></Paragraph>
            </Button>
          </div>
        </Col>
        {user_id === undefined && (
          <Button
            type='primary'
            shape='round'
            icon={<EditOutlined />}
            onClick={() => openEditUsertModel()}
            style={{ position: 'absolute', top: '10px', right: '10px' }}
          >
            Edit
          </Button>
        )}
      </Row>
      <AppTabs user_id={user_id} />
    </ViewWrapper>
  ) : null;
}

export default Profile;
