/* eslint-disable react/prop-types */
import { useState } from 'react'
import useSkills from 'hooks/useSkills'
import './SkillSelector.css'

export default function SkillSelecter({closedComponent}) {
  const { skills, searchSkills, textFilter, selectedSkills, selectSkill, quitSkill } = useSkills()
  const [ visible,  setVisible ] = useState(false)
  const styleDisplay = visible?  {display:''} : {display:'none'}
  
  const addSkill = (selected) =>{
    selectSkill(selected)
    setVisible(false)
  }
  const submit = (ev) => {
    ev.preventDefault()
    //mandar al servidor
    //guardar en el redux
    //cerrar ventana
    closedComponent()
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
                return <span key={index} >
                  {skill.name}
                  <button onClick={() =>quitSkill(skill) } className='quit-skill-button' >X</button>
                </span>})
            }
            <input value={textFilter} onChange={(ev) => searchSkills(ev.target.value)} className='search-skill-input' onSelect={() =>{setVisible(true)}}  />
          </div>
        </div>
        <button className='save-selector-button'>Guardar</button>
      </form>
    </div>
  )
}
