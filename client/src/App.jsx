import { Routes, Route } from 'react-router-dom'
import './App.css'


import Header from './components/Header';
import Footer from './components/Footer';
import Privacy from './components/Privacy';
import Err from './components/Err';
import Register from './components/Register';
import Login from './components/login/Login';
import CreateStory from './components/create/CreateStory';
import Catalog from './components/catalog/Catalog';


function App() {

  return (
    <>
    
<Header />
<Routes>  
<Route path='/privacy' element={ <Privacy /> }/>
<Route path='/register' element={ <Register /> }/>
<Route path='/login' element={ <Login />}/>
<Route path='/create' element={ <CreateStory />}/>
<Route path='/catalog' element={ <Catalog />}/>
</Routes>
<Footer />  

  </>
  )
}

export default App
