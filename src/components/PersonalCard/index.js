/* eslint-disable react/prop-types */
import React from 'react'
import {
  Card, 
  CardActions,
  Avatar,
  Paper, 
  makeStyles,
} from '@material-ui/core'
import { useSelector } from 'react-redux'
import Stack from 'components/PersonalCard/Stack'
import HeaderImage from 'components/PersonalCard/HeaderImage'
import InfoPersonal from 'components/PersonalCard/InfoPersonal'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    position:'relative',
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
export default function PersonalCard({ isUid }) {
  const personalState = useSelector(state => state.personalCard)
  const classes = useStyles()
  return (
    <Paper elevation={3} m={16}
      className={classes.root}
    >
      <Card
      >
        <HeaderImage isUid={isUid} />
        <Avatar alt="Cindy Baker" src={personalState.photoURL}  className={classes.avatar}/>
        <InfoPersonal isUid={isUid} />
        <CardActions className={classes.card_action}>
          <Stack isUid={isUid} />
        </CardActions>
      </Card>
    </Paper>
  )
}
