import { TYPES} from './types'
import {
  addPersonalCard,
  addWorkCard,
  getPublicInformation,
  getPersonalCard,
  getUser,
  logout,
  addNewsCards
} from 'firebase/firebaseConfig'
import { removeSkillDuplicate } from 'constSetting'

/*************************** */
/**                          */
/**      authAction         */
/**                          */
/*************************** */

export const userLogin = () => {
  return async (dispatch) => {
    const user = await getUser()
    dispatch({
      type: TYPES.LOGIN,
      payload:user
    })
  }
}

export const userLogout = () => {
  return async (dispatch) => {
    await logout()
    dispatch({
      type: TYPES.LOGOUT
    })
  }
}
/***************** */


/*************************** */
/**                          */
/**  personalCardAction     */
/**                          */
/*************************** */
export const addNewPersonalCard = (personalCard) => {
  return async (dispatch) => {
    const card = await addPersonalCard(personalCard)
    if(card){
      dispatch({
        type: TYPES.ADD_NEW_PERSONAL_CARD,
        payload:personalCard
      })
    }
  }
}
export const addNewInfoPersonal = (personalCard) => {
  return async (dispatch) => {
    const infoUpdate = await addPersonalCard(personalCard)
    if(infoUpdate){
      const card = await getPersonalCard()
      dispatch({
        type: TYPES.ADD_NEW_PERSONAL_CARD,
        payload:card.personalCard
      })
    }
  }
}
export const addNewStack = (stack) => {
  return async (dispatch) => {
    const stackToAdd = removeSkillDuplicate(stack)
    const stackUpdate = await addPersonalCard({stack:stackToAdd})
    if(stackUpdate){
      const card = await getPersonalCard()
      dispatch({
        type: TYPES.ADD_NEW_PERSONAL_CARD,
        payload:card.personalCard
      })

    }
  }
}
/***************** */

/*************************** */
/**                          */
/**  addAllCardsAction       */
/**                          */
/*************************** */
export const addNewAllCards = (uid) => {
  return async (dispatch) => {
    const card = await addNewsCards(uid)
    if(card){
      dispatch(getCards(uid))
    }
  }
}
/***************** */
/*************************** */
/**                          */
/**     workCardAction       */
/**                          */
/*************************** */
export const addNewWorkCard = (workCard) => {
  return async (dispatch) => {
    const card = await addWorkCard(workCard)
    if(card){
      dispatch({
        type: TYPES.ADD_NEW_WORK_CARD,
        payload:workCard
      })
    }
  }
}
/***************** */
/*************************** */
/**                          */
/**  AllPublicInformation     */
/**                          */
/*************************** */
export const getCards = (uid) => {
  return async (dispatch) => {
    const cards = await getPublicInformation(uid)
    if(cards){
      dispatch({
        type: TYPES.ADD_NEW_PERSONAL_CARD,
        payload:cards.personal
      })
      dispatch({
        type: TYPES.ADD_NEW_NUWE_CARD,
        payload:cards.nuwe
      })
      dispatch({
        type: TYPES.ADD_NEW_WORK_CARD,
        payload:cards.work
      })
    }
    else(
      dispatch(addNewAllCards(uid))
      
    )
  }
}
/***************** */
/*************************** */
/**                          */
/**  Get Info Personal Card  */
/**                          */
/*************************** */
export const getInfoPersonlCard = (uid) => {
  return async (dispatch) => {
    const cards = await getPersonalCard()
    if(cards){
      dispatch({
        type: TYPES.ADD_NEW_PERSONAL_CARD,
        payload:cards.personal
      })
    }
    else(
      dispatch(addNewAllCards(uid))
      
    )
  }
}
/***************** */