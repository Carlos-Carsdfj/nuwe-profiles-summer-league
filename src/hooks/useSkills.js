import { useEffect } from 'react'
import { SKILLS_PACKS } from 'constSetting'
import { useState } from 'react'


const useSkills = ( initialSkill = []) => {
  const [ skills, setSkills ] = useState([])
  const [ textFilter, setTextFilter ] = useState('')
  const [ selectedSkills, setSelectedSkills ] = useState(initialSkill)

  useEffect(() => {
    const tempFilter = SKILLS_PACKS.filter(skill => skill.name.
      toLowerCase().
      includes(textFilter.toLowerCase()))
    const foundSkills = (textFilter.length > 0) 
      ? tempFilter
      : SKILLS_PACKS
    setSkills(foundSkills)
  }, [textFilter])

  useEffect(() => {
    if(!(initialSkill[0] && initialSkill[0].name) ){
      setSelectedSkills(initialSkill.filter(skill =>{
        skill.name
      }))
    }
  }, [])

  const searchSkills = (search) =>{
    setTextFilter(search)
  }
  const selectSkill = (skill) =>{
    if( selectedSkills.length < 1 | selectedSkills === null){
      setSelectedSkills([skill])
      return 
    }
    setSelectedSkills(prev =>{
      let temp = prev.concat(skill)
      return temp.filter( (toFilter, index) =>{
        return temp.indexOf(toFilter) === index && toFilter.name
      }) 
    })
  } 
  const quitSkill = (skillToQuit) => {
    setSelectedSkills(prev =>{
      return prev.filter( (toFilter) =>{
        return toFilter.name !== skillToQuit.name
      }) 
    })
  }
  return {
    SKILLS_PACKS,
    skills,
    setTextFilter,
    textFilter,
    searchSkills,
    selectedSkills,
    selectSkill,
    quitSkill
  }
}




export default useSkills