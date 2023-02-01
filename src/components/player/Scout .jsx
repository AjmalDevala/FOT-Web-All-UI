import React from 'react'

function scout() {
    return (
        <div>
            {/* <!-- component --> */}
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/iconoir-icons/iconoir@main/css/iconoir.css"/>

                <div class='flex items-center justify-center min-h-screen from-pink-200 via-purple-300 to-blue-500 bg-gradient-to-br'>
                    <div class='w-full max-w-lg py-8 flex flex-row items-center justify-center mx-auto bg-[#FFFBFB] rounded-lg shadow-xl'>
                        <div class="flex flex-col md:flex-row w-3/4 md:w-5/6 space-x-0 md:space-x-8">
                            <div class="w-full md:w-2/5 flex flex-col items-center justify-center">
                                <figure class="w-1/2 md:w-full  rounded-full overflow-hidden"/>
                                    <img src="https://images.pexels.com/photos/1820559/pexels-photo-1820559.jpeg?auto=compress&cs=tinysrgb&w=600" alt="woman wearing a headwrap and an Africa-shaped earring while smiling"/>
                                 <div class="w-full md:w-3/5 space-y-4 flex flex-col justify-center items-center">
                                   <div class="flex flex-col justify-center">
                                    <h1 class="text-center md:text-left text-2xl font-bold text-gray-900">Justine Howell</h1>
                                    <p class="inline text-gray-700 font-normal leading-6 w-full text-base">UX Researcher, Co-host of the Interesting Design podcast
                                        and a proud mother of three children</p>
                                </div>
                                <ul class="space-y-4  md:space-y-0 space-x-0 md:space-x-4 flex flex-col md:flex-row text-left justify-center">
                                    <li class="text-sm"><i class="iconoir-pin-alt mr-2"></i>NYC</li>
                                    <li class="text-sm"><i class="iconoir-calendar mr-2"></i>Member since 2019 </li>
                                </ul>

                                <ul class="space-x-4 flex flex-row justify-center w-full mb-4">
                                    <li class="text-sm text-gray-800"><strong class="text-gray-900">10.9k</strong> Followers</li>
                                    <li class="text-sm text-gray-800"><strong class="text-gray-900">100</strong> Following</li>
                                </ul>
                                <button class="transition-colors bg-purple-700 hover:bg-purple-800 p-2 rounded-sm w-full text-white text-hover shadow-md shadow-purple-900">
                                    Follow
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        </div>
  
    
    )
}

export default scout 
