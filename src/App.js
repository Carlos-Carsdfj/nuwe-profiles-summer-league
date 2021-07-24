import { Switch, Route } from 'react-router-dom'
import {makeStyles } from '@material-ui/core'
//import { useState } from 'react'
import PrivateRoutes from 'routes/PrivateRoutes'
import Login from './pages/login'
import Profile from './pages/profile'
import Users from './pages/userList'
import useAuth from 'hooks/useAuth'
import '@fontsource/roboto'
import Navbar from 'components/Navbar'

const drawerWidth = 240
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },  
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  
})
)

function App() {
  const classes = useStyles()
  const {  checking, isLoggedIn, uid, logout } = useAuth()
  return (
    <div className={classes.root}>
      <div className={classes.toolbar} />
      {
        checking 
          ? <h2>loading... 🛠 </h2> 
          :(<>
            <Navbar uid={uid} 
              isLoggedIn={isLoggedIn} 
              logout={logout}/>
            <main className={classes.content}>
              <Switch>
                <PrivateRoutes path='/users' isLoggedIn={isLoggedIn}>
                  <Users/>
                </PrivateRoutes>
                <PrivateRoutes path='/profile/:uid' isLoggedIn={isLoggedIn}>
                  <Profile/>
                </PrivateRoutes>
                <Route path='/login'>
                  <Login/>
                </Route>
              </Switch>
            </main>  
            
          </>)
      } </div > 
  )
}

export default App

