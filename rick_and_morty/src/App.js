import React from 'react';
import './App.css';
import axios from "axios";
import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from 'react-router-dom';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import LoginForm from './components/LoginForm/LoginForm';

function App() {

   const navigate = useNavigate();
   const [access, setAccess] = useState(false);
   const EMAIL = 'viictoriabarrientos@gmail.com';
   const PASSWORD = 'Barrientos41';

   function login(form) {
      if (form.password === PASSWORD && form.email === EMAIL) {
         setAccess(true);
         navigate('/home');
      }
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   const [characters, setCharacters] = useState([])

   function onSearch(id) {
      const URL_BASE = "https://rickandmortyapi.com/api"
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
         <Nav onSearch={onSearch}/>
         <Routes>
            <Route path="/" element={<LoginForm login={login}/>}>Log In</Route>
            <Route path="/home" element={<Cards characters={characters} onClose={onClose}/>}>Home</Route>
            <Route path="/about" element={<About/>}>About</Route>
            <Route path="/detail/:detailId" element={<Detail characters={characters}/>}>Detail</Route>
         </Routes>
      </div>
   );
}

export default App;
