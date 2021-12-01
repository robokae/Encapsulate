import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar.js';
import Landing from './pages/landing/Landing.js';
import Home from './pages/home/Home.js';
import Create from './pages/create/Create.js';
import UserProfile from './pages/userProfile/UserProfile.js';
import SearchResults from './pages/searchResults/SearchResults.js';

import SignInPopup from './components/signInPopup/SignInPopup.js';

// const displaySignInPopup = () => {
//   console.log("Sign in");
// }

function App() {
  const [isLoggedIn, setLoginState] = useState(false);
  const [popupIsDisplayed, setPopupState] = useState(false);

  const togglePopup = () => 
    setPopupState(!popupIsDisplayed);

  const login = () => 
    setLoginState(true);

  return (
    <div className="App">
      {popupIsDisplayed
        ? <SignInPopup closePopup={togglePopup} login={login}/>
        : null
      }
      <Navbar isLoggedIn={isLoggedIn} displayPopup={togglePopup} />
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
