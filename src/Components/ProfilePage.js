import React,{useState,useEffect} from 'react'
import {url} from '../App'
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import PersonSharpIcon from '@mui/icons-material/PersonSharp';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const ProfilePage = () => {
  const navigate = useNavigate();
  const[data,setdata]=useState([]);
  
  useEffect(() => {
    getData()
  }, [])

  let getData = async ()=>{
    let token = window.sessionStorage.getItem('token');
    let userId=window.sessionStorage.getItem('id')
    let res = await axios.get(`${url}/${userId}`,{headers: {authorization:`Bearer ${token}`}})
    console.log(res.data)
    if(res.data.statusCode===200)
    {
      setdata(res.data.users)
    }
    else if(res.data.statusCode===401)
    {
      alert(res.data.message)
      
    }
    else
    {
        alert(res.data.message)
    }
  }

  let handleLogout = () => {
    window.sessionStorage.removeItem('token')
    window.sessionStorage.removeItem('id')
    navigate('/')
  }
  const theme = createTheme();
  return (
    <ThemeProvider theme={theme}>
    <Container component="main" maxWidth="xs">
    <CssBaseline />
    <Box
        sx={{
          marginTop:5,
          paddingLeft:90
        }}>
      <Button 
      variant="contained" 
      size="small"
      onClick={()=>handleLogout()}
        >
          Logout
        </Button>
        </Box>
        <Box
        sx={{
          marginTop: 3.5,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
         
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          
          <PersonSharpIcon />
        </Avatar>
        <Typography component="h1" variant="h4">
          Profile
        </Typography>
        <Box
        sx={{
          marginTop: 3.5,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }}   aria-label="simple table">
      <TableBody>
      <TableRow>
      <TableCell>Name</TableCell>
      <TableCell align="right">{data.username}</TableCell>
      </TableRow>
      <TableRow>
      <TableCell>Email</TableCell>
      <TableCell align="right">{data.email}</TableCell>
      </TableRow>
      <TableRow>
      <TableCell>Mobile</TableCell>
      <TableCell align="right">{data.mobile}</TableCell>
      </TableRow>
      <TableRow>
      <TableCell>D.O.B</TableCell>
      <TableCell align="right">{data.DOB}</TableCell>
      </TableRow>
      <TableRow>
      <TableCell>Gender</TableCell>
      <TableCell align="right">{data.gender}</TableCell>
      </TableRow>
      <TableRow>
      <TableCell>Age</TableCell>
      <TableCell align="right">{data.age}</TableCell>
      </TableRow>
        </TableBody>
        </Table>
    </TableContainer>
       </Box>
      <Button 
      variant="contained" 
      size="small"
      onClick={()=>(navigate('/home'))}
         sx={{
          marginTop: 5,
          display: 'flex',
          flexDirection: 'column',
          justifyContent:'end',
         }}>
          Edit
        </Button>
     </Box>
    </Container>
    </ThemeProvider>
   
    

  )
}

export default ProfilePage