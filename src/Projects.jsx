import Header from "./Header";
import './Projects.css';
import { useState, useEffect } from "react";

    const Card1 = [
            "bg-[url('/dental/f1.png')]",
            "bg-[url('/dental/f2.png')]",
            "bg-[url('/dental/f3.png')]",
            "bg-[url('/dental/f4.png')]",
            "bg-[url('/dental/f5.png')]",
            "bg-[url('/dental/f6.png')]",
            "bg-[url('/dental/f7.png')]"
            ];
    const Card2 = [
            "bg-[url('/momentum/m1.png')]",
            "bg-[url('/momentum/m2.png')]",
            "bg-[url('/momentum/m3.png')]",
            "bg-[url('/momentum/m4.png')]",
            "bg-[url('/momentum/m5.png')]",
            "bg-[url('/momentum/m6.png')]",
            "bg-[url('/momentum/m7.png')]",
            "bg-[url('/momentum/m8.png')]",
            "bg-[url('/momentum/m9.png')]"
            ];
            
    const Card3 = [
            "bg-[url('/alumni/a1.png')]",
            "bg-[url('/alumni/a2.png')]",
            "bg-[url('/alumni/a3.png')]",
            "bg-[url('/alumni/a4.png')]",
            "bg-[url('/alumni/a5.png')]",
            "bg-[url('/alumni/a6.png')]"
        ];
    
    const Card4 = [
            "bg-[url('/nox/n1.png')]",
            "bg-[url('/nox/n2.png')]",
            "bg-[url('/nox/n3.png')]",
            "bg-[url('/nox/n4.png')]",
            "bg-[url('/nox/n5.png')]",
            "bg-[url('/nox/n6.png')]",
            "bg-[url('/nox/n7.png')]"
        ];

        function NextBackground(currentIndex, array) {
            let nextIndex;
            if (currentIndex + 1 < array.length) {
                nextIndex = currentIndex + 1;
            } else {
                nextIndex = currentIndex;
            }
            return nextIndex;
        }

        function PrevBackground(currentIndex, array) {
            let prevIndex;
            if (currentIndex - 1 >= 0) {
            prevIndex = currentIndex - 1;
            } else {
                prevIndex = 0; 
            }
            return prevIndex;
        }
        
        
