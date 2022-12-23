import './App.css';
import Profile from './Components/Profile';
import Login from './Components/Login';
import Register from './Components/Register';
import { BrowserRouter,Route,Routes} from 'react-router-dom';


function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
         <Route path='/' element={<Login/>}/>
         <Route path='/register' element={<Register/>}/>
         <Route path='/home' element={<Profile/>}/>
         <Route path='*' element={<Login/>}/>
       </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
