import ActionTypes from '../constant/companyConstant'

const INITIAL_STATE = {
  fertilizerArray: [],
  machineryArray: [],
  pesticideArray: [],
  allFertilizerData: [],
  allPesticideData: [],
  allMachineryData: [],
  fertilizerProduct: {},
  connectMsg:{},
  upload: false,
  error:{}


  // machineryProduct: {},
  // pesticideProduct: {}
}
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.ADD_FERTILIZER:
      // console.log(action.payload)
      // const arr = [];
      // arr.push(action.payload)
      // console.log(arr)
      // state.fertilizerArray.push(action.payload)
      // console.log(state.fertilizerArray)
      var arrValue = state.fertilizerArray
      console.log(arrValue)
      var arrObj = action.payload
      arrValue.push(arrObj)
      console.log(arrValue)
      // console.log(arrValue)
      return {
        ...state,
        fertilizerArray: arrValue
      }
      break
    case ActionTypes.ADD_MACHINERY:
      var arrValue = state.machineryArray
      console.log(arrValue)
      var arrObj = action.payload
      arrValue.push(arrObj)

      return {
        ...state,
        machineryArray: arrValue
      }
      break
    case ActionTypes.ADD_PESTICIDE:
      var arrValue = state.pesticideArray
      console.log(arrValue)
      console.log(action.payload)
      var arrObj = action.payload
      arrValue.push(arrObj)

      return {
        ...state,
        pesticideArray: arrValue
      }
      break
    case ActionTypes.GET_FERTILIZER:
      return { ...state, fertilizerArray: action.payload }
      break
    case ActionTypes.GET_MACHINERY:
      return { ...state, machineryArray: action.payload }
      break
    case ActionTypes.GET_PESTICIDE:
      return { ...state, pesticideArray: action.payload }
      break
    case ActionTypes.UPDATE_FERTILIZER:
      // console.log(action.payload)
      // var arr = state.fertilizerArray.map((data,ind)=>{
      //   if(data._id === action.payload._id){
      //     // console.log(action.payload)
      //     return action.payload

      //   }
      //   return data

      // })

      // console.log(arr)
      return {
        ...state,
        fertilizerArray: state.fertilizerArray.map((data, ind) => {
          if (data._id === action.payload._id) {
            // console.log(action.payload)
            return action.payload
          }
          return data
        })
      }
      break
    case ActionTypes.UPDATE_MACHINERY:
      return {
        ...state,
        machineryArray: state.machineryArray.map((data, ind) => {
          if (data._id === action.payload._id) {
            return action.payload
          }
          return data
        })
      }
      break
    case ActionTypes.UPDATE_PESTICIDE:
      return {
        ...state,
        pesticideArray: state.pesticideArray.map((data, ind) => {
          if (data._id === action.payload._id) {
            return action.payload
          }
          return data
        })
      }
      break
    case ActionTypes.GET_ALL_FERTILIZER:
      return {
        ...state,
        allFertilizerData: action.payload
      }
      break
    case ActionTypes.GET_ALL_MACHINERY:
      return {
        ...state,
        allMachineryData: action.payload
      }
      break
    case ActionTypes.GET_ALL_PESTICIDE:
      return {
        ...state,
        allPesticideData: action.payload
      }
      break
    case ActionTypes.GET_SPECIFIC_FERTILIZER:
      return {
        ...state,
        fertilizerProduct: action.payload
      }
      break
    case ActionTypes.GET_SPECIFIC_FERTILIZER:
      return {
        ...state,
        fertilizerProduct: action.payload
      }
      break
    case ActionTypes.GET_SPECIFIC_FERTILIZER:
      return {
        ...state,
        fertilizerProduct: action.payload
      }
      break
      case ActionTypes.STORE_FOR_MSG:
        return {
          ...state,
          connectMsg: action.payload
        }
        break
        case ActionTypes.PROCESS_PROGRESS:
        return {
          ...state,
          upload: true
        }
        break 
        case ActionTypes.PROCESS_DONE:
        return{
          ...state,
          upload:false
        }
        break
        case ActionTypes.ERROR_MESSAGE:
          return {
            ...state,
            error: action.payload
          }
          break
          case ActionTypes.ERROR_NULL:
            return {
              ...state,
              error: {}
            }
            break
            case ActionTypes.DELETE_FERTILIZER:
              return {
                ...state,
                fertilizerArray: state.fertilizerArray.filter(itemVal => {
                  return itemVal._id !== action.payload._id
                })
              }
              break
              case ActionTypes.DELETE_MACHINERY:
                return {
                  ...state,
                  machineryArray: state.machineryArray.filter(itemVal => {
                    return itemVal._id !== action.payload._id
                  })
                }
                break
                case ActionTypes.DELETE_PESTICIDE:
                  return {
                    ...state,
                    pesticideArray: state.pesticideArray.filter(itemVal => {
                      return itemVal._id !== action.payload._id
                    })
                  }
    default:
      return state
  }
}
