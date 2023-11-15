import { Routes, Route } from 'react-router-dom'
import './App.css'


import Header from './components/Header';
import Footer from './components/Footer';
import Privacy from './components/Privacy';
import Err from './components/Err';
import Register from './components/Register';
import Login from './components/login/Login';


function App() {

  return (
    <>
    
<Header />
<Routes>  
<Route path='/privacy' element={ <Privacy /> }/>
<Route path='/register' element={ <Register /> }/>
<Route path='/login' element={ <Login />}/>
</Routes>
<Footer />  

  </>
  )
}

export default App
