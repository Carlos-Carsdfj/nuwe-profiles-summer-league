import React, { useEffect } from 'react'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import { userAuth } from 'firebase/firebaseConfig'
import { useHistory } from 'react-router'
import firebase from 'firebase'

const firebaseAuthConfig = {
  
  signInFlow: 'popup',
  signInOptions: [
    {
      provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
      requireDisplayName: false,
    },
    {
      provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      requireDisplayName: false,
    },
  ],
  //signInSuccessUrl: '/profile',
  credentialHelper: 'none',
  callbacks: {
    signInSuccessWithAuthResult: () => false,
  },
}


export default function Login() {
  
  const history = useHistory()
  useEffect(() => {
    const unregisterAuthObserver = userAuth.onAuthStateChanged(user => {
     
      user && history.push(`/profile/${user.uid}`)
    })
    return () => unregisterAuthObserver()
  }, [history])


  return (
    <div>
     
      <StyledFirebaseAuth
        uiConfig={firebaseAuthConfig}
        firebaseAuth={userAuth}
      />
    
    </div>
  )
}
