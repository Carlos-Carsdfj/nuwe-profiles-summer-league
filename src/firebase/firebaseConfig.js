import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import { dataStructures } from 'constSetting'
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


export const addNewsCards = async (uid) => {
  const user = userAuth.currentUser
  if(uid !== user.uid ){
    return false
  }
 
  const { DATA_STRUCTURES } = dataStructures({
    displayName :user.displayName, 
    photoUrl:user.photoURL,
    emailAddress: user.email 
  })
 
  try {
    
    await db.collection('users')
      .doc(user.uid) 
      .collection('publicInformation')
      .doc('personal')
      .set(DATA_STRUCTURES.docPersonal)
      
    await db.collection('users')
      .doc(user.uid) 
      .collection('publicInformation')
      .doc('work')
      .set(DATA_STRUCTURES.docWorkCard)
  
    await db.collection('users')
      .doc(user.uid) 
      .collection('publicInformation')
      .doc('nuwe')
      .set(DATA_STRUCTURES.docNuweCard)
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
      personal:querySnapshot.docs.find(doc => doc.id === 'personal').data(),
      work:querySnapshot.docs.find(doc => doc.id === 'work').data(),
      nuwe:querySnapshot.docs.find(doc => doc.id === 'nuwe').data()
    } 
    return public_information
  } catch (error) {
    console.log(error)
    return false
  }
}



export const addPersonalCard = async ( personalCard ) => {
  const user = userAuth.currentUser

  const docPersonal ={
    
    ...personalCard
  }
  try {
    await db.collection('users')
      .doc(user.uid) 
      .collection('publicInformation')
      .doc('personal')
      .update(docPersonal)

    return true
  } catch (error) {
    console.log(error)
    return false
  }
}


export const addWorkCard = async ( workCard ) => {
  const user = userAuth.currentUser
  const docWorkCard ={
    ...workCard
  }
  try {
    await db.collection('users')
      .doc(user.uid) 
      .collection('publicInformation')
      .doc('work')
      .update(docWorkCard)
    return true
  } catch (error) {
    console.log(error)
    return false
  }
}

export const  getPersonalCard = async () => {
  try {
    const querySnapshot = await db.collection(`users/${userAuth.currentUser.uid}/publicInformation`).get()
    const public_information ={
      personalCard:querySnapshot.docs.find(doc => doc.id === 'personal').data(),
    } 
    return public_information
  } catch (error) {
    console.log(error)
    return false
  }
}
export const  getWorkCard = async () => {
  try {
    const querySnapshot = await db.collection(`users/${userAuth.currentUser.uid}/publicInformation`).get()
    const public_information ={
      work:querySnapshot.docs.find(doc => doc.id === 'work').data(),
    } 
    return public_information
  } catch (error) {
    console.log(error)
    return false
  }
}
export const  getNuweCard = async () => {
  try {
    const querySnapshot = await db.collection(`users/${userAuth.currentUser.uid}/publicInformation`).get()
    const public_information ={
      nuwe:querySnapshot.docs.find(doc => doc.id === 'nuwe').data()
    } 
    return public_information
  } catch (error) {
    console.log(error)
    return false
  }
}


export const checkUser = (uid) =>{
  const userUid = userAuth.currentUser.uid
  if(userUid === uid ){
    return true
  } 
  return false
}