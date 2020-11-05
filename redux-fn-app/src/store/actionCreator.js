import * as actionTypes from './actionTypes'

export const addArticle = (article)=>{
    const action = {
        type:actionTypes.ADD_ARTICLE,
        article,
    }
    return simulateHttpRequest(action) // pretend its http
}

export const removeArticle = (article)=>{
    const action = {
        type : actionTypes.REMOVE_ARTICLE,
        article
    }
    return simulateHttpRequest(action) // wait a bit
}

export function simulateHttpRequest(action) {
    return (dispatch) => {
      setTimeout(() => {
        dispatch(action)
      }, 800)
    }
  }
