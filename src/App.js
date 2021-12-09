import { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { UserContext } from './UserContext.js';
import Navbar from './components/Navbar.js';
import Landing from './pages/landing/Landing.js';
import Home from './pages/home/Home.js';
import Create from './pages/create/Create.js';
import UserProfile from './pages/userProfile/UserProfile.js';
import SearchResults from './pages/searchResults/SearchResults.js';
import SignInPopup from './components/signInPopup/SignInPopup.js';
import Post from './components/Post/Post.js';
import Topics from './pages/topics/Topics.js';
import './App.css';

function App() {
  const navigate = useNavigate();
  const [signedInUser, setSignedInUser] = useState(null);

  // state for keeping track of whether user is logged in or not
  const [isLoggedIn, setLoginState] = useState(false);

  // state for sign in popup
  const [popupIsDisplayed, setPopupState] = useState(false);

  // change sign in popup state when the user clicks the sign in button
  // or closes the popup
  const togglePopup = () => 
    setPopupState(!popupIsDisplayed);

  // change login state when the user successfully signs in
  const login = (username) => {
    setSignedInUser(username);
    setLoginState(true);
  }

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
    navigate("/");
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
      <UserContext.Provider value={signedInUser}>
        <Routes>
            <Route path="/" element={<Landing signedInUser={signedInUser} />} />
            {/* <Route path="/home" element={<Home />} /> */}
            <Route path="/create" element={<Create />} />
            <Route path="/userProfile" element={<UserProfile />} />
            <Route path="/searchResults" element={<SearchResults />} />

            <Route path="/topics" element={<Topics />} />
        </Routes> 
      </UserContext.Provider>
    </div>
  );
}

export default App;
