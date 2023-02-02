import React from "react";
import Navbar from "../../components/player/Navbar";
import PlayerLogin from "../../components/player/PlayerLogin";
import Footer from "../../components/player/Footer";
function Login() {
  return (
    <div>
        <Navbar />
      <div>
        <PlayerLogin />
      </div>
      <Footer />
    </div>
  );
}

export default Login;
