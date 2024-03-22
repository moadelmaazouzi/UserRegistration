//import logo from './logo.svg';
import Navbar from './layout/Navbar.js';

import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import Homme from './pages/Homme.js';
import AddUser from './users/AddUser.js';
import Aboutus from './pages/aboutus.js';
import EditUser from './users/EditUser.js';

function App() {
  return (
    <div className="App">
      
      <Router basename='/'>
      <Navbar/>


  
        <Routes>
          <Route exact  path='/' element={<Homme/>}></Route>
          <Route exact  path='/adduser' element={<AddUser/>}></Route>
          <Route exact path='/edituser/:id' element={<EditUser/>}></Route>
          <Route exact  path='/aboutus' element={<Aboutus/>}></Route>
        </Routes>
        
      </Router>
      
    </div>
  );
}

export default App;
