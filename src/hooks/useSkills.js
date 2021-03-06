import { useEffect, useState } from 'react'
import { removeSkillDuplicate, SKILLS_PACKS } from 'constSetting'



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
        return skill.name
      }))
    }
    
  }, [])

  const searchSkills = (search) =>{
    setTextFilter(search)
  }
  const selectSkill = (skill) =>{
    if( selectedSkills.length < 1 || selectedSkills === null){
      setSelectedSkills([skill])
      return 
    }
    setSelectedSkills(prev =>{
      let temp = removeSkillDuplicate(prev.concat(skill))
      return temp 
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
