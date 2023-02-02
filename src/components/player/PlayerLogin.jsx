import React from "react";
// import BG from "../../../assets/images/playerlogin.jpg"

function PlayerLogin() {
  return (
    <div>
        
        {/* <img className="h-screen " src={BG} alt="" srcset="" /> */}

    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden bg-transparent bg-[url('/src/assets/images/playerlogin.jpg')]"  >
        <div className="w-full p-6 m-auto bg-white/60 rounded shadow-lg ring-2 ring-purple-800/50 lg:max-w-md">
          <h1 className="text-3xl font-semibold text-center text-purple-700">
            LOGIN
          </h1>

          <form className="mt-6">
            <div>
              <label for="email" className="block text-sm text-gray-800">
                Email
              </label>
              <input
                type="email"
                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Email Address"
              />
              <span className="inline-flex text-sm text-red-600">
                Use the account you created to sign in to Gmail.
              </span>
            </div>
            <div className="mt-4">
              <div>
                <label for="password" className="block text-sm text-gray-800">
                  Password
                </label>
                <input
                  type="password"
                  className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
                <span className="inline-flex text-sm text-red-700">
                  Password must be 8 characters
                </span>
              </div>
              <a href="#" className="text-xs text-gray-600 hover:underline">
                Forget Password?
              </a>
            </div>
            <div className="mt-6">
              <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                Login
              </button>
            </div>
          </form>
          <p class="mt-8 text-xs font-light text-center text-gray-700">
            {" "}
            Don't have an account?{" "}
            <a href="#" class="font-medium text-purple-600 hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div>
      </div>
   
  );
}

export default PlayerLogin;
