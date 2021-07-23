
import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import  authReducer  from './authReducer'
import  personalCardReducer  from './personalCardReducer'
import  nuweCardReducer  from './nuweCardReducer'
import  workCardReducer  from './wordCardReducer'

const reducers = combineReducers({
  auth: authReducer,
  personalCard:personalCardReducer,
  nuweCard:nuweCardReducer,
  workCard:workCardReducer,
})
const store = createStore(
  reducers,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)

export default store