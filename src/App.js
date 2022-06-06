import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/login';
import Datas from './pages/content';
function App() {
  
  return (
    <div >
    <Router>
    <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route exact path='/Signup' element={<Signup/>}></Route>
        <Route exact path='/Login' element={<Login/>}></Route>
        <Route exact path='/data' element={<Datas/>}></Route>
       
     </Routes>
    </Router>
    </div>
  );
}

export default App;
