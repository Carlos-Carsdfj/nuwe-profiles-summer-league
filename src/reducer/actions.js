import { TYPES} from './types'
import { getUser, logout } from 'firebase/firebaseConfig'




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