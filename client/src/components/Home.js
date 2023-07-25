import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


function Home() {
  const [isSeller, setIsSeller] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegistration, setShowRegistration] = useState(false); // Add new state variable
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [jwtToken, setJwtToken] = useState('');


  const handleLoginClick = () => {
    setShowLogin(true);
  };

  const handleCloseLoginForm = () => {
    setShowLogin(false);
  };

  const handleRegistrationClick = () => {
    setShowRegistration(true);
  };

  const handleCloseRegistrationForm = () => {
    setShowRegistration(false);
  };

  const handleRegistrationSuccess = () => {
    setShowRegistration(false);
    setShowLogin(true); // Show the login form after successful registration
  };

  const handleLoginSuccess = (token) => {
    setShowLogin(false);
    setIsLoggedIn(true);
    setJwtToken(token);
  };
  return (
    <div className="landing-page">
      {/* navigation */}
      <nav>
        <div className="navigation">
          <h3>Welcome to ArtHub</h3>

          {isSeller ? (
           <div>
           {isLoggedIn ? (
             <div>
               <button className="logout-button" onClick={() => setIsLoggedIn(false)}>
                 Logout
               </button>
             </div>
           ) : (
             <div>
              <Link to="login">
               <button className="login-button" onClick={handleLoginClick}>
                 Login
               </button>
               </Link>
               <Link to="signup">
                  <button className="signup-button"onClick={handleLoginClick}>
                 SignUp
               </button>
                </Link>
             </div>
           )}
         </div>
          ) : (
            <button className="seller-button" onClick={() => setIsSeller(true)}>
              Are you a seller?
            </button>
          )}
        </div>

      </nav>
      {/* Body Section */}
      <section className="body-section">
        <div className='backgroundpic'><p>Discover a world of captivating art pieces</p></div>
        <section className='about-browse-section'>
          <div className="browse-content">
            <h2>Browse Artwork</h2>
            <p>
              Explore our diverse collection of paintings, ranging from abstracts to landscapes, and
              find the piece that speaks to your soul.
            </p>
            <button className="browse-button">Browse Now</button>
          </div>
          <div className="about-content">
            <h2>About ArtHub</h2>
            <p>
              Welcome to our online art marketplace! Discover a wide range of stunning paintings
              created by talented artists from around the world. Browse our collection and find the
              perfect artwork to enrich your living space.
            </p>
          </div>
        </section>
      </section>
      {/* Footer Section */}
      <footer className="footer">
        <div className="container">
          <p>Need Help ? Contact US :78009088776 || Email us :ALarthub@gmail.com</p>
          <p>&copy; {new Date().getFullYear()} AL@ArtHub All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;