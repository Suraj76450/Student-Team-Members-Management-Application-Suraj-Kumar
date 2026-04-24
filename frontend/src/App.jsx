import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Sidebar from "./layout/Sidebar";
import Home from "./pages/Home";
import AddMember from "./pages/AddMember";
import ViewMembers from "./pages/ViewMembers";
import MemberDetails from "./pages/MemberDetails";
import EditMember from "./pages/EditMember";
import "./styles/App.css";
import "./styles/animations.css";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddMember />} />
        <Route path="/members" element={<ViewMembers />} />
        <Route path="/members/:id" element={<MemberDetails />} />
        <Route path="/members/:id/edit" element={<EditMember />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <div className="app-layout">
        <div className="gradient-bg">
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
          <div className="gradient-orb orb-3"></div>
        </div>
        
        <Sidebar />
        
        <div className="main-content">
          <AnimatedRoutes />
        </div>
      </div>
    </Router>
  );
}

export default App;