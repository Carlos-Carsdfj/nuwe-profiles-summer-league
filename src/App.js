import { Switch, Route, useHistory } from 'react-router-dom'
import { Grid, Tabs, Tab } from '@material-ui/core'
import { useState } from 'react'
import PrivateRoutes from 'routes/PrivateRoutes'
import Login from './pages/login'
import Profile from './pages/profile'
import Users from './pages/userList'
import useAuth from 'hooks/useAuth'
import '@fontsource/roboto'

function App() {
  const history = useHistory()
  const {  checking, isLoggedIn, logout, uid} = useAuth()
  const [value, setValue] = useState(0)
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  return (
    <Grid 
      container
      direction="row"
      height="100%" 
      spacing={0}
      justifyContent="center"
      alignItems="flex-start"      
    >{
        checking 
          ? <h2>loading... 🛠 </h2> 
          :(<>
            <Grid
              item
              height='100%'
              xs={2}
            >
              <Tabs
                orientation="vertical"
                variant="scrollable"
                height='100%'
                aria-label="Vertical tabs example"
                value={value}
                onChange={handleChange} 
                indicatorColor="primary"
                textColor="primary" 
              >{
                  isLoggedIn && <Tab onClick={() => logout()} label={'cerrar sesion'} />
                }
                <Tab  onClick={() => history.push('/users')} label={'Usuarios'}/>
                <Tab  onClick={() => history.push(`/profile/${uid}`)} label="perfil" />
              
              </Tabs>
            </Grid>
            <Grid
              container
              item
              height='80%'
              direction="column"
              xs={9}
              justifyContent="center"
              alignItems="center"
              spacing={1}
              
            >
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
            </Grid>
          </>)
      } </Grid > 
  )
}

export default App

