import { BrowserRouter, Route, Routes } from "react-router-dom";
import PlayerLogin from "./pages/player/Login"
import PlayerSignUp from './pages/player/Signup';
import Home from "./pages/player/PlayerHome";
import PlayerChat from "./pages/player/Chat";
import PlayerScout from "./pages/player/PlayerScout";
import ScoutDashboard from "./pages/scout/ScoutDashboard";
import ScoutSignUp from "./pages/scout/Signup";
import Pricing from "./pages/player/PlayerPricing";
import PageNotFound from"./Error/PageNotFound"
import Dashboard from "./pages/admin/AdminDashboard";
import PlayerTable from "./pages/admin/PlayerTablePage";
import PlayerProfile from "./pages/player/PlayerProfile";
import ScoutLoginPage from "./pages/scout/ScoutLoginPage";
import ScoutTablePage from "./pages/admin/ScoutTablePage";
import LoginPage from "./pages/admin/LoginPage"
import ScoutChatPage from "./pages/scout/ScoutChatPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>

              {/* player pages */}

        <Route path="/" element={<Home />} />
        <Route path="/playerLogin" element={<PlayerLogin />} />
        <Route path="/PlayerSignUp" element={<PlayerSignUp />} />
        <Route path="/PlayerChat" element={<PlayerChat />} />
        <Route path="/PlayerScout" element={<PlayerScout />} />
        <Route path="/PlayerPricing" element={<Pricing />} />
        <Route path="/playerProfile" element={<PlayerProfile />} />

              {/* Scout Page  */}

        <Route path="/scoutSignup" element={<ScoutSignUp />} />
        <Route path="/ScoutLogin" element={<ScoutLoginPage />} />
        <Route path="/ScoutDashboard" element={<ScoutDashboard />} />
        <Route path="/scoutChat" element={<ScoutChatPage />} />
           

          
              {/* Admin Page */}

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/PlayerTable" element={<PlayerTable />} />
        <Route path="/ScoutTable" element={<ScoutTablePage />} />
        <Route path="/AdminLogin" element={<LoginPage />} />



                {/* erro Page */}
          <Route path="*" element={<PageNotFound />} /> 
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
