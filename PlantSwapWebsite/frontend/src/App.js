import Home from "./pages/home/Home";
import { BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom"
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Profile from "./pages/profile/Profile";
import Post from "./pages/post/Post";
import Products from "./components/products/Products"
import { useContext } from "react";
import { AuthContext } from "./state/AuthContext";
import Shopping from "./pages/shopping/Shopping";
import Cart from "./pages/cart/Cart";


function App() {
  const { user } = useContext(AuthContext);

  return (
    <Router>
      <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/login" element={user ? <Navigate to ={`/profile/${user.username}`}/>:<Login />} />
     <Route path="/register" element={user ? <Navigate to ="/" />:<Register />} />
     <Route path="/post" element={user ? <Post />:<Login />} />
     <Route path="/shopping" element={user ? <Shopping />:<Login />} />
     <Route path="/profile/:username" element={user ?<Profile />:<Login />} />
     <Route path="/cart" element={user ?<Cart />:<Login />} />
    </Routes>
    </Router>
    
);
}

export default App;
