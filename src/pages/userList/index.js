import { useState, useEffect } from 'react'
import { getAlluser } from 'firebase/firebaseConfig'
import { DataGrid } from '@material-ui/data-grid'
import { makeStyles } from '@material-ui/core'
import { useHistory } from 'react-router'
import Skeleton from '@material-ui/lab/Skeleton'
import { TABLA_COLUMNS_STRUCTURE, structuringRows } from 'constSetting'


const useStyles = makeStyles((theme)=>({
  rows: {
    '& .super-app-theme--cell': {
      backgroundColor: theme.palette.primary.main,
      color: '#white',
      fontWeight: '600',
      '&:hover':{
        cursor:'pointer'
      }
    },
    loading:{ 
      display:'flex',
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center'
      
    }
  },
}))

export default function UserList() {
  const classes = useStyles()
  const [ users, setUsers ] = useState(null)
  const [ checking, setChecking ] = useState(true)
  const history = useHistory()
  useEffect(() => {
    setChecking(true)
    getAlluser()
      .then(users=>{
        users && setUsers(users)
        setChecking(false)
      })
  }, [])
  const columns = TABLA_COLUMNS_STRUCTURE
  const rows = structuringRows(users)
  const sendToProfile= (ev) =>{
    const uid = ev.id 
    history.push(`/profile/${uid}`)
  }
  
  return (
    <div >
      { checking?
        <div style={{ height: 400, width: '100%' }} >
          <Skeleton  animation="wave" />
          <Skeleton  animation="wave" />
          <Skeleton  animation="wave" />
          <Skeleton  animation="wave" />
          <Skeleton  animation="wave" />
          <Skeleton  animation="wave" />
        </div>: <><h1>User list</h1>
          {rows && <div style={{ height: 400, width: '100%' }} className={classes.rows}>
            <DataGrid rows={rows}
              columns={columns} 
              pageSize={5} 
              onRowClick={sendToProfile} 
            />
          </div>
          }</>
      }
    </div>
  )
}
