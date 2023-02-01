import { BrowserRouter, Route, Routes } from "react-router-dom";
import PlayerLogin from "./pages/player/Login"
import PlayerSignUp from './pages/player/Signup';
import Home from "./pages/player/PlayerHome";
import PlayerChat from "./pages/player/Chat";
import PlayerScout from "./pages/player/PlayerScout";
import ScoutDashboard from "./pages/scout/ScoutDashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/playerLogin" element={<PlayerLogin />} />
        <Route path="/PlayerSignUp" element={<PlayerSignUp />} />
        <Route path="/PlayerChat" element={<PlayerChat />} />
        <Route path="/PlayerScout" element={<PlayerScout />} />
        <Route path="/ScoutDashboard" element={<ScoutDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
