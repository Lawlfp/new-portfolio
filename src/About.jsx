import './About.css';
import Header from './Header';

function About(){
   return(
    <div className='flex flex-col min-h-screen w-full bg-black '>
        
        {/* header */}
        <Header />
    
        <span className="text-2xl text-white text-center underline decoration-4 underline-offset-7" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>About</span>
        <span className='text-[#B1B2B5] text-xs mx-auto text-center w-[320px] mt-[1vh] hidden md:flex' style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>
            I am a dynamic professional with a knack for UI/UX design and
               web development. By merging technical skill with creative
               vision, I craft seamless digital experiences. My mission is to
               equip businesses with innovative, customized solutions that
               strengthen brand presence and deliver measurable results. 
        </span>

         {/* Card Wrapper */}
         <div className='flex flex-col md:flex-row flex-grow md:flex-grow-1 md:gap-2 md:mx-2'>

            <div className="flex flex-col flex-grow justify-evenly md:justify-start border-1  border-[#322727] w-[90%] md:w-[0px] mx-auto mt-[1.5vh] pb-1.5 md:mb-5">
               <img src="./img1.png" className="w-10 h-10  mx-auto"></img>
               <span className='text-base text-[#A0A0A0] text-center'>Web Developer</span>
               <span className='text-[#A0A0A0] text-xs text-center w-[90%] mx-auto'>Crafting fast, responsive websites and web apps that blend clean code with peak performance, 
                  ensuring a smooth and engaging user experience.</span>

               <div className="flex flex-wrap items-center justify-center gap-2 mt-[1vh] w-[95%] mx-auto">
                  <div className='skill-tag' style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>HTML</div>
                  <div className='skill-tag' style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>CSS</div>
                  <div className='skill-tag' style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>JavaScript</div>
                  <div className='skill-tag' style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>MySQL</div>
                  <div className='skill-tag' style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>PHP</div>
                  <div className='skill-tag' style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>Bootstrap</div>
                  <div className='skill-tag' style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>React</div>
                  <div className='skill-tag' style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>C++</div>
                  <div className='skill-tag' style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>Laravel</div>
                  <div className='skill-tag' style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>Tailwind</div>
               </div>   
            </div>   

            <div className="flex flex-col flex-grow justify-evenly md:justify-start border-1  border-[#322727] w-[90%] md:w-[0px] mx-auto mt-[1.5vh] pb-1.5 md:mb-5">
               <img src="./img1.png" className="w-10 h-10  mx-auto"></img>
               <span className='text-base text-[#A0A0A0] text-center'>UI/UX Designer</span>
               <span className='text-[#A0A0A0] text-xs text-center w-[90%] mx-auto'>Bringing visions to life through striking visuals and innovative design. I craft designs that captivate and inspire.</span>

               <div className="flex flex-wrap items-center justify-center gap-2 mt-[1vh] w-[95%] mx-auto">
                  <div className='skill-tag' style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>Figma</div>
                  <div className='skill-tag' style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>Sketch</div>
                  <div className='skill-tag' style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>Design System</div>
                  <div className='skill-tag' style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>Penpot</div>
                  <div className='skill-tag' style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>Spacing</div>

               </div>   
            </div>  

            <div className="flex flex-col flex-grow justify-evenly md:justify-start border-1  border-[#322727] w-[90%] md:w-[0px] mx-auto mt-[1.5vh] pb-1.5 mb-5 md:mb-5">
               <img src="./img1.png" className="w-10 h-10  mx-auto"></img>
               <span className='text-base text-[#A0A0A0] text-center'>Graphic Designer</span>
               <span className='text-[#A0A0A0] text-xs text-center w-[90%] mx-auto '>Transforming ideas into stunning visuals with a keen eye for aesthetics, crafting designs that captivate, communicate, and leave a lasting impact.</span>

               <div className="flex flex-wrap items-center justify-center gap-2 mt-[1vh] w-[95%] mx-auto">
                  <div className='skill-tag' style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>Canva</div>
                  <div className='skill-tag' style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>Adobe Photoshop</div>
                  <div className='skill-tag' style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>GIMP</div>
                  <div className='skill-tag' style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>Color Theory</div>
                  <div className='skill-tag' style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>Typography</div>

               </div>   
            </div>   
         
         </div>
      </div>
   ) 
}

export default About