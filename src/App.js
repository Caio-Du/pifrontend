import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Home from './components/Home';
import MovieDetails from './components/MovieDetails';
import Search from './components/Search';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDSsI0GMuhw8O0WpwMTY_HC6gyyQluJI1k",
  authDomain: "back-front-react-7d824.firebaseapp.com",
  projectId: "back-front-react-7d824",
  storageBucket: "back-front-react-7d824.appspot.com",
  messagingSenderId: "214300701327",
  appId: "1:214300701327:web:e655eaf5ea49850d92f6fa"
};

firebase.initializeApp(firebaseConfig);

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <div className="App">
        {isAuthenticated && <Navbar onLogout={handleLogout} />}
        <Routes>
          <Route
            path="/"
            element={
              isAuthenticated ? (
                <Home />
              ) : (
                <Login onLogin={handleLogin} />
              )
            }
          />
          {isAuthenticated && (
            <>
              <Route path="/movie/:id" element={<MovieDetails />} />
              <Route path="/search" element={<Search />} />
            </>
          )}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
