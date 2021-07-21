import { TYPES} from './types'



const user = 
{
  displayName:null,
  uid:null,
  photoURL:null
}

export const reducer = ( state = user, action ) => {
  switch (action.type) {
  case TYPES.LOGIN:
    return{
      displayName: action.payload.displayName,
      uid: action.payload.uid,
      photoURL: action.payload.photoURL
    }
  case TYPES.LOGOUT:
    return user
      
    
  case TYPES.MODIFIC:
    return state
  default:
    return state
  }
}

