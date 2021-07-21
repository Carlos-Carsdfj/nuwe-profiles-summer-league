import {  getPublicInformation } from 'firebase/firebaseConfig'
import { useParams } from 'react-router'
import React from 'react'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

export default function Profile() {
  const [checking, setChecking ] = useState(true)
  const { uid } = useParams()
  const state = useSelector(state => state)

  useEffect(() => {
    getPublicInformation(uid)
      .then( res =>{
        console.log(res)
        setChecking(false)
      })
    
  }, [])

  const handler = () =>{
    //addUser().then(resp => console.log('was the data created:',resp))
  }
  
  return (
    <div>
      { checking? <h2>Loading ...</h2>
        :<>
          <h1>profile</h1>
          <h2>nombre: {state.displayName}</h2>
          <h2>usuario: {state.uid}</h2>
          <img src={state.photoURL} />
          <button onClick={handler}>Actualizar</button>
        </>
      }
    </div>
    
      
  )
}
