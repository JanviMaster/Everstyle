import './App.css';
import Navbar from './components/Navbar';
import { NavLink } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/blogs">Blogs</NavLink>
          <NavLink to="/create">Create Blog</NavLink>
        </nav>
      </BrowserRouter>
    </>
  );
}

export default App;

