import './About.css';
import Header from './Header';

function About(){
   return(
    <div className='flex flex-col min-h-screen w-full bg-black '>
        
        {/* header */}
        <Header />

         
        <span className="fade-up text-2xl md:text-4xl text-white text-center underline decoration-4 underline-offset-7" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>About</span>
        <span className='fade-up text-[#B1B2B5] text-sm mx-auto text-center w-[600px] mt-[1vh] hidden md:flex md:mt-[3vh]' style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>
            I am a dynamic professional with a knack for UI/UX design and
               web development. By merging technical skill with creative
               vision, I craft seamless digital experiences. My mission is to
               equip businesses with innovative, customized solutions that
               strengthen brand presence and deliver measurable results. 
        </span>

         {/* Card Wrapper */}
         <div className='flex flex-col  md:flex-row  md:flex-grow lg:justify-center h-[88vh] md:h-[auto]  md:gap-[2vh] lg:gap-[3.5vw] lg:mt-[7vh]  md:mx-[2vh] md:mt-[3vh]'>
            <div className="diagonal-border  flex flex-col flex-grow justify-evenly md:justify-evenly  w-[90%] md:w-[0px]   lg:min-h-80 lg:max-h-[50vh]   lg:max-w-[330px] md:max-h-[500px] mx-auto lg:mx-0 mt-[1.5vh] pb-1.5 md:mb-5 flex-1">
               <img src="./webdev.gif" className="w-10 h-10 md:w-[75px] md:h-[75px] mx-auto md:mt-[4vh]"></img>
               <span className='fade-up text-base text-[#A0A0A0] text-center md:mt-[4vh]'>Web Developer</span>
               <span className='fade-up text-[#A0A0A0] text-xs  text-center w-[85%] mx-auto md:h-[90px]   md:mt-[2vh]'>Crafting fast, responsive websites and web apps that blend clean code with peak performance, 
                  ensuring a smooth and engaging user experience.</span>

               <div className="fade-up flex flex-wrap items-center justify-center gap-2 mt-[1vh] w-[95%] mx-auto   md:mb-[2vh] md:h-[10vh] lg:mb-0 md:content-start ">
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

            <div className="diagonal-border  flex flex-col flex-grow justify-evenly md:justify-evenly  w-[90%] md:w-[0px]  lg:min-h-80 lg:max-h-[50vh] lg:max-w-[330px] md:max-h-[500px] mx-auto lg:mx-0 mt-[1.5vh] pb-1.5 md:mb-5 flex-1">
               <img src="./uiux.gif" className="w-10 h-10 md:w-[75px] md:h-[75px] mx-auto md:mt-[4vh]"></img>
               <span className='fade-up text-base text-[#A0A0A0] text-center md:mt-[4vh]'>UI/UX Designer</span>
               <span className='fade-up text-[#A0A0A0] text-xs  text-center w-[85%] mx-auto md:h-[90px] md:mt-[2vh]'>Bringing visions to life through striking visuals and innovative design. I craft designs that captivate and inspire.</span>

               <div className="fade-up flex flex-wrap items-center justify-center gap-2 mt-[1vh] w-[95%] mx-auto md:mb-[2vh] md:h-[10vh] lg:mb-0 md:content-start">
                  <div className='skill-tag' style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>Figma</div>
                  <div className='skill-tag' style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>Sketch</div>
                  <div className='skill-tag' style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>Design System</div>
                  <div className='skill-tag' style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>Penpot</div>
                  <div className='skill-tag' style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>Spacing</div>

               </div>   
            </div>  

            <div className="diagonal-border flex flex-col flex-grow justify-evenly md:justify-evenly  w-[90%] md:w-[0px]  lg:min-h-80 lg:max-h-[50vh] lg:max-w-[330px] md:max-h-[500px] mx-auto lg:mx-0 mt-[1.5vh] pb-1.5 mb-5 md:mb-5 flex-1">
               <img src="./graphic.gif" className="w-10 h-10 md:w-[75px] md:h-[75px] mx-auto md:mt-[4vh]"></img>
               <span className='fade-up text-base text-[#A0A0A0] text-center md:mt-[4vh]'>Graphic Designer</span>
               <span className='fade-up text-[#A0A0A0] text-xs  text-center w-[85%] mx-auto md:h-[90px]  md:mt-[2vh]'>Transforming ideas into stunning visuals with a keen eye for aesthetics, crafting designs that captivate, communicate, and leave a lasting impact.</span>

               <div className="fade-up flex flex-wrap items-center justify-center gap-2 mt-[1vh] w-[95%] mx-auto md:mb-[2vh] md:h-[10vh] lg:mb-0 md:content-start">
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