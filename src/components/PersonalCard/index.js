import React from 'react'
import {
  Card, 
  CardActions,
  CardMedia, 
  CardContent, 
  Typography,
  Avatar,
  Paper, 
  makeStyles,
  Box
} from '@material-ui/core'
import LocationIcon from '@material-ui/icons/LocationOnOutlined'
import { useSelector } from 'react-redux'
import Stack from 'components/PersonalCard/Stack'
import image from './logo512.png'
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    margin:theme.spacing(1),
   
  },
  avatar: {
    width: 100,
    height: 100,
    border: '2px solid #fff',
    margin: '-60px auto auto auto',
    '& > img': {
      margin: 0,
    }
  },    
  card_content: {
    textAlign: 'center'
  },
  card_action:{
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
  }    
}))
export default function PersonalCard() {
  const personalState = useSelector(state => state.personalCard)
  const classes = useStyles()
  return (
    <Paper elevation={3} m={16}
      className={classes.root}
    >
      <Card
      >
        <CardMedia
          component="img"
          alt="A picture about some theme "
          height="140"
          image={image}
          title="imagen de cabezera"
        />
        <Avatar alt="Cindy Baker" src={personalState.photoURL}  className={classes.avatar}/>
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
        </CardContent>
        <CardActions className={classes.card_action}>
          <Stack/>
        </CardActions>
      </Card>
    </Paper>
  )
}
