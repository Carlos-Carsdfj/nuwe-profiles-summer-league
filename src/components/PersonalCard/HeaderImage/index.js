/* eslint-disable react/prop-types */
import { useState } from 'react'
import { 
  CardMedia,
  Tooltip,
  IconButton,
  makeStyles
} from '@material-ui/core'
import SettingsIcon from '@material-ui/icons/Settings'
import { useSelector } from 'react-redux'
import ImgEditor from './ImgEditor'


const useStyles = makeStyles((theme) => ({
  tooltip:{
    position: 'absolute',
    top: theme.spacing(-2),
    right: theme.spacing(-2),
    '&:hover':{
      cursor:'pointer',
    } 
  }  
}))

export default function HeaderImage({ isUid }) {
  const classes = useStyles()
  const [ visible,  setVisible ] = useState(false)
  const personalState = useSelector(state => state.personalCard)
  const toggler = () =>{
    setVisible(prev => !prev)
  }

  return (
    <>
      <CardMedia
        component="img"
        alt="A picture about some theme "
        height="140"
        image={personalState.headerImage}
        title="imagen de cabezera"
      />
      { isUid && <Tooltip title="Setting"  className={classes.tooltip}  >
        <IconButton onClick={toggler}>
          <SettingsIcon/>
        </IconButton>
      </Tooltip>
      }
      { visible && <ImgEditor closedComponent={toggler} />}
    </>
  )
}
