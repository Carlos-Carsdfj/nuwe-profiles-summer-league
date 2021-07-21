import { Switch, Route, useHistory } from 'react-router-dom'
import Login from './pages/login'
import Profile from './pages/profile'
import Users from './pages/userList'
import useAuth from 'hooks/useAuth'
import PrivateRoutes from 'routes/PrivateRoutes'
import './App.css'

function App() {
  const history = useHistory()
  const {  checking, isLoggedIn, logout, userUid} = useAuth()
  
  return (<>{
    checking 
      ? <h2>loading... 🛠 </h2> 
      :(<>
        <header>{
          isLoggedIn && <button onClick={() => logout()} > cerrar sesion </button>
        }
        <button onClick={() => history.push('/users')} >usuarios</button>
        <button onClick={() => history.push(`/profile/${userUid}`)} >mi perfil</button>
        </header>

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
      </>)
  } </> 
  )
}

export default App

