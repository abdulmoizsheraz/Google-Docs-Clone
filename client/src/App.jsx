import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css'
import Navbar from './Componets/Navbar'
import HomePage from "./Componets/HomePage";
import Footer from './Componets/Footer'
import Dashboard from "./pages/Dashboard";
import Workspace from "./pages/Workspace";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/workspace" element={<Workspace />} />
          <Route exact path="/workspace/document/:id" element={<Workspace update={true} />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
