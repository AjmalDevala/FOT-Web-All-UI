import { BrowserRouter, Route, Routes } from "react-router-dom";
import PlayerLogin from "./pages/player/Login"
import PlayerSignUp from './pages/player/Signup';
import Home from "./pages/player/PlayerHome";
import PlayerChat from "./pages/player/Chat";
import PlayerScout from "./pages/player/PlayerScout";
import ScoutDashboard from "./pages/scout/ScoutDashboard";
import ScoutSignUp from "./pages/scout/Signup";
import Pricing from "./pages/player/PlayerPricing";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/playerLogin" element={<PlayerLogin />} />
        <Route path="/PlayerSignUp" element={<PlayerSignUp />} />
        <Route path="/PlayerChat" element={<PlayerChat />} />
        <Route path="/PlayerScout" element={<PlayerScout />} />
        <Route path="/ScoutSignup" element={<ScoutSignUp />} />
        <Route path="/ScoutDashboard" element={<ScoutDashboard />} />
        <Route path="/PlayerPricing" element={<Pricing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
