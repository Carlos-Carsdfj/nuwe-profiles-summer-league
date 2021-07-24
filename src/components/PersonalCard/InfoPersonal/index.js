/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react'
import {  useSelector } from 'react-redux'
import Skeleton from '@material-ui/lab/Skeleton'
import LocationIcon from '@material-ui/icons/LocationOnOutlined'
import InfoEditor from 'components/PersonalCard/InfoPersonal/InfoEditor'
import SettingsIcon from '@material-ui/icons/Settings'
import {
  CardContent, 
  Typography,
  Box,
  makeStyles,
  Tooltip,
  IconButton
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  
  card_content: {
    textAlign: 'center',
    position:'relative'
  },
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

export default function InfoPersonal({ isUid }) {
  const [ visible,  setVisible ] = useState(false)
  const [ checking, setChecking ] = useState(true)
  const personalState = useSelector(state => state.personalCard)
  const classes = useStyles()

  useEffect(() => {
    setChecking(true)
    personalState && setChecking(false)
  }, [personalState])
  const toggler = () =>{
    setVisible(prev => !prev)
  }
  return (<>{
    checking ? <Skeleton  animation="wave" />
      :
      <CardContent className={classes.card_content} >
        <Typography gutterBottom variant="h5" component="h2">
          {personalState.displayName}
        </Typography>
        <Typography variant="body2" gutterBottom  component="h4">
          {personalState.email} |{personalState.phoneNumber}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {personalState.description}
        </Typography>
        <Box display="flex"
          alignItems="center"
          justifyContent="center"
          flexWrap="nowrap"
        >
          <LocationIcon/>
          <Typography variant="body2" color="textSecondary" component="p">
            {personalState.ubication}
          </Typography>
        </Box>
        <Typography gutterBottom variant="h5" component="h2">
          {personalState.lookForAJob}
        </Typography>
        {visible && <InfoEditor closedComponent={toggler} Info={personalState} />}
        {
          isUid && <Tooltip title="Setting"  className={classes.tooltip}  >
            <IconButton onClick={toggler}>
              <SettingsIcon/>
            </IconButton>
          </Tooltip>
        }
      </CardContent>

  }</>)
}
