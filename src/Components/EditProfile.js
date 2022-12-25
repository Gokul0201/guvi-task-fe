import React,{useState,useEffect} from 'react'
import axios from "axios";
import { useNavigate, Link ,useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
// import EmailIcon from '@mui/icons-material/Email';
import PersonSharpIcon from '@mui/icons-material/PersonSharp';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import {url} from '../App'

const theme = createTheme();

const Profile = () => {
  const navigate = useNavigate();
  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };
  let params=useParams();
  let[gender,setGender]=useState("");
  let[DOB,setDOB]=useState("");
  let[age,setAge]=useState("");
  let[mobile,setMobile]=useState("");
  let [email,setEmail]=useState("");
  let[username,setuserName]=useState("");
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
      setuserName(res.data.users.username)
      setEmail(res.data.users.email)
      setMobile(res.data.users.mobile)
      setDOB(res.data.users.DOB)
      setGender(res.data.users.gender)
      setAge(res.data.users.age)
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

  let handleSubmit=async ()=>{
    let data={
    email,
    username,
    mobile,
    DOB,
    gender,
    age
  }
    
  let token = window.sessionStorage.getItem('token');
  let userId=window.sessionStorage.getItem('id')
  let res = await axios.put(`${url}/edit-user/${userId}`,data,{headers: {authorization:`Bearer ${token}`}})
  //Just to jump to different route
  // if(res.status===200)
    navigate('/profile')
    // else if(res.data.statusCode===401)
    // {
    //   alert(res.data.message)
      
    // }
    // else
    // {
    //   alert(res.data.message)
    // }
}
 
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
      onClick={()=>(navigate('/profile'))}
        >
          Back
        </Button>
        </Box>
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
         
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          
          <PersonSharpIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Profile
        </Typography>
        <Box component="form"  onSubmit={() => handleSubmit()} sx={{ mt: 1 }}>
        <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="Name"
            value={username}
            name="Name"
            autoComplete="Name"
            onChange={(e=>setuserName(e.target.value))} 
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            value={email}
            name="email"
            autoComplete="email"
            onChange={(e=>setEmail(e.target.value))}
          
            
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="Mobile"
            label="Mobile"
            value={mobile}
            type="Mobile"
            id="Mobile"
            onChange={(e=>setMobile(e.target.value))}
            autoComplete="current-password"
           
          />
            <TextField
            margin="normal"
            required
            fullWidth
            name="DOB"
            value={DOB}
            label="DOB"
            type="DOB"
            id="DOB"
            onChange={(e=>setDOB(e.target.value))}
            // autoComplete="current-password"
           
          />
            <TextField
            margin="normal"
            required
            fullWidth
            name="Gender"
            label="Gender"
            type="Gender"
            value={gender}
            id="Gender"
            onChange={(e=>setGender(e.target.value))}
            autoComplete="current-password"
           
          />

       <TextField
            margin="normal"
            required
            fullWidth
            name="Age"
            label="Age"
            value={age}
            type="Age"
            id="Age"
            onChange={(e=>setAge(e.target.value))}
            autoComplete="current-password"
           
          />
          {/* <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          /> */}
          <Button
            type="submit"
            fullWidth
            onClick={() => handleSubmit()}
            // onSubmit={() =>handleSubmit()}
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Update
          </Button>
          <Grid container>
            <Grid item xs>
              {/* <Link href="#" variant="body2">
                Forgot password?
              </Link> */}
            </Grid>
            <Grid item>
              {/* <Link to="/signup">
                {"Don't have an account? Sign Up"}
              </Link> */}
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
    <ToastContainer />
  </ThemeProvider>
  )
}

export default Profile