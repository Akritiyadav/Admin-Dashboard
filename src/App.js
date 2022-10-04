import Topbar from "./components/Topbar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import "./App.css";
import {BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/NewUser/NewUser";

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/user" element={<UserList/>}/>
        <Route path="/user/:userId" element={<User/>}/>
        <Route path="/newUser" element={<NewUser/>}/>
        </Routes>

      </div>
      </Router>

  );
}

export default App;
