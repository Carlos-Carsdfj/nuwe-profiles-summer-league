import { useState } from 'react'
import SkillSelector from 'components/SkillSelector'
import './Stack.css'
export default function Stack() {
  const [ showSelect, setShowSelect ] = useState(false)
  const toggleSkillSelect = () => {
    setShowSelect(prev => !prev )
  }

  return (
    <>
      <div className='stack-content' >
        <h4>Stack indicado por el usuario </h4>
        <div className='stack-img-content' >
          <img />
        </div>
        <button onClick={toggleSkillSelect} className='change-setting' >⚙</button>
      </div> 
      {showSelect && <SkillSelector closedComponent={toggleSkillSelect}/>}
    </>
  )
}
