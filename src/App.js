import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home.jsx'
import About from './pages/About/About.jsx'
import Login from "./pages/Login/Login.jsx";


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route exact path='/'      element = {<Home  />} />
        <Route exact path='/about' element = {<About />} />
        <Route exact path='/login' element = {<Login />} />
      </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;
