import React from 'react';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import Navbar from './Pages/Navbar';
import './Css/style.css';
import Student_form from './Components/Student_form';

function App() {
  return (
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path='/Home' element={<Home/>}/>
    <Route path='/Student_form' element={<Student_form/>}/>
    <Route path='/Contact' element={<Contact/>}/>
   </Routes>
   </BrowserRouter>
   
  );
}

export default App;
