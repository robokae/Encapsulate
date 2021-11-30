import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar.js';
import Landing from './pages/landing/Landing.js';
import Home from './pages/home/Home.js';
import Create from './pages/create/Create.js';
import UserProfile from './pages/userProfile/UserProfile.js';
import SearchResults from './pages/searchResults/SearchResults.js';

import SignInPopup from './components/signInPopup/SignInPopup.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/userProfile" element={<UserProfile />} />
          <Route path="/searchResults" element={<SearchResults />} />

          <Route path="/signIn" element={<SignInPopup />} />
      </Routes> 
    </div>
  );
}

export default App;
