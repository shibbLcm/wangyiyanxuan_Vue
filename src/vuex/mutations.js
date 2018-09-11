import {
  RECEIVE_CATEGORYARR,
  RECEIVE_FINDMOREARR
} from "./mutation-types"

export default {
  [RECEIVE_CATEGORYARR](state,{categoryArr}){
    state.categoryArr=categoryArr
  },
  [RECEIVE_FINDMOREARR](state,{findMoreArr}){
    state.findMoreArr=findMoreArr
  }
}
