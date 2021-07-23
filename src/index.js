import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from '@material-ui/styles'
import { createTheme } from '@material-ui/core/styles'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import store from './reducer/store'
const theme = createTheme({
  
  palette: {
    primary:  {
      main: '#29b6f6',
      light: '#bbdefb'
    },
    secondary: {
      main: '#1976d2',
    },
  }
  
})
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <ThemeProvider theme={theme}>  
          <App />
        </ThemeProvider>  
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
