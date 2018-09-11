import {
  RECEIVE_CATEGORYARR,
  RECEIVE_FINDMOREARR
} from "./mutation-types"

import {
  reqCategoryArr,
  reqFindMoreArr
} from "../api"

export default {
  async getCategoryArr({commit}){
    const result=await reqCategoryArr()
    if(result.code===0){
      commit(RECEIVE_CATEGORYARR,{categoryArr:result.data})
    }
  },
  async getFindMoreArr({commit}){
    const result=await reqFindMoreArr()
    if(result.code===0){
      commit(RECEIVE_FINDMOREARR,{findMoreArr:result.data})
    }
  },
  async getGoods({commit},cb){
    const result=await reqGoods()
    if(result.code===0){
      commit(RECEIVE_GOODS,{goods:result.data})
    }
    // 更新状态之后调用
    cb && cb()
  }
}
