import { useState } from 'react'

import './App.css'

function App() {
return(
  <div className='flex flex-col min-h-screen w-full bg-black '>
    
    {/* header */}
    <div className="flex sticky top-0  mx-auto bg-black overflow-hidden z-2">
      <span className="nav-item" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>Home</span>
      <span className="nav-item" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>About</span>
      <span className="nav-item" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>Projects</span>
      <span className="nav-item" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>Contact</span>
    </div>

    {/* picture */}
    <div className="relative w-30 h-30 md:w-[240px] md:h-[240px] mx-auto mt-[6vh] md:mt-[5vh]">
      <div className="absolute top-1/2 left-1/2 w-[160px] h-[160px] md:w-[320px] md:h-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(255,255,255,1)_0%,rgba(136,136,136,1)_30%,rgba(0,0,0,1)_100%)]"></div>
      <img
        src="me.png"
        className="relative w-full h-full rounded-full object-cover"
      />
    </div>

    {/* caption */}
    <span className="text-[white] mx-auto mt-[5vh] md:mt-[5vh] text-2xl font-bold md:text-5xl z-3" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>Hello, I am Christian Trio</span>
    
    {/* location */}
    <div className="flex mx-auto mt-[6vh] md:mt-[5vh] items-center gap-1">
        <svg className="w-4 h-4 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 11.5C11.337 11.5 10.7011 11.2366 10.2322 10.7678C9.76339 10.2989 9.5 9.66304 9.5 9C9.5 8.33696 9.76339 7.70107 10.2322 7.23223C10.7011 6.76339 11.337 6.5 12 6.5C12.663 6.5 13.2989 6.76339 13.7678 7.23223C14.2366 7.70107 14.5 8.33696 14.5 9C14.5 9.3283 14.4353 9.65339 14.3097 9.95671C14.1841 10.26 13.9999 10.5356 13.7678 10.7678C13.5356 10.9999 13.26 11.1841 12.9567 11.3097C12.6534 11.4353 12.3283 11.5 12 11.5ZM12 2C10.1435 2 8.36301 2.7375 7.05025 4.05025C5.7375 5.36301 5 7.14348 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 7.14348 18.2625 5.36301 16.9497 4.05025C15.637 2.7375 13.8565 2 12 2Z" fill="#B1B2B5" />
        </svg>          
        <span className="text-[15px] text-[#b1b2b5] font-normal md:text-xl" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>Cavite, Philippines</span>
    </div>

    {/* profession */}
    <div className='mx-auto flex justify-center items-center mt-[8vh] md:mt-[6vh]'>
      <div className='overflow-hidden h-[20px] md:h-[26px] relative'>
        <div className='flex flex-col animate-change'>
          <span className="text-[14px] text-[#b1b2b5] font-normal mx-auto md:text-xl" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>Web Developer</span>
          <span className="text-[14px] text-[#b1b2b5] font-normal mx-auto md:text-xl" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>UI/UX Designer</span>
          <span className="text-[14px] text-[#b1b2b5] font-normal mx-auto md:text-xl" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>Graphic Designer</span>
        </div>
      </div>
    </div>
    {/* download cv button */}
    <button className="w-[120px] h-[33px] md:w-[180px] md:h-[48px] bg-white mx-auto flex items-center justify-center mt-[8vh] md:mt-[6vh] cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(255,255,255,0.6)]
">
  <span className="text-[13px] md:text-[18px] font-bold" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>
    Download CV
  </span>
</button>


    {/* social media icons */}
    <div className="flex mx-auto mt-[10vh]  md:mt-[12vh]  gap-10 md:gap-20">
      <button className="social-btn transition-transform duration-300 hover:scale-110 hover:opacity-80">
        <img src="/github.png" alt="GitHub" className="social-img" />
      </button>

      <button className="social-btn transition-transform duration-300 hover:scale-110 hover:opacity-80">
        <img src="/linkedin.png" alt="LinkedIn" className="social-img" />
      </button>

      <button className="social-btn transition-transform duration-300 hover:scale-110 hover:opacity-80">
        <img src="/mail.png" alt="Mail" className="social-img" />
      </button>


    </div>
  </div>
) 
}
export default App
