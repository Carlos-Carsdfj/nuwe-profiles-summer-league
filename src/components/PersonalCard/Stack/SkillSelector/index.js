/* eslint-disable react/prop-types */
import { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Paper, 
  Chip,
  ButtonGroup, 
  Button, 
  Typography,
  TextField,
  InputAdornment,
  ListItem,
  List

} from '@material-ui/core'

import CreateIcon from '@material-ui/icons/Create'
import {  useDispatch } from 'react-redux'
import useSkills from 'hooks/useSkills'
import { addNewStack } from 'reducer/actions'


const useStyles = makeStyles((theme) => ({

  root: {
    width: '70%',
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
  paper: {
    display: 'flex',
    position:'relative',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: theme.spacing(0.5),
    margin: 0,
    minHeight:'50px',
   
  },
  chip: {
    margin: theme.spacing(0.5),
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
  list: {
    position:'absolute',
    height:'100px',
    background:'white',
    overflow: 'auto',
    zIndex: 5,
    top:'-100px',
    left:'10px',
    right:'10px',
  },
  margin: {
    margin: theme.spacing(1),
  },
}))


export default function SkillSelecter({closedComponent,skillsPack }) {
  const classes = useStyles()
  const {  skills,
    quitSkill, 
    selectedSkills, 
    searchSkills, 
    textFilter,
    selectSkill
  } = useSkills(skillsPack)
  
  const [ visible,  setVisible ] = useState(false)
  const dispatch = useDispatch() 
  const addSkill = (selected) =>{
    selectSkill(selected)
    setVisible(false)
  }
  const Save = (ev) => {
    ev.preventDefault()
    dispatch(addNewStack(selectedSkills))
      .then(closedComponent())
  }


  return (
    <div className={classes.modal}  >
      <div  className={classes.root}>
        <Typography gutterBottom variant="h4" component="h2"  >
        Stack
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p"  >
        Aquí podrás definir tu stack de hard skills con las habilidades que utilizas frecuentemente.
        </Typography>
        <Paper component="ul" className={classes.paper}>
          {visible&&<List className={classes.list} >
            {
              skills.map((skill, index )=>{
                return <ListItem button key={index} onClick={() => addSkill(skill)} >
                  {skill.name}
                </ListItem>
              })
            }
          </List>}
          {
            selectedSkills.map(( skill, index )=>{
              return <li key={index}  >
                <Chip
                  label={skill.name}
                  onDelete={() =>quitSkill(skill)}
                  className={classes.chip}
                />
              </li>})
          }
          <TextField
            className={classes.margin}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <CreateIcon />
                </InputAdornment>
              ),
            }}
            onSelect={() =>{setVisible(true)}}
            onChange={(ev) =>searchSkills(ev.target.value)}
            value={textFilter}
          />
        </Paper>
        <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
          <Button onClick={Save} >Guardar</Button>
          
          <Button onClick={closedComponent} >Cancelar</Button>
        </ButtonGroup>
      </div>
    </div>  
  )
}
