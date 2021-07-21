import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { userLogin, userLogout } from 'reducer/actions'
import { useHistory } from 'react-router-dom'
import  { userAuth } from 'firebase/firebaseConfig'



const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn ] = useState(false)
  const [checking, setChecking ] = useState(true)
  const history = useHistory()
  const dispatch = useDispatch()

  useEffect(() => {
    const unregisterAuthObserver = userAuth.onAuthStateChanged(user => {
      setIsLoggedIn(!!user)
      !user && history.push('/login') 
    })
    return () => unregisterAuthObserver()
  }, [])
    
  useEffect(() => {
    isLoggedIn && dispatch(userLogin()) 
    setChecking(false)
  }, [isLoggedIn])

  const logout = () => {
    dispatch(userLogout())
  }

  return {
    checking,
    isLoggedIn,
    logout,
    userUid:userAuth.currentUser.uid|0
  }
}

export default useAuth