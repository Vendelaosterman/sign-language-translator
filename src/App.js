import './App.css';
import {
  BrowserRouter, 
  Routes,
  Route
} from 'react-router-dom'

import LoginPage from './pages/LoginPage'
import ProfilePage from './pages/ProfilePage'
import TranslatorPage from './pages/TranslatorPage'
import Header from './components/Header/Header';

function App() {

  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={ <LoginPage/>} />
        <Route path="/profile" element={ <ProfilePage/>} />
        <Route path="/translator" element={ <TranslatorPage/>} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