function Projects() {
    const [Card1Index, setCard1Index] = useState(0);
    const [Card2Index, setCard2Index] = useState(0);
    const [Card3Index, setCard3Index] = useState(0);
    const [Card4Index, setCard4Index] = useState(0);

    const [isFullscreen, setFullscreen] = useState(false);
    const [currentImage, setCurrentImage] = useState("");



    function toggleFullscreen(index, card) {
            
            setCurrentImage(card?.[index]);
            setFullscreen(!isFullscreen);
            
        }


        
    return (
        
        <div className='flex flex-col  min-h-screen w-full bg-black '>
            <Header/>

            <span className="fade-up text-2xl md:text-4xl text-white text-center underline decoration-4 underline-offset-10" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}> My Projects</span>
            <span className="fade-up text-[#B1B2B5] text-sm mx-auto text-center  h-auto w-[80%] mt-[2vh]  md:mt-[3vh]"> A collection of projects I’ve built and those I’ve contributed to or been part of.</span>
            
            <div className="flex flex-col md:flex-col md:flex-wrap lg:flex-row  lg:justify-center    lg:max-w-[95rem] lg:mx-auto lg:gap-y-8 lg:mb-7">
            {/* Card 1 */}
            <div className="slide-up-only w-80 md:w-170 h-auto mx-auto   border-[1px] border-[#222] mt-5 bg-[#0A0A0A] rounded-[8px]">

                <div onClick={() => toggleFullscreen(Card1Index,Card1)} className={"w-70 h-50 md:w-140 md:h-79 " + Card1[Card1Index] + " mx-auto mt-3 md:mt-8 relative flex items-center justify-between px-3 bg-contain bg-no-repeat bg-center"}>
                    <button onClick={(e) => {
                        e.stopPropagation();
                        setCard1Index(PrevBackground(Card1Index,Card1))}
                    }
                    
                    className="w-8 h-8 bg-gradient-to-br from-gray-800 to-black text-white rounded-full flex items-center justify-center hover:scale-110 hover:shadow-lg transition-all duration-200 shadow-md border border-gray-700">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button onClick={(e) => {
                        e.stopPropagation();
                        setCard1Index(NextBackground(Card1Index,Card1))} }
                        className="w-8 h-8 bg-gradient-to-br from-gray-800 to-black text-white rounded-full flex items-center justify-center hover:scale-110 hover:shadow-lg transition-all duration-200 shadow-md border border-gray-700">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>

                {/* ellipses */}
                {/* <div className="flex flex-row gap-2 justify-center mt-3">
                    <div className="w-1 h-1 bg-[#383838] rounded-full"></div>
                    <div className="w-1 h-1 bg-[#7F7F7F] rounded-full"></div>
                    <div className="w-1 h-1 bg-[#B9B9B9] rounded-full"></div>
                    <div className="w-1 h-1 bg-white rounded-full"></div>
                </div>
                */}
                <div className="w-50 h-7 md:w-75 md:h-12 mx-auto mt-3 text-[9px] md:text-[12px]  font-bold border-1 border-[#222222] text-white flex items-center justify-center rounded-[4px]" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>DENTAL CLINIC MANAGEMENT SYSTEM</div>

                <div className="w-50  md:w-75 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 mt-3 mx-auto pb-3 ">
                    <div className='tech-stack' style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>HTML</div>
                    <div className='tech-stack' style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>CSS</div>
                    <div className='tech-stack' style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>JavaScript</div>
                    <div className='tech-stack' style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>MySQL</div>
                    <div className='tech-stack' style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>PHP</div>
                    <div className='tech-stack' style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>Bootstrap</div>
                </div>
            </div>
            
            {/* Card 2 */}
            <div className="slide-up-only w-80 md:w-170 h-auto mx-auto   border-[1px] border-[#222] mt-5 bg-[#0A0A0A] rounded-[8px]">

                <div onClick={() => toggleFullscreen(Card2Index,Card2)} className={"w-70 h-50 md:w-140 md:h-79 " + Card2[Card2Index] + " mx-auto mt-3 md:mt-8 relative flex items-center justify-between px-3 bg-contain bg-no-repeat bg-center"}>
                    <button onClick={(e) => {
                        e.stopPropagation();
                        setCard2Index(PrevBackground(Card2Index,Card2))}
                    }
                    
                    className="w-8 h-8 bg-gradient-to-br from-gray-800 to-black text-white rounded-full flex items-center justify-center hover:scale-110 hover:shadow-lg transition-all duration-200 shadow-md border border-gray-700">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button onClick={(e) => {
                        e.stopPropagation();
                        setCard2Index(NextBackground(Card2Index,Card2))}} className="w-8 h-8 bg-gradient-to-br from-gray-800 to-black text-white rounded-full flex items-center justify-center hover:scale-110 hover:shadow-lg transition-all duration-200 shadow-md border border-gray-700">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>

                

                <div className="w-50 h-7 md:w-75 md:h-12 mx-auto mt-3 text-[9px] md:text-[12px] font-bold border-1 border-[#222222] text-white flex items-center justify-center rounded-[4px]" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>MOMENTUM KANBAN BOARD</div>

                <div className="w-50 md:w-75 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 mt-3 mx-auto pb-3">
                    <div className='tech-stack' style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>HTML</div>
                    <div className='tech-stack' style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>CSS</div>
                    <div className='tech-stack' style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>JavaScript</div>
                    <div className='tech-stack' style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>MySQL</div>
                    <div className='tech-stack' style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>PHP</div>
                    <div className='tech-stack' style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>Bootstrap</div>
                    <div className='tech-stack' style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>React</div>
                    <div className='tech-stack' style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>Laravel</div>
                </div>
            </div>

            {/* Card 3 */}
            <div  className="slide-up-only w-80 md:w-170 h-auto mx-auto   border-[1px] border-[#222] mt-5 bg-[#0A0A0A] rounded-[8px]">

                <div onClick={() => toggleFullscreen(Card3Index,Card3)} className={"w-70 h-50 md:w-140 md:h-79 " + Card3[Card3Index] + " mx-auto mt-3 md:mt-8 relative flex items-center justify-between px-3 bg-contain bg-no-repeat bg-center"}>
                    <button onClick={(e) => {
                        e.stopPropagation();
                        setCard3Index(PrevBackground(Card3Index,Card3))}
                    }
                    className="w-8 h-8 bg-gradient-to-br from-gray-800 to-black text-white rounded-full flex items-center justify-center hover:scale-110 hover:shadow-lg transition-all duration-200 shadow-md border border-gray-700">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button onClick={(e) => {
                        e.stopPropagation();
                        setCard3Index(NextBackground(Card3Index,Card3))}
                    } className="w-8 h-8 bg-gradient-to-br from-gray-800 to-black text-white rounded-full flex items-center justify-center hover:scale-110 hover:shadow-lg transition-all duration-200 shadow-md border border-gray-700">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>

                

                <div className="w-50 h-7 md:w-75 md:h-12 mx-auto mt-3 text-[9px] md:text-[12px] font-bold border-1 border-[#222222] text-white flex items-center justify-center rounded-[4px]" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>ALUMNISPHERE</div>

                <div className="w-50 md:w-75 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 mt-3 mx-auto pb-3">
                    <div className='tech-stack' style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>HTML</div>
                    <div className='tech-stack' style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>CSS</div>
                    <div className='tech-stack' style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>JavaScript</div>
                    <div className='tech-stack' style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>MySQL</div>
                    <div className='tech-stack' style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>PHP</div>
                    <div className='tech-stack' style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>Bootstrap</div>

                </div>
            </div>

            {/* Card 4 */}
            <div  className="slide-up-only w-80 md:w-170 h-auto mx-auto   border-[1px] border-[#222] mt-5 bg-[#0A0A0A] rounded-[8px] ">

                <div onClick={() => toggleFullscreen(Card4Index,Card4)} className={"w-70 h-50 md:w-140 md:h-79 " + Card4[Card4Index] + " mx-auto mt-3 md:mt-8 relative flex items-center justify-between px-3 bg-contain bg-no-repeat bg-center"}>
                    <button onClick={(e) => {
                        e.stopPropagation();
                        setCard4Index(PrevBackground(Card4Index,Card4))}
                    } className="w-8 h-8 bg-gradient-to-br from-gray-800 to-black text-white rounded-full flex items-center justify-center hover:scale-110 hover:shadow-lg transition-all duration-200 shadow-md border border-gray-700">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button onClick={(e) => {
                        e.stopPropagation();
                        setCard4Index(NextBackground(Card4Index,Card4))}
                    } className="w-8 h-8 bg-gradient-to-br from-gray-800 to-black text-white rounded-full flex items-center justify-center hover:scale-110 hover:shadow-lg transition-all duration-200 shadow-md border border-gray-700">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>

                

                <div className="w-50 h-7 md:w-75 md:h-12 mx-auto mt-3 text-[9px] md:text-[12px] font-bold border-1 border-[#222222] text-white flex items-center justify-center rounded-[4px]" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>NOX CLOTHING ECOMMERCE</div>

                <div className="w-50 md:w-75 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 mt-3 mx-auto pb-3">
                    <div className='tech-stack' style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>HTML</div>
                    <div className='tech-stack' style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>CSS</div>
                    <div className='tech-stack' style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>JavaScript</div>
                    <div className='tech-stack' style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>MySQL</div>
                    <div className='tech-stack' style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>PHP</div>
                    <div className='tech-stack' style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>Bootstrap</div>

                </div>
            </div>

            </div>
            {isFullscreen && (
                <div 
                className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
                onClick={() => toggleFullscreen()}
                >
                <div className={"w-[90vw] h-[90vh] " + currentImage + " bg-contain bg-no-repeat bg-center"}></div>
                </div>
            )}
        </div>
    )
}
export default Projects