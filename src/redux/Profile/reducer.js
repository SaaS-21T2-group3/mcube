import actions from 'redux/Profile/actions';

const initialState = {
  profileData: null,
  profileDataTemp: {},
  userId: null,
  skillList: [],
  userProjectList: [],
  userSkillList: [],
  userProjectListTemp: {},
  userSkillListTemp: {},
  userReviewsListTemp: {},
};

function Reducer(state = initialState, action) {
  switch (action.type) {
    //PROFILE
    case actions.GETUSERDETAILS_SUCCESS:
      return { ...state, profileData: action.data.data };
    case actions.GETTEMPUSERDETAILS_SUCCESS:
      let newprofileDataTemp = { ...state.profileDataTemp };
      newprofileDataTemp[action.userId] = action.data.data;
      return {
        ...state,
        profileDataTemp: {
          ...newprofileDataTemp,
        },
      };
    case actions.EDITUSERDETAILS_SUCCESS:
      return { ...state };
    //PROJECTS
    case actions.GETUSERPROJECTS_SUCCESS:
      return { ...state, userProjectList: action.data.data };
    case actions.GETTEMPUSERPROJECTS_SUCCESS:
      let newProjectDataTemp = { ...state.userProjectListTemp };
      newProjectDataTemp[action.userId] = action.data.data;
      return {
        ...state,
        userProjectListTemp: {
          ...newProjectDataTemp,
        },
      };
    case actions.CREATEUSERPROJECT_SUCCESS:
      return { ...state };
    //SKILLS
    case actions.GETSKILLS_SUCCESS:
      return {
        ...state,
        skillList: Object.values(action.data.data['skill_name']),
      };
    case actions.ADDSKILL_SUCCESS:
      return {
        ...state,
        skillErrorMessage: action.data.message,
        skillDisplayError: false,
      };
    case actions.ADDSKILL_ERROR:
      return {
        ...state,
      };
    case actions.GETUSERSKILLS_SUCCESS:
      return { ...state, userSkillList: [...action.data.data] };
    case actions.UPDATEUSERSKILLS_SUCCESS:
      return { ...state };
    //REVIEWS
    case actions.GETUSERREVIEWS_SUCCESS:
      return { ...state, userReviewsList: [...action.data.data] };
    case actions.GETTEMPUSERREVIEWS_SUCCESS:
      let newReviewsTemp = { ...state.userReviewsListTemp };
      newReviewsTemp[action.userId] = action.data.data;
      return {
        ...state,
        userReviewsListTemp: {
          ...newReviewsTemp,
        },
      };
    default:
      return state;
  }
}

export default Reducer;
