import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from './components/Header';
import { Footer } from './components/Footer';
import { Nav } from './components/Nav';
import {Home,Blog,Project,Contact} from "./components/Main";
import {HashRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <HashRouter>
      <Header></Header>
      <Nav/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/project' element={<Project/>}/>
        </Routes>
      <Footer/>
      </HashRouter>
    </div>
  );
}

export default App;
