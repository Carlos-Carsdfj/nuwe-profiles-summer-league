import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { useDispatch } from 'react-redux'
import { getCards, } from 'reducer/actions'
import { checkUser } from 'firebase/firebaseConfig'
import PersonalCard from 'components/PersonalCard'
import './Profile.css'

export default function Profile() {
  const [checking, setChecking ] = useState(true)
  const dispatch = useDispatch()
  const { uid } = useParams()

  const isUid = checkUser(uid)

  useEffect(() => {
    setChecking(true)
    dispatch(getCards(uid))
      .then(
        setChecking(false)
      )
  }, [isUid])

  return (
    <div className='profile-page'>
      { checking? <h2>Loading ...</h2>
        :<>
          <PersonalCard isUid={isUid}/>
        </>
      }
     
    </div>
    
      
  )
}
