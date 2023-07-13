import './App.css';
import {
  BrowserRouter, 
  Routes,
  Route
} from 'react-router-dom'

import Login from './views/Login'
import Profile from './views/Profile'
import Translator from './views/Translator'

function App() {

  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/" element={ <Login/>} />
        <Route path="/" element={ <Profile/>} />
        <Route path="/" element={ <Translator/>} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
