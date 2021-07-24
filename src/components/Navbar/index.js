/* eslint-disable react/prop-types */
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { 
  ListItem,
  ListItemIcon,
  ListItemText,
  List,
  Divider,
  makeStyles,
  Drawer,
  Hidden,
  useTheme,
  Typography
}from '@material-ui/core'
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline'
import AccountBoxOutlinedIcon from '@material-ui/icons/AccountBoxOutlined'
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined'
import OpenInBrowserOutlinedIcon from '@material-ui/icons/OpenInBrowserOutlined'
import logoNuwe from './assets/nuwe_logo.png'

const drawerWidth = 240
const useStyles = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  textAlign:'center',
  drawerPaper: {
    width: drawerWidth,
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
      zIndex:50
    },
    colorTheme:{
      color:'blue',

    },
    imgLogo:{
      maxWidth:'100px',
      height:'auto',
      display:'block'
    }
  },
}))


export default function Navbar({uid , window, isLoggedIn, logout}) {

  const container = window !== undefined ? () => window().document.body : undefined
  const [mobileOpen, setMobileOpen] = useState(false)
  const theme = useTheme()
  const classes = useStyles()
  const history = useHistory()
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }
  const drawer = (
    <div>
      <div className={classes.toolbar} >
        <img src={logoNuwe} style={{width:'100%', maxWidth:'160px', margin:'auto'}} className={classes.imgLogo} />
      </div>
      <Divider />
      <List>
        <ListItem button onClick={() => history.push('/users')} className={classes.colorTheme}  >
          <ListItemIcon><PeopleOutlineIcon  color="primary"  /> </ListItemIcon>
          <ListItemText 
            disableTypography
            primary={<Typography type="body2" style={{ color:theme.palette.primary.main}}>Usuarios</Typography>}
          />
        </ListItem>
        <ListItem button onClick={() => history.push(`/profile/${uid}`)}>
          <ListItemIcon><AccountBoxOutlinedIcon color="primary"   /></ListItemIcon>
          <ListItemText
            disableTypography
            primary={<Typography type="body2" style={{ color:theme.palette.primary.main}}>Mi perfil</Typography>}
          />
        </ListItem>
        {isLoggedIn ? <ListItem button onClick={logout}>
          <ListItemIcon><ExitToAppOutlinedIcon  color="primary"  /></ListItemIcon>
          <ListItemText 
            disableTypography
            primary={<Typography type="body2" style={{ color:theme.palette.primary.main}}>Salir</Typography>}
          />
        </ListItem> :<ListItem button onClick={() => history.push('/login')}>
          <ListItemIcon><OpenInBrowserOutlinedIcon color="primary"  /></ListItemIcon>
          <ListItemText 
            disableTypography
            primary={<Typography type="body2" style={{ color:theme.palette.primary.main}}>Login</Typography>}
          />
        </ListItem> 
        
        }
        
      </List>

    </div>
  )

 
  return (<>

    <nav className={classes.drawer} aria-label="mailbox folders">
      
      <Hidden smUp implementation="css">
        <Drawer
          container={container}
          variant="temporary"
          anchor={theme.direction === 'rtl' ? 'right' : 'left'}
          open={mobileOpen}
          onClose={handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {drawer}
        </Drawer>
      </Hidden>
      <Hidden xsDown implementation="css">
        <Drawer
          classes={{
            paper: classes.drawerPaper,
          }}
          variant="permanent"
          open
        >
          {drawer}
        </Drawer>
      </Hidden>
    </nav>
  </>)           

}