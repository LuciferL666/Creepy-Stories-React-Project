import { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom'
import './App.css'

import * as authService from './services/authService'
import AuthContext from './contexts/authContext';
import Path from './paths';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Privacy from './components/Privacy';
import Err from './components/Err';
import Register from './components/register/Register';
import Login from './components/login/Login';
import CreateStory from './components/create/CreateStory';
import Catalog from './components/catalog/Catalog';
import Details from './components/details/Details';
import Home from './components/Home';


function App() {
  const navigate = useNavigate();
  const [auth, setAuth] = useState({});

  const loginSubmitHandler = async (values) => {
   const result = await authService.login(values.email, values.password);
  
   setAuth(result);

   navigate(Path.Home)
  };

  const registerSubmitHandler = async (values) => {
    console.log(values);
  }

  const values = {
    loginSubmitHandler,
    registerSubmitHandler,
    username: auth.username,
    email: auth.email,
    isAuthenticated: !!auth.username,
  }

  return (
    <AuthContext.Provider value={values}>
    <>
    
<Header />
<Routes>  
<Route path={Path.Home} element={ <Home/> }/>
<Route path='/privacy' element={ <Privacy /> }/>
<Route path='/register' element={ <Register /> }/>
<Route path='/login' element={ <Login />}/>
<Route path='/create' element={ <CreateStory />}/>
<Route path='/catalog' element={ <Catalog />}/>
<Route path='/story/:storyId/details' element={ <Details />}/>
</Routes>
<Footer />  

  </>
  </AuthContext.Provider>
  )
}

export default App
