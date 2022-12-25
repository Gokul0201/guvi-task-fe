import './App.css';
import Profile from './Components/Profile';
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
         <Route path='/home/:id' element={<Profile/>}/>
         <Route path='*' element={<Login/>}/>
       </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
