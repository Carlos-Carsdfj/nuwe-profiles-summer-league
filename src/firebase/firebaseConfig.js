import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDHhaYjeD8SSPAbGSqy0k8bofBVc_J_gRw',
  authDomain: 'first-challenge-nuwe.firebaseapp.com',
  projectId: 'first-challenge-nuwe',
  storageBucket: 'first-challenge-nuwe.appspot.com',
  messagingSenderId: '479306566928',
  appId: '1:479306566928:web:e291092f0bf6c2e7e56995'
}



if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}else {
  firebase.app()
}

export const db = firebase.firestore()
export const userAuth = firebase.auth()


export const  getData = async () =>{
  const querySnapshot = await db.collection('users').get()
  let user  = {}  
  querySnapshot.forEach((doc) => {
    user ={
      name: doc.data().name, 
      user: doc.data().user,
      personalInfo: doc.data().personalInfo
    }
  })
  return user
}

export const getUser = async () => {
  const user = userAuth.currentUser
  return {
    displayName:user.displayName,
    uid:user.uid,
    photoURL:user.photoURL
  }
}

export const logout = () => {
  userAuth.signOut()
}


export const addUser = async () => {
  const user = userAuth.currentUser

  const docPersonal ={
    displayName:user.displayName,
    photoURL:user.photoURL,
    description:'',
    ubicación:'',
    headerImage:'',
    stack:[]
  }
  const docWorkCard ={
    workinginformation:'',
    placeToWork:'',
    typeOfJob:'',
    DesiredSalary:'',
    availabilityToTravel:false,
    availabilityForRemoteWork:'',
    immediateIncorporation:''
  }
  const docNuweCard ={
    challengePoints:'',
    topSkillScore:{
      javascript:1000,
      reactjs:1000,
      nextjs:1000,
      nodejs:1000,
      python:1000,
    },
    softSkills:{
      Adaptability:0,
      ProblemsResolution:0,
      teamwork:0,
      creativeThinking:0
    }

  }

  try {
    await db.collection('users')
      .doc(user.uid) 
      .collection('publicInformation')
      .doc('user')
      .set(docPersonal)
      
    await db.collection('users')
      .doc(user.uid) 
      .collection('publicInformation')
      .doc('work')
      .set(docWorkCard)
  
    await db.collection('users')
      .doc(user.uid) 
      .collection('publicInformation')
      .doc('nuwe')
      .set(docNuweCard)
    return true
  } catch (error) {
    console.log(error)
    return false
  }

}


export const  getPublicInformation = async (uid) => {

  try {
    const querySnapshot = await db.collection(`users/${uid}/publicInformation`).get()
 
    const public_information ={
      user:querySnapshot.docs.find(doc => doc.id === 'user').data(),
      work:querySnapshot.docs.find(doc => doc.id === 'work').data(),
      nuwe:querySnapshot.docs.find(doc => doc.id === 'nuwe').data()
    } 
    return public_information
  } catch (error) {
    console.log(error)
  }
     
  


}