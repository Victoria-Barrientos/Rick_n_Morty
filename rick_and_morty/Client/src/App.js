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

function login(userData) {
   const { email, password } = userData;
   const URL = 'http://localhost:3001/rickandmorty/login/';
   axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
      const { access } = data;
      setAccess(data);
      access && navigate('/home');
   });
}

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   const [characters, setCharacters] = useState([])

   function onSearch(id) {
      // URL vieja!!
      // const URL_BASE = "https://rickandmortyapi.com/api"
      const URL_BASE =  "http://localhost:3001/rickandmorty"
      // const KEY = "get key"
      
      if(characters.find( (char) => char.id === id )) {
         return alert('Este personaje ya se encuentra en display!')
      }
      // fetch(`${URL_BASE}/character/${id}?key=${KEY}`).then(({ data }) => {
      axios(`${URL_BASE}/character/${id}`)
         .then(({ data }) => {
            if (data.name) {
               setCharacters([...characters, data]);
            } else {
            return alert('¡No hay personajes con este ID!');
            }
         });
   }

   function onClose(id) {
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
