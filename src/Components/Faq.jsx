import React from "react"
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import arduinohand from '../Assets/arduinohand.mp4';
import Searchomponent from "./Searchcomponent";
import Choosecategory from "./Choosecategory";



const Faq = () => {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
    return (
        <div className="flex flex-col md:flex-col lg:flex-row justify-center gap-12 px-4 md:px-20 pt-20  duration-200  border-t border-gray-300">
            <div ref={ref} className={`w-full md:w-[700px] transition-transform duration-100 ${isVisible ? 'animate-slideIn' : '-translate-x-1'}`}>
                <button className="border rounded-tr-xl px-4 py-1 text-xs font-mono font-semibold bg-gray-800 text-gray-100">FAQ</button>
                <h2 className="mt-4 mb-8 text-3xl md:text-4xl font-mono text-gray-800">You're Probably Wondering...</h2>
            </div>

            <div className="flex flex-col">
                <div className="custom-scrollbar flex flex-col h-80 overflow-y-scroll  justify-between gap-4 py-6 text-gray-800 text-md mb-4 md:mb-4 ">
                    <h2 className="text-center text-3xl font-mono">Frequently Asked Questions</h2>
                    <Searchomponent />
                    
                </div>

                <div>
                    <Choosecategory />
                </div>
            </div>

            {/* <div className="flex items-end justify-center">
              <img  alt="img" className="w-80 md:w-[600px]" />
            </div> */}

            <div className="hexagon-wrapper flex justify-center">
                <div className="hexagon flex justify-center">
                    <video autoPlay muted loop>
                        <source src={arduinohand} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </div>

    )
}

export default Faq;