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
  // state for keeping track of whether user is logged in or not
  const [isLoggedIn, setLoginState] = useState(false);

  // state for sign in popup
  const [popupIsDisplayed, setPopupState] = useState(false);

  // change sign in popup state when the user clicks the sign in button
  // or closes the popup
  const togglePopup = () => 
    setPopupState(!popupIsDisplayed);

  // change login state when the user successfully signs in
  const login = () => 
    setLoginState(true);

  const [token, saveToken] = useState(null);

  const setToken = (token) => {
    // Convert token to string and store in session storage
    let tokenString = JSON.stringify(token);
    sessionStorage.setItem("token", tokenString);
    saveToken(token);
  }

  const logOutUser = () => {
    setLoginState(false);
    sessionStorage.removeItem("token");
  }
  

  return (
    <div className="App">
      {/* Show sign in popup only when sign in button is clicked */}
      {popupIsDisplayed
        ? <SignInPopup 
            closePopup={togglePopup} 
            login={login}
            setToken={setToken}
          />
        : null
      }
      <Navbar 
        isLoggedIn={isLoggedIn} 
        displayPopup={togglePopup} 
        logOut={logOutUser} 
      />
      <Routes>
          <Route path="/" element={<Landing />} />
          {/* <Route path="/home" element={<Home />} /> */}
          <Route path="/create" element={<Create />} />
          <Route path="/userProfile" element={<UserProfile />} />
          <Route path="/searchResults" element={<SearchResults />} />

          <Route path="/signIn" element={<SignInPopup />} />
      </Routes> 
    </div>
  );
}

export default App;
