import React from "react";
import { useNavigate } from "react-router-dom";

function PlayerSignUp() {

  const navigate = useNavigate()
  return (
    <div>
      {/* <!-- component -->?? */}

      {/* <!-- component --> */}
      <body class="antialiased bg-gradient-to-br from-green-100 to-white">
        <div class="container px-6 mx-auto">
          <div class="flex flex-col text-center md:text-left md:flex-row h-screen justify-evenly md:items-center">
            <div class="flex flex-col w-full">
              <div>
                <svg
                  class="w-20 h-20 mx-auto md:float-left fill-stroke text-gray-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="/src/assets/images/goly.png"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  ></path>
                </svg>
              </div>
              <h1 class="text-5xl text-gray-800 font-bold">
                {" "}
                Your journey starts here
              </h1>
              <p class="w-5/12 mx-auto md:mx-0 text-gray-500">
                We Never Stop Dreaming Big{" "}
              </p>
            </div>
            <div class="w-full md:w-full lg:w-9/12 mx-auto md:mx-0">
              <div class="bg-white p-10 flex flex-col w-full shadow-xl rounded-xl">
                <h2 class="text-2xl font-bold text-gray-800 text-left mb-5">
                Sign Up
                </h2>
                <form action="" class="w-full">
                  <div id="input" class="flex flex-col w-full my-5">
                    <label for="username" class="text-gray-500 mb-2">
                      Username
                    </label>
                    <input
                      type="text"
                      id="username"
                      placeholder="Please insert your username"
                      class="appearance-none border-2 border-gray-100 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:shadow-lg"
                    />
                  </div>
                  <div id="input" class="flex flex-col w-full my-5">
                    <label for="email" class="text-gray-500 mb-2">
                      Enter Email
                    </label>
                    <input
                      type="text"
                      id="username"
                      placeholder="Please insert your Email"
                      class="appearance-none border-2 border-gray-100 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:shadow-lg"
                    />
                  </div>
                  <div id="input" class="flex flex-col w-full my-5">
                    <label for="phone" class="text-gray-500 mb-2">
                     Phone Number
                    </label>
                    <input
                      type="password"
                      id="password"
                      placeholder="Please insert your phone number"
                      class="appearance-none border-2 border-gray-100 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:shadow-lg"
                    />
                  </div>
                  <div id="input" class="flex flex-col w-full my-5">
                    <label for="password" class="text-gray-500 mb-2">
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      placeholder="Please insert your password"
                      class="appearance-none border-2 border-gray-100 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:shadow-lg"
                    />
                  </div>
                  <div id="button" class="flex flex-col w-full my-5">
                    <button
                      type="button"
                      class="   w-full py-4 bg-green-600 rounded-lg text-green-100" onClick={()=>{navigate('/playerLogin')}}
                    >
                        Sign Up
                    </button>
                    <div class="flex justify-evenly mt-5">
                      {/* <a
                        href="#"
                        class="w-full text-center font-medium text-gray-500"
                      >
                        Recover password!
                      </a> */}
                      <a
                        href="#"
                        class="w-full text-center font-medium text-gray-500" onClick={()=>{navigate("/playerLogin")}}
                      >
                        alredy  have an account
                      </a>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}

export default PlayerSignUp;
