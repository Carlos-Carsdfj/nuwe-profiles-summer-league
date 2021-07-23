//import { useState } from 'react'
import { useSelector } from 'react-redux'
//import SkillSelector from 'components/PersonalCard/Stack/SkillSelector'
import { makeStyles } from '@material-ui/core/styles'
import SettingsIcon from '@material-ui/icons/Settings'
import { Chip, Avatar, Typography, Tooltip } from '@material-ui/core'



const useStyles = makeStyles((theme) => ({
  root: {
    display:'flex',
    position:'relative',
    flexWrap:'wrap',
    gap:'5px',
    width:'90%',
    margin:'0',
    justifyContent: 'flex-start',
    alignItems:'center',
    padding: '0 10px',
    minHeight:'50px',
    border:'1px solid ' ,
    borderColor :theme.palette.primary.main,
    borderRadius:'10px',
    backgroundColor: '#eee'
  },
  imageList: {
    flexWrap: 'nowrap',
    gap:'20px',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
    height:'50px'

  },
  text:{
    marginLeft:'10%',
    alignSelf:'flex-start',
  },
  tooltip:{
    position: 'absolute',
    top: theme.spacing(-1),
    right: theme.spacing(-1),
    '&:hover':{
      cursor:'pointer',
    }
  }
}))

export default function Stack() {
 
  
  
  const classes = useStyles()
  //const [ showSelect, setShowSelect ] = useState(false)
  const stackState = useSelector(state => state.personalCard.stack)
  /* const toggleSkillSelect = () => {
    setShowSelect(prev => !prev )
  }*/


  return(<>
    <Typography variant="body2" gutterBottom  component="h4" className={classes.text}>
    Stack indicado por el usuario
    </Typography>
    <div className={classes.root}>
      <Tooltip title="Setting" aria-label="Setting" className={classes.tooltip}>
        <SettingsIcon/>
      </Tooltip>
      {
        stackState && stackState.map(( skill, index ) =>{
          return <Chip key={index} variant="outlined" avatar={<Avatar src={skill.imgUrl}  />}/> 
        }  
        )
      }
    </div>
  </>)


/*
  return (
    <>
      <div className='stack-content' >
        <h4>Stack indicado por el usuario </h4>
        <div className='stack-img-content' >
          {stackState && stackState.map(( skill,index ) => <h4 key={index}>{skill.name}</h4>)}
        </div>
        <button onClick={toggleSkillSelect} className='change-setting' >⚙</button>
      </div> 
      {showSelect && <SkillSelector closedComponent={toggleSkillSelect} skillsPack={stackState}/>}
    </>
  )*/
}
