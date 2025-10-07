import { useState } from 'react'

import './App.css'

function App() {
return(
  <div className='flex flex-col min-h-screen w-full bg-black pb-[2.5vh]'>
    
    {/* header */}
    <div className="flex sticky top-0 pt-[2.5vh] mx-auto bg-black overflow-hidden">
      <span className="w-[5.5rem] flex items-center justify-center text-xs text-[#B1B2B5]" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>Home</span>
      <span className="w-[5.5rem] flex items-center justify-center text-xs text-[#B1B2B5]" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>About</span>
      <span className="w-[5.5rem] flex items-center justify-center text-xs text-[#B1B2B5]" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>Projects</span>
      <span className="w-[5.5rem] flex items-center justify-center text-xs text-[#B1B2B5]" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>Contact</span>
    </div>

    {/* picture */}
    <div className="bg-white w-30 h-30 rounded-full mx-auto mt-[12vh] "></div>

    {/* caption */}
    <span className="text-[white] mx-auto mt-[3vh] text-2xl font-bold" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>Hello, I am Christian Trio</span>
    
    {/* location */}
    <div className="flex mx-auto mt-[6vh] items-center gap-1">
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 11.5C11.337 11.5 10.7011 11.2366 10.2322 10.7678C9.76339 10.2989 9.5 9.66304 9.5 9C9.5 8.33696 9.76339 7.70107 10.2322 7.23223C10.7011 6.76339 11.337 6.5 12 6.5C12.663 6.5 13.2989 6.76339 13.7678 7.23223C14.2366 7.70107 14.5 8.33696 14.5 9C14.5 9.3283 14.4353 9.65339 14.3097 9.95671C14.1841 10.26 13.9999 10.5356 13.7678 10.7678C13.5356 10.9999 13.26 11.1841 12.9567 11.3097C12.6534 11.4353 12.3283 11.5 12 11.5ZM12 2C10.1435 2 8.36301 2.7375 7.05025 4.05025C5.7375 5.36301 5 7.14348 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 7.14348 18.2625 5.36301 16.9497 4.05025C15.637 2.7375 13.8565 2 12 2Z" fill="#B1B2B5" />
        </svg>
        <span className="text-[15px] text-[#b1b2b5] font-normal" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>Cavite, Philippines</span>
    </div>

    {/* profession */}
    <span className="text-[14px] text-[#b1b2b5] font-normal mx-auto mt-[6vh]" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>Web Designer</span>
    
    {/* download cv button */}
    <div className="w-[110px] h-[30px] bg-white mx-auto text-center mt-[6vh]">
      <span className="text-[12px] font-bold " style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>Download CV</span>
    </div>

    {/* social media icons */}
    <div className="flex mx-auto mt-[11vh] gap-9">
      <button className="w-10 h-10 bg-transparent flex items-center justify-center rounded cursor-pointer">
        <img src="/github.png" alt="GitHub" className="w-8 h-8 object-contain" />
      </button>

      <button className="w-10 h-10 bg-transparent flex items-center justify-center rounded cursor-pointer">
        <img src="/linkedin.png" alt="LinkedIn" className="w-8 h-8 object-contain" />
      </button>

      <button className="w-10 h-10 bg-transparent flex items-center justify-center rounded cursor-pointer">
        <img src="/mail.png" alt="Mail" className="w-8 h-8 object-contain" />
      </button>


    </div>
  </div>
) 
}
export default App
