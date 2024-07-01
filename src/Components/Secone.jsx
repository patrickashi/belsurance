import React from "react"
import banner1 from "../Assets/banner1.jpg"

const Secone = () => {
    return (
        <div className="flex justify-center flex-col md:flex-row mx-4 md:mx-20 py-20 mt-20 mb-12 text-gray-700">
            <div className="w-full md:w-[600px]">
                <h2 className="text-5xl md:text-6xl mt-8 font-mono">Insurance Coverage You Can Count On</h2>
                <p className="my-6 text-xl">
                    Wherever and whenever you need.
                    It’s our job to protect you and what matters to you most.
                </p>
                <button className="bg-[#007A5E] text-white px-4 rounded-full py-2 font-thin">
                    Contact Us
                </button>
            </div>

            <div className="flex justify-center items-center mt-8 md:mt-0 w-full md:w-[600px] ">
                <img src={banner1} alt="banner" className="rounded-xl md:rounded-l-full " />
            </div>
        </div>
    )
}

export default Secone;