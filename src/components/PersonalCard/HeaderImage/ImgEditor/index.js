/* eslint-disable react/prop-types */
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
import  Galley from './Gallery'
import useImageSearch from 'hooks/useImageSearch'

const useStyles = makeStyles((theme) => ({
  root: {
    overflow:'auto',
    width: '80%',
    height:'90vh',
    maxWidth: 500,
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
    zIndex:100,
  },
}))

export default function ImgEditor({ closedComponent }) {
  const { 
    query,
    searchImg,
    setQuery,
    images
  } = useImageSearch()
 
  const submit = (ev) =>{
    ev.preventDefault()
    searchImg()
  }
  const closedModal = () =>{
    closedComponent()
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
        <Divider/>

        <form onSubmit={submit}>
          <TextField
            value={query}
            onChange={({target})=>setQuery(target.value)}
            fullWidth
            label='Nombre de usuario'
            id="name"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
            
          />
          <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
            <Button type='submit'>Buscar</Button>
            <Button onClick={() => closedComponent()} >Cancelar</Button>
          </ButtonGroup>
        </form>  
        <Divider/>
        <Galley images={images} closedComponent={closedModal}/>
      
      </div>  
    </div>
  )
}