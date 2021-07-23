export const SKILLS_NAME ={
  REACT_JS: 'React.js',
  JAVASCRIPT: 'JavaScript',
  VISUAL_STUDIO_CODE: 'Visual Studio Code',
  JAVA: 'Java',
  KOTLIN: 'Kotlin',
  SWIFT: 'Swift',
  PYTHON: 'Python',
  PHP: 'Php',
  RUBY: 'Ruby',
  NODE_JS: 'Node.js'
}

export const SKILLS_PACKS = [
  {
    name: SKILLS_NAME.JAVA,
    imgUrl: 'https://firebasestorage.googleapis.com/v0/b/first-challenge-nuwe.appspot.com/o/skills%2Fjava.svg?alt=media&token=5aff5085-33d4-4122-acb8-c76e11ab8b2d',
    score:0
  },
  {
    name: SKILLS_NAME.JAVASCRIPT,
    imgUrl: 'https://firebasestorage.googleapis.com/v0/b/first-challenge-nuwe.appspot.com/o/skills%2Fjavascript.svg?alt=media&token=82d53172-8009-4aab-b31b-5e2ef1e5bd8e',
    score:0
  },
  {
    name: SKILLS_NAME.REACT_JS,
    imgUrl: 'https://firebasestorage.googleapis.com/v0/b/first-challenge-nuwe.appspot.com/o/skills%2Freact.svg?alt=media&token=96a11877-4135-4782-a0ba-d0a1fc851ba2',
    score:0
  },
  {
    name: SKILLS_NAME.VISUAL_STUDIO_CODE,
    imgUrl: 'https://firebasestorage.googleapis.com/v0/b/first-challenge-nuwe.appspot.com/o/skills%2Fvisual-studio-code.svg?alt=media&token=2b44f6ec-efc8-4852-ba9e-688fa9ade8c7',
    score:0
  },
  {
    name: SKILLS_NAME.KOTLIN,
    imgUrl: 'https://firebasestorage.googleapis.com/v0/b/first-challenge-nuwe.appspot.com/o/skills%2Fkotlin.svg?alt=media&token=d6c590e2-5584-43ff-860b-869dcbd92a11',
    score:0
  },
  {
    name: SKILLS_NAME.PYTHON,
    imgUrl: 'https://firebasestorage.googleapis.com/v0/b/first-challenge-nuwe.appspot.com/o/skills%2Fphp.svg?alt=media&token=fc28323d-0ce0-43b8-9b74-b0cfa6000d8c',
    score:0
  },
  {
    name: SKILLS_NAME.SWIFT,
    imgUrl: 'https://firebasestorage.googleapis.com/v0/b/first-challenge-nuwe.appspot.com/o/skills%2Fswift.svg?alt=media&token=fcd77297-f54f-413e-8ed6-3fe1b43f0d18',
    score:0
  },
  {
    name: SKILLS_NAME.PHP,
    imgUrl: 'https://firebasestorage.googleapis.com/v0/b/first-challenge-nuwe.appspot.com/o/skills%2Fphp.svg?alt=media&token=fc28323d-0ce0-43b8-9b74-b0cfa6000d8c',
    score:0
  },
  {
    name: SKILLS_NAME.RUBY,
    imgUrl: 'https://firebasestorage.googleapis.com/v0/b/first-challenge-nuwe.appspot.com/o/skills%2Fruby.svg?alt=media&token=d21bbd36-a4a4-4ae4-8fdb-2181b9b03eff',
    score:0
  },
  {
    name: SKILLS_NAME.NODE_JS,
    imgUrl: 'https://firebasestorage.googleapis.com/v0/b/first-challenge-nuwe.appspot.com/o/skills%2Fnodejs-icon.svg?alt=media&token=17a3bbb6-867d-41c6-b512-4cf069f200a6',
    score:0
  }
]

export const dataStructures = ({displayName = 'anonimo', photoUrl = '', emailAddress = ''}) =>{
  const DATA_STRUCTURES = {
    docPersonal: {
      displayName:displayName,
      photoURL:photoUrl,
      description:'Esta es una descripcion  que describe algo sin descriptiva aparente en plena distracción solo la verdadera descripcion sera dada al que termina de leer esta indescriptible  descripción sin sentido aparente',
      ubication:'Venezuela',
      headerImage:'',
      email:emailAddress,
      phoneNumber:'+58 555 555 555',
      lookForAJob:'',
      stack:[{}]
    },
    docWorkCard:{
      workinginformation:'',
      placeToWork:'',
      typeOfJob:'',
      DesiredSalary:'',
      availabilityToTravel:false,
      availabilityForRemoteWork:false,
      immediateIncorporation:false
    },
    docNuweCard:{
      challengePoints:'',
      topSkillScore:{},
      softSkills:{
        Adaptability:0,
        ProblemsResolution:0,
        teamwork:0,
        creativeThinking:0
      }
    }
  }
  return { DATA_STRUCTURES }
}


