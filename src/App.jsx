import Navbar from './components/Navbar';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Task from './pages/Task';
import Theme from './components/Theme';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App () {
  return(
    <BrowserRouter>
    <Theme> 
    <div style={{ backgroundColor:  "blur", minHeight: '100vh' }}> 
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Home />} />
        <Route path="/task" element={<Task />} />
      </Routes>
      </div>
    </Theme>
    </BrowserRouter>
  )
}
export default App;