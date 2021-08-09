import React, { useState, useEffect } from 'react';
import { Row, Col, Select, Tag, Button, PageHeader, Space } from 'antd';
import SectionDivider from '../utils/SectionDivider';
import { Input, Tooltip } from 'antd';
import { InfoCircleOutlined, TagsOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import actions from 'redux/Profile/actions';
import { getRandomColor } from '../tools/colorGenerator';

const { Option } = Select;
const { Search } = Input;

function Skills({ user_id }) {
  const [tags, setTags] = useState(null);
  const [tagsList, setTagsList] = useState(null);
  const [skillListComponent, setSkillListComponent] = useState(null);
  const [addSkill, setAddSkill] = useState('');
  const dispatch = useDispatch();

  const { userId } = useSelector((state) => state.authenticateReducer);
  const { skillList, userSkillList } = useSelector(
    (state) => state.profileReducer,
  );
  useEffect(() => {
    dispatch({
      type: actions.GETSKILLS,
    });
    dispatch({
      type: actions.GETUSERSKILLS,
      payload: {
        user_id: user_id ? user_id : userId,
      },
    });
  }, []);

  useEffect(() => {
    let SkillListComponent1 = null;
    SkillListComponent1 = skillList?.map(function (skill) {
      return (
        <Option value={skill}>
          <div className='demo-option-label-item'>{skill}</div>
        </Option>
      );
    });
    setSkillListComponent(SkillListComponent1);
  }, [skillList]);

  useEffect(() => {
    setTags(userSkillList);
    let tagsList1 = null;
    tagsList1 = userSkillList?.map(function (tag, index) {
      return (
        <Tag key={index} color={getRandomColor(tag)}>
          {tag}
        </Tag>
      );
    });
    setTagsList(tagsList1);
  }, [userSkillList]);
  useEffect(() => {
    let tagsList1 = null;
    tagsList1 = tags?.map(function (tag, index) {
      return (
        <Tag key={index} color={getRandomColor(tag)}>
          {tag}
        </Tag>
      );
    });
    setTagsList(tagsList1);
    return () => {};
  }, [tags]);
  function handleChange(value) {
    console.log(`selected ${value}`);
    setTags(value);
  }

  function addNewSkillFunc() {
    dispatch({
      type: actions.ADDSKILL,
      payload: {
        skill: addSkill,
      },
    });
    dispatch({
      type: actions.GETSKILLS,
    });
  }

  const updateUserSkillList = () => {
    let resultTags = {};
    for (let i = 0; i < tags.length; i++) {
      resultTags[String(i)] = tags[i];
    }
    console.log(resultTags);
    dispatch({
      type: actions.UPDATEUSERSKILLS,
      payload: {
        user_id: userId,
        skills: resultTags,
      },
    });
    dispatch({
      type: actions.GETUSERDETAILS,
      payload: {
        user_id: userId,
      },
    });
  };

  return (
    <>
      <PageHeader
        className='forum-page-header skill-options'
        // extra={<ForumPageHeaderExtras page='Feeds' />}
      >
        <Row gutter={16} className=''>
          <Col span={24} className='skills-tags-container'>
            <Search
              placeholder='Add new tag'
              enterButton='Add Tag'
              value={addSkill}
              onChange={(e) => setAddSkill(e.target.value)}
              onSearch={() => addNewSkillFunc()}
              prefix={<TagsOutlined className='site-form-item-icon' />}
              suffix={
                <Tooltip title='Only Add new tag if already not present!'>
                  <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                </Tooltip>
              }
            />
          </Col>
          <Col span={24} className='skills-tags-container'>
            {console.log(userSkillList)}
            {userSkillList?.length !== 0 && (
              <Select
                className='skill-select'
                mode='multiple'
                style={{ width: '80%' }}
                placeholder='select skills'
                defaultValue={userSkillList}
                onChange={handleChange}
              >
                {skillListComponent}
              </Select>
            )}
            <Button type='primary' onClick={updateUserSkillList}>
              Add Skills
            </Button>
          </Col>
        </Row>
      </PageHeader>
      <SectionDivider />
      {/* <div className='list-card'>
        <Space>{tagsList}</Space>
      </div> */}
    </>
  );
}

export default Skills;
