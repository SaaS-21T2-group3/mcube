import React, { useEffect, useState, useRef } from 'react';
import actions from 'redux/Forum/actions';
import { useSelector, useDispatch } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroller';
import Feed from './utils/Feed';
import { Row, Empty } from 'antd';
import Buttons from 'components/utils/Buttons';
import UserCard from './utils/UserCard';
import ProjectCard from './utils/ProjectCard';
import ProjectModal from 'components/Profile/ProjectModal';
import UserModal from 'components/utils/UserModal';
export default function Search() {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [idForModal, setIdForModal] = useState('');
  const [userIdModal, setUserIdModal] = useState(null);
  const [isUserModalVisible, setIsUserModalVisible] = useState(false);
  const [isProjectModalVisible, setIsProjectModalVisible] = useState(false);
  const { searchData, searchString, searchLoading } = useSelector(
    (state) => state.forumReducer,
  );
  function getDummy() {
    let numberofDummy = 5;
    let dummyData = [];
    for (var i = 0; i < numberofDummy; i++) {
      dummyData.push({ title: `dummy${i}`, loading: true });
    }
    return dummyData;
  }
  const doSearch = () => {
    console.log('going to search');
    dispatch({
      type: actions.TOGGLESTATE,
      payload: { label: 'searchLoading', value: true },
    });
    console.log('going to search');
    dispatch({
      type: actions.SEARCHFEEDS,
      params: { searchString: searchString },
    });
  };
  // useEffect(() => {
  //   // eslint-disable-next-line
  //   // eslint-disable-next-line
  //   setData([...currentContentFeed.current, ...getDummy()]);
  //   doSearch();
  //   return () => {};
  // }, [dispatch]);

  useEffect(() => {
    let results = searchData;
    // results = results.filter((result) => result.score > 0);
    console.log(results);
    setData(results);
    return () => {};
  }, [searchData]);
  const addMoreFeeds = () => {
    setData([...getDummy()]);
    doSearch();
    return () => {};
  };

  const handleMoreDetails = (type, id) => {
    setIdForModal(id);
    if (type === 'project_id') {
      setIsProjectModalVisible(true);
    } else {
      setUserIdModal(id);
      setIsUserModalVisible(true);
    }
  };
  const handleCancel = () => {
    setIsProjectModalVisible(false);
    setIsUserModalVisible(false);
  };
  if (data.length > 0) {
    return (
      <>
        <ProjectModal
          isModalVisible={isProjectModalVisible}
          projectId={idForModal}
          handleCancel={handleCancel}
        />
        <UserModal
          isModalVisible={isUserModalVisible}
          projectId={idForModal}
          handleCancel={handleCancel}
          userID={userIdModal}
        />
        <InfiniteScroll
          pageStart={0}
          initialLoad={false}
          // loadMore={}
          hasMore={true || false}
          // element={ListWrapper}
          loader={
            <div className='feed-loader-wrapper' key={0}>
              {/* <Space direction='vertical'>
                <Buttons
                  type='primary'
                  loading={searchLoading}
                  handleClick={() => addMoreFeeds()}
                  content={searchLoading ? 'Loading More' : 'Load More'}
                ></Buttons>
              </Space> */}
            </div>
          }
          threshold={100}
        >
          <Row className='search-result-container' gutter={[16, 16]}>
            {data.map((searchResult, index) =>
              !searchResult?.project_id ? (
                <UserCard
                  key={searchResult.title + index}
                  index={index}
                  city={searchResult.city}
                  country={searchResult.country}
                  first_name={searchResult.first_name}
                  last_name={searchResult.last_name}
                  links={searchResult.links}
                  pic={searchResult.pic}
                  score={searchResult.score}
                  state={searchResult.state}
                  title={searchResult.title}
                  user_id={searchResult.user_id}
                  zipcode={searchResult.zipcode}
                  loading={searchLoading}
                  handleClick={handleMoreDetails}
                />
              ) : (
                <ProjectCard
                  key={searchResult.title + index}
                  index={index}
                  project_description={searchResult.project_description}
                  project_id={searchResult.project_id}
                  project_location={searchResult.project_location}
                  project_requirement={searchResult.project_requirement}
                  project_start_date={searchResult.project_start_date}
                  project_title={searchResult.project_title}
                  score={searchResult.score}
                  loading={searchLoading}
                  handleClick={handleMoreDetails}
                />
              ),
            )}
          </Row>
        </InfiniteScroll>
      </>
    );
  } else if (searchLoading) {
    return (
      <Empty
        image='https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg'
        imageStyle={{
          height: 60,
        }}
        description={<span>Collecting Search Results...</span>}
      ></Empty>
    );
  } else {
    return (
      <Empty
        image='https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg'
        imageStyle={{
          height: 60,
        }}
        description={
          searchString === '' ? (
            <span>Please enter a search key...</span>
          ) : (
            <span>No Search Results...</span>
          )
        }
      >
        {/* <Buttons handleClick={doSearch} content='Retry Search' /> */}
      </Empty>
    );
  }
}
