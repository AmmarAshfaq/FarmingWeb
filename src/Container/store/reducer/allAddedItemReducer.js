import ActionTypes from '../constant/allCropConstant'
import ActionComment from '../constant/commentConstant'
const INITIAL_STATE = {
  cropData: [],
  specificCrop: {},
  commentID: undefined,
  // comments:[]
  problemData: [],
  specificProblem: {},
  loader: false
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.GET_ALL_CROP:
      return { ...state, cropData: action.payload }
    case ActionTypes.SPECIFIC_CROP:
      return { ...state, specificCrop: action.payload }
    case ActionTypes.SPECIFIC_PROBLEM:
      return { ...state, specificProblem: action.payload }
    case ActionComment.ADD_COMMENT:
      //  var commentsReplace = state.specificCrop.cropDetail.comments;
      //  comm
      if (action.typeCheck === 'crop') {
        return {
          ...state,
          specificCrop: {
            ...state.specificCrop,
            comments: action.payload
          }
        }
      } else {
        return {
          ...state,
          specificProblem: {
            ...state.specificProblem,
            comments: action.payload
          }
        }
      }
    case ActionComment.SELECT_ID:
      //  var commentsReplace = state.specificCrop.cropDetail.comments;
      //  comm

      return {
        ...state,
        commentID: action.payload
      }
    case ActionComment.UPDATE_COMMENT:
      //  var commentsReplace = state.specificCrop.cropDetail.comments;
      //  comm
      if (action.typeCheck === 'crop') {
        return {
          ...state,
          specificCrop: {
            ...state.specificCrop,
            comments: action.payload
          }
        }
      } else {
        return {
          ...state,
          specificProblem: {
            ...state.specificProblem,
            comments: action.payload
          }
        }
      }
    case ActionComment.DELETE_COMMENT:
      //  var commentsReplace = state.specificCrop.cropDetail.comments;
      //  comm
      if (action.typeCheck === 'crop') {
        return {
          ...state,
          specificCrop: {
            ...state.specificCrop,
            comments: action.payload
          }
        }
      } else {
        return {
          ...state,
          specificProblem: {
            ...state.specificProblem,
            comments: action.payload
          }
        }
      }
    case ActionTypes.GET_ALL_PROBLEM:
      return { ...state, problemData: action.payload }
    case ActionTypes.LOADER_PROCESS:
      return { ...state, loader: true }
    case ActionTypes.LOADER_UN_PROCESS:
      return { ...state, loader: false }
    default:
      return state
  }
}
