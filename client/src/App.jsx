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
import Logout from './components/logout/Logout';


function App() {
  const navigate = useNavigate();
  const [auth, setAuth] = useState(() => {
    localStorage.removeItem('accessToken');

    return {};
  });

  const loginSubmitHandler = async (values) => {
   const result = await authService.login(values.email, values.password);
  
   setAuth(result);
   localStorage.setItem('accessToken', result.accessToken);
   navigate(Path.Home)
  };

  const registerSubmitHandler = async (values) => {
    const result = await authService.register(values.email, values.password);

    setAuth(result);
    localStorage.setItem('accessToken', result.accessToken);
    navigate(Path.Home)
  };

  const logoutHandler = () => {
    setAuth({});
    localStorage.removeItem('accessToken')
    
  }

  const values = {
    loginSubmitHandler,
    registerSubmitHandler,
    logoutHandler,
    username: auth.username || auth.email,
    email: auth.email,
    isAuthenticated: !!auth.accessToken,
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
<Route path={Path.Logout} element={ <Logout />} /> 
</Routes>
<Footer />  

  </>
  </AuthContext.Provider>
  )
}

export default App
