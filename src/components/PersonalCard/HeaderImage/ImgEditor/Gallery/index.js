/* eslint-disable react/prop-types */

import { makeStyles } from '@material-ui/core/styles'
import { useDispatch } from 'react-redux'
import ImageList from '@material-ui/core/ImageList'
import ImageListItem from '@material-ui/core/ImageListItem'
import ImageListItemBar from '@material-ui/core/ImageListItemBar'
import { addNewInfoPersonal } from 'reducer/actions'


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  imageList: {
    width: 500,
    height: 450,
    // Promote the list into its own layer in Chrome. This cost memory, but helps keep FPS high.
    transform: 'translateZ(0)',
  },
  titleBar: {
    background:
      'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
      'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  icon: {
    color: 'white',
  },
  imgItem:{
    '&:hover':{
      cursor:'pointer',
    } 
  }
}))


export default function Galley({images = [{}],closedComponent} ) {
  const dispatch = useDispatch()
  const classes = useStyles()
  const add = (url) =>{
    const personalInfo = {
      headerImage:url
    }
    dispatch(addNewInfoPersonal(personalInfo))
      .then(closedComponent())
  }
  return (
    <div className={classes.root}>
      <ImageList rowHeight={200} gap={1} className={classes.imageList}>
        {images && images.map((item) => (
          <ImageListItem key={item.id} cols={1} rows={1} onClick={()=>add(item.url)}
            className={classes.imgItem}
          >
            <img src={item.url} alt={item.alt} />
            <ImageListItemBar
              title={item.alt}
              position="top"
              actionPosition="left"
              className={classes.titleBar}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  )
}
