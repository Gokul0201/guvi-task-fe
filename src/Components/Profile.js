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
import EmailIcon from '@mui/icons-material/Email';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

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
 
//   useEffect(() => {
//     getData()
//   }, [])

//   let getData = async ()=>{
    
//     let res = await axios.get(`http://localhost:8000/edit-user/${params.id}`)
//     console.log(res.data)
//     if(res.data.statusCode===200)
//     {
//       setgender(res.data.users.name)
//       setEmail(res.data.users.email)
//       setMobile(res.data.users.mobile)
//       setGstin(res.data.users.gstin)
//       setAddress(res.data.users.address)
//     }
//     else if(res.data.statusCode===401)
//     {
//       alert(res.data.message)
//       navigate('/login')
//     }
//     else
//     {
//         alert(res.data.message)
//     }
//   }

//   let handleSubmit=async ()=>{
//     let data={
//     name,
//     email,
//     mobile,
//     gstin,
//     address
//   }
    
//   let token = window.sessionStorage.getItem('token');
//   let res = await axios.put(`http://local-host/edit-customers/${params.id}`,data)
//   //Just to jump to different route
//   if(res.status===200)
//     navigate('/customers')
//     else if(res.data.statusCode===401)
//     {
//       alert(res.data.message)
//       navigate('/login')
//     }
//     else
//     {
//       alert(res.data.message)
//     }
// }
 
  return (
    <div>Profile</div>
  )
}

export default Profile