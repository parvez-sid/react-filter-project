import './App.css';

import Home from './pages/Home';
import Checkout from './pages/Checkout';
import Form from './pages/Form';
import Posts from './pages/Posts';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/post-data' element={<Form />}></Route>
          <Route path='/posts' element={<Posts />}></Route>
          <Route path='/checkout' element={<Checkout />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
