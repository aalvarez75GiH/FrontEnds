import NavBar from "./components/navBar"
import Home from "./pages/home"
import Post from "./pages/post"
import Login from "./pages/login"
import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"


const App = () => {
  const user = true
  return (
    <BrowserRouter>
    <div>
      <NavBar user={user}/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={user ? <Navigate to="/"/> : <Login/>}/>
        <Route path="/post/:id" element={user ? <Post/> : <Navigate to="/login"/>}/>
      </Routes>
    </div>
    
    </BrowserRouter>
  )
}

export default App;
