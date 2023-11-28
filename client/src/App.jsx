import { Routes, Route } from 'react-router-dom'
import './App.css'


import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Privacy from './components/Privacy';
import Err from './components/Err';
import Register from './components/register/Register';
import Login from './components/login/Login';
import CreateStory from './components/create/CreateStory';
import Catalog from './components/catalog/Catalog';
import Details from './components/details/Details';
import { useState } from 'react';
import AuthContext from './contexts/authContext';


function App() {
  const [auth, setAuth] = useState({});

  const loginSubmitHandler = (values) => {
    console.log(values);
  }

  return (
    <AuthContext.Provider value={{ loginSubmitHandler }}>
    <>
    
<Header />
<Routes>  
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
