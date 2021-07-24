/* eslint-disable react/prop-types */
import React from 'react'
import {  useDispatch } from 'react-redux'
import { 
  Divider,
  InputAdornment,
  makeStyles,
  TextField,
  ButtonGroup,
  Button,
  Typography
} from '@material-ui/core'
import AccountCircle from '@material-ui/icons/AccountCircle'
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid'
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail'
import { addNewInfoPersonal } from 'reducer/actions'
import CountryField from './CountryField'

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop:'30px',
    overflow:'auto',
    width: '90%',
    maxWidth: 500,
    maxHeight:'80vh',
    position:'relative',
    textAlign:'center',
    backgroundColor: theme.palette.background.paper,
    borderColor:theme.palette.primary.light,
    border: '1px solid #000',
    borderRadius:'5px',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    
  },
  form: {
    margin: theme.spacing(1),
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      
    },
  },
  modal:{
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    height:'100vh',
    width:'100%',
    position:'fixed',
    padding:0,
    left:0,
    rigth:0,
    top:'0',
    background: 'rgba(0,0,0,.5)',
    zIndex:5,
  },
}))

export default function InfoEditor({ closedComponent, Info }) {

  const  dispatch = useDispatch()
 



  const submit = (ev) => {
    ev.preventDefault()

    const {name,
      phone,
      description,
      email,
      country,
      lookFor
    } = ev.target
      
    const personalInfo = {
      displayName:name.value,
      description: description.value,
      ubication:country.value,
      email: email.value,
      phoneNumber:phone.value,
      lookForAJob:lookFor.value
    }
      
    dispatch(addNewInfoPersonal(personalInfo))
      .then(closedComponent())
  }
      
  const classes = useStyles()
  return (
    <div className={classes.modal}  >
      <div  className={classes.root}>
        <Typography gutterBottom variant="h4" component="h2"  >
        Información Personal
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p"  >
        Recuerda llenar todos los campos si no los cambios no se podran guardar
        </Typography>
        <form className={classes.form} onSubmit={submit} >
          <Divider/>
          <TextField
            fullWidth
            label='Nombre de usuario'
            id="name"
            defaultValue={Info.displayName}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
            required={true}
          />
          
          <TextField
            fullWidth
            label='Numero de telefono'
            id="phone"
            type='tel'
            defaultValue={Info.phoneNumber}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PhoneAndroidIcon />
                </InputAdornment>
              ),
            }}
            required={true}
          />
          
          <TextField
            fullWidth
            label='Correo electrónico'
            id="email"
            type='email'
            defaultValue={Info.email}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AlternateEmailIcon />
                </InputAdornment>
              ),
            }}
            required={true}
          />
          <TextField
            fullWidth
            label='¿Qué tipo de trabajo buscas?'
            id="lookFor"
            defaultValue={Info.lookForAJob}
            InputProps={{
            }}
            required={true}
          />
       

          <TextField
            fullWidth
            id="description"
            label="Cuentanos Algo de ti"
            multiline
            rows={5}
            defaultValue={Info.description}
            variant="outlined"
            required={true}
          />
          <CountryField />
          <Divider/>
          <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
            <Button  type='submit' >Guardar</Button>
            <Button  onClick={() =>closedComponent()}>Cancelar</Button>
          </ButtonGroup>
        </form>
      </div>  
    </div>
  )
}
