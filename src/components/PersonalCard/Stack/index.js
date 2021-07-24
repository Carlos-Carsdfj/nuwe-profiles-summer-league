/* eslint-disable react/prop-types */
import { useState } from 'react'
import { useSelector } from 'react-redux'
import SkillSelector from 'components/PersonalCard/Stack/SkillSelector'
import { makeStyles } from '@material-ui/core/styles'
import SettingsIcon from '@material-ui/icons/Settings'
import {  Avatar, Typography, Tooltip, IconButton } from '@material-ui/core'


const useStyles = makeStyles((theme) => ({
  root: {
    display:'flex',
    position:'relative',
    flexWrap:'wrap',
    gap:'20px',
    maxWidth:'90%',
    minWidth:'100px',
    margin:'0',
    justifyContent: 'center',
    alignItems:'center',
    padding: '10px 20px',
    minHeight:'50px',
    border:'1px solid ' ,
    borderColor :theme.palette.primary.main,
    borderRadius:'10px',
    backgroundColor: '#eee'
  },
  imageList: {
    flexWrap: 'nowrap',
    gap:'20px',
    transform: 'translateZ(0)',
    height:'50px'
  },

  tooltip:{
    position: 'absolute',
    top: theme.spacing(-2),
    right: theme.spacing(-2),
    '&:hover':{
      cursor:'pointer',
    }
  },


}))

export default function Stack({ isUid }) {
  const [open, setOpen] = useState(false)
  const classes = useStyles()
  const stackState = useSelector(state => state.personalCard.stack)
  const toggleSkillSelect = () => {
    setOpen(prev => !prev )
  }

  

  return(<>
    <Typography variant="body2" gutterBottom  component="h4" >
    Stack indicado por el usuario
    </Typography>
    <div className={classes.root}>
      { 
        isUid && <Tooltip title="Setting"  className={classes.tooltip}  >
          <IconButton onClick={toggleSkillSelect}>
            <SettingsIcon/>
          </IconButton>
        </Tooltip>
      }
      {
        stackState && stackState.map(( skill, index ) =>{
          return <Avatar key={index} variant="rounded" src={skill.imgUrl} alt={skill.name} />
        }  
        )
      }
    </div>
    {open && <SkillSelector closedComponent={toggleSkillSelect} skillsPack={stackState} />}

  </>)
}
