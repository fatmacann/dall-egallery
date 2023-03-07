import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllPhotos from './pages/AllPhotos/AllPhotos';
import Astronaut from './pages/Astronaut/Astronaut';
import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';
import Menu from './components/menu/Menu';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Header />
      <Menu />
      <Routes>
        <Route exact path="/" element={<AllPhotos />}>
        </Route>

        <Route path="/Astronaut" element={<Astronaut />}>
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
