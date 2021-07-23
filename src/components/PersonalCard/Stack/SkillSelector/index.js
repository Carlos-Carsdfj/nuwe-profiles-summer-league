/* eslint-disable react/prop-types */
import { useState } from 'react'
import {  useDispatch } from 'react-redux'
import useSkills from 'hooks/useSkills'
import { addNewStack } from 'reducer/actions'
import './SkillSelector.css'

export default function SkillSelecter({closedComponent , skillsPack}) {
  const { skills, searchSkills, textFilter, selectedSkills, selectSkill, quitSkill } = useSkills(skillsPack)
  const [ visible,  setVisible ] = useState(false)
  const styleDisplay = visible?  {display:''} : {display:'none'}
  const dispatch = useDispatch() 
  const addSkill = (selected) =>{
    selectSkill(selected)
    setVisible(false)
  }
  const submit = (ev) => {
    ev.preventDefault()
    dispatch(addNewStack(selectedSkills))
      .then(closedComponent())
  }

  return (
    <div className='skill-selector-component' >
      <button className={'close-selector-component-button'} onClick={closedComponent}>x</button>
      <form className='skills-form' onSubmit={submit}>
        <h2>Stack</h2>
        <p>Aquí podrás definir tu stack de hard skills con las habilidades que utilizas frecuentemente.</p>
        <div className='skill-selector-content'>
          <div className='search-display' style={styleDisplay}>
            {
              skills.map(( skill,index ) =>{
                return skill && <span key={index} onClick={() => addSkill(skill)} className='search-display-item'>{skill.name}</span>
              })
            }
          </div>
          <div className='selected-skills'>
            {
              selectedSkills.map(( skill, index )=>{
                return <div key={index}  className='selected-skills-item'>
                  {skill.name}
                  <span onClick={() =>quitSkill(skill) } className='quit-skill-button' >X</span>
                </div>})
            }
            <input value={textFilter} onChange={(ev) => searchSkills(ev.target.value)} className='search-skill-input' onSelect={() =>{setVisible(true)}}  />
          </div>
        </div>
        <button className='save-selector-button'>Guardar</button>
      </form>
    </div>
  )
}
