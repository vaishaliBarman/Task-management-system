
import { useContext } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from './Theme';
import { FaSun, FaMoon } from 'react-icons/fa'; // Icons
import '../styles/Navbar.css';

const AppNavbar = () => {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useContext(ThemeContext);

  const handleLogout = () => {
    localStorage.removeItem("user"); // Clear user data
    alert("You have been logged out.");
    navigate("/login"); // Redirect to login page
  };

  return (
    <>
      <div className="navbar-wrapper">
        <div className="navbar-gradient">
          <Container className="d-flex justify-content-between align-items-center py-2">
            <Navbar.Brand className="text-white fw-bold"
              style={{
                fontFamily: "cursive",
                fontWeight: "bold",
                fontSize: "2.5rem",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
               
              }}
            >
              TSM
            </Navbar.Brand>

            <Nav>
            <Nav.Link href="/" className="text-white">Home</Nav.Link>
              <Nav.Link href="/login" className="text-white">Login</Nav.Link>
              
              <Nav.Link onClick={handleLogout} className="text-white" style={{ cursor: "pointer" }}>
                Logout
              </Nav.Link>
              <Nav.Link onClick={toggleTheme} className="text-white ms-3" style={{ cursor: "pointer", fontSize: '1.5rem' }}>
              {theme === 'light' ? <FaMoon /> : <FaSun />}
            </Nav.Link>
            </Nav>
          </Container>

          <div className="wave-svg">
            <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
            <path fill="currentColor" d="M0,50 C360,150 1080,-50 1440,50 L1440,100 L0,100 Z" />

            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppNavbar;
