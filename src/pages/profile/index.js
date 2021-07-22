import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import {  getPublicInformation } from 'firebase/firebaseConfig'
import PersonalCard from 'components/PersonalCard'
import './Profile.css'

export default function Profile() {
  const [checking, setChecking ] = useState(true)

 
  const { uid } = useParams()
 

  useEffect(() => {
    getPublicInformation(uid)
      .then( res =>{
        console.log(res)
        setChecking(false)
      })
  }, [])

  return (
    <div className='profile-page'>
      { checking? <h2>Loading ...</h2>
        :<>
          <PersonalCard/>
        </>
      }
     
    </div>
    
      
  )
}
