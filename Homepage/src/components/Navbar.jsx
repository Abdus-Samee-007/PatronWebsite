import React from 'react'

function Navbar() {
  return (
     <div className="containerr flex items-center border-2 border-blue-300 px-7 py-3 mx-auto mt-1 ">
     <img src="https://e7.pngegg.com/pngimages/487/456/png-clipart-computer-icons-business-logo-youtube-cartoon-green-small-rocket-cartoon-character-painted.png" alt="logo" className='text-white w-11 h-11' />

      <div className="webname flex-none w-20 text-white mx-2 ">
        App name
      </div>
       <div className="search">
      <input type="text" placeholder="" className="input input-bordered w-24 md:w-auto bg-gray-800 mx-1 pl-2    rounded-md" />
    </div>
      <div className="github ml-auto text-white pr-2 ">
        <a href="">Github</a>
      </div>
      <div className="privacy  text-white pr-2 ">
        <a href="">Privacy</a>
      </div>
      <div className="terms text-white pr-2 ">
        <a href="">Terms</a>
      </div>
      <div className="flex items-center space-x-2">
      <img
        className="inline-block h-12 w-12 rounded-full ml-2"
        src="https://t4.ftcdn.net/jpg/01/23/09/33/360_F_123093367_c7WoJ0uHCkepbgLasnGFBKK8sSNiJw6l.jpg"
        alt="Dan_Abromov"
      />
      <span className="flex flex-col pr-">
        <span className="text-sm font-medium text-gray-200">Dan Abromov</span>
        <span className="text-sm font-medium text-gray-400">@dan_abromov</span>
      </span>
    </div>
      
      
      
     </div>
     
  )
}

export default Navbar