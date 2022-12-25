import './App.css';
import Profile from './Components/EditProfile';
import ProfilePage from './Components/ProfilePage';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import { BrowserRouter,Route,Routes} from 'react-router-dom';
export const url="https://guvi-task-be.vercel.app";

function App() {
  return (
    <div className='App' >
      <BrowserRouter>
        <Routes>
         <Route path='/' element={<Login/>}/>
         <Route path='/register' element={<Register/>}/>
         <Route path='/home' element={<Profile/>}/>
         <Route path='/profile' element={<ProfilePage/>}/>
         <Route path='*' element={<Login/>}/>
       </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
