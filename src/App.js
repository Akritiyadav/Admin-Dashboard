import Topbar from "./components/Topbar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import "./App.css";

function App() {
  return (
  <div>
    <Topbar/>
    <div className="container">
    <Sidebar/>
    <Home/>
    </div>
  </div>
  
  );
}

export default App;
