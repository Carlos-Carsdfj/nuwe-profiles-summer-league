/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react'
import { 
  CardMedia,
  Tooltip,
  IconButton,
  makeStyles
} from '@material-ui/core'
import Skeleton from '@material-ui/lab/Skeleton'
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
  },
  skeleto:{
    margin:'auto'

  }  
}))

export default function HeaderImage({ isUid }) {
  const classes = useStyles()
  const [ visible,  setVisible ] = useState(false)
  const [ checking, setChecking ] = useState(true)
  const personalState = useSelector(state => state.personalCard)
  useEffect(() => {
    (personalState && personalState.headerImage)?
      setChecking(false)
      :setChecking(true)
  }, [personalState])
  const toggler = () =>{
    setVisible(prev => !prev)
  }

  return (
    <>{ checking ? <Skeleton variant="rect" width={'90%'} height={'80%'} className={classes.skeleto} animation="wave" />
      :<><CardMedia
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
    }
    </>
  )
}
