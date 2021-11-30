import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Landing from './pages/landing/Landing.js';
import Home from './pages/home/Home.js';
import Create from './pages/create/Create.js';
import UserProfile from './pages/userProfile/UserProfile.js';
import SearchResults from './pages/searchResults/SearchResults.js';

function App() {
  return (
    <div className="App">
      <h1>Encapsulate</h1>

      <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/userProfile" element={<UserProfile />} />
          <Route path="/searchResults" element={<SearchResults />} />
      </Routes> 
    </div>
  );
}

export default App;
