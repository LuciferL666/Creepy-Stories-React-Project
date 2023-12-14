import { Routes, Route } from "react-router-dom";
import "./App.css";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { AuthProvider } from "./contexts/authContext";
import Path from "./paths";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Privacy from "./components/Privacy";
import Err from "./components/Err";
import Register from "./components/register/Register";
import Login from "./components/login/Login";
import CreateStory from "./components/create/CreateStory";
import Catalog from "./components/catalog/Catalog";
import Details from "./components/details/Details";
import Home from "./components/home/Home";
import Logout from "./components/logout/Logout";
import EditStory from "./components/story-edit/EditStory";
import AuthGuard from "./components/guards/AuthGuard";

function App() {
  return (
    <AuthProvider>
      <div id="box">
      <ToastContainer />
        <Header />
        <Routes>
          <Route path={Path.Home} element={<Home />} />
          <Route path="*" element={<Err />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/story/:storyId/details" element={<Details />} />

          <Route element={<AuthGuard />}>
            <Route path="/create" element={<CreateStory />} />
            <Route path={Path.StoryEdit} element={<EditStory />} />
            <Route path={Path.Logout} element={<Logout />} />
          </Route>
        </Routes>
        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;
