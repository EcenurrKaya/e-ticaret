import './App.css';
import {Route,Link,Router, Routes, BrowserRouter} from 'react-router-dom';
import Navbar from './componenets/Navbar';
import Signin from './pages/Auth/Signin';
import Signup from './pages/Auth/Signup';
import Products from './pages/Products';

function App() {
  return (
      <BrowserRouter>
        <div>
        <Navbar/>
        <div id="content">
          <Routes>
            <Route path="/" exact element={<Products />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
          </div>
        </div>
      </BrowserRouter>
    );
}

export default App;
