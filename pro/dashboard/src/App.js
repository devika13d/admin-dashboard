import { Routes,Route} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Profile from './components/Profile';
import Form from './components/Form';
import Logine from './components/Logine';
import Setting from './components/Setting';



function App() {
  return (
    <div className="App">  
    <Routes> 
      <Route path='/' element={<Form/>} />
      <Route path='/log' element={<Logine/>} />
      <Route path='/home' element={<Home/>} />
      <Route path='/over' element={<Profile/>} />
      <Route path='/settings' element={<Setting/>} />
    </Routes>
    </div>
  );
}

export default App;
