import React from 'react';
import './App.css';
import axios from "axios";
import { useState, useEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import LoginForm from './components/LoginForm/LoginForm';
import Favorites from './components/Favorites/Favorites';

function App() {

   const location = useLocation();
   const navigate = useNavigate();
   const [access, setAccess] = useState(false);

const login = async (userData) => {
   try {
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
      const { data } = await axios(URL + `?email=${email}&password=${password}`);
      const { access }= data;
      
      // setAccess(data);
      setAccess(access);
      access && navigate('/home')
   } catch(error) {
      console.log(error.message);
   }

}

useEffect(() => {
   !access && navigate('/');
}, [access]);

const [characters, setCharacters] = useState([])

const onSearch = async (id) => {
   try {
      if(characters.some( (char) => char.id === parseInt(id) ) ) {
         return alert('Este personaje ya se encuentra en display!')
      }

      const URL_BASE =  "http://localhost:3001/rickandmorty"
      const { data } = await axios(`${URL_BASE}/character/${id}`);
      
      if (data.name) {
      setCharacters([...characters, data]);
      } 
   } catch(error) {
      return alert('¡No hay personajes con este ID!');
   };
};

const onClose = (id) => {
   setCharacters(
      characters.filter((element) => element.id !== parseInt(id) ))
}

return (
   <div className='App'>
      {
         location.pathname !== "/" && <Nav onSearch={onSearch} setAccess={setAccess} />
      }
      <Routes>
         <Route path="/" element={<LoginForm login={login}/>}>Log In</Route>
         <Route path="/home" element={<Cards characters={characters} onClose={onClose}/>}>Home</Route>
         <Route path="/about" element={<About/>}>About</Route>
         <Route path="/detail/:detailId" element={<Detail characters={characters}/>}>Detail</Route>
         <Route path='/favorites' element={<Favorites/>} ></Route>
      </Routes>
   </div>
);
}

export default App;
