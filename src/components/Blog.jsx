import React from "react";
import square from "../assets/square.png"


function Blog() {
    return (

        <div className="flex flex-col border-black border-b-2">
        <div className="flex lg:flex-row border-black border-b-2 flex-col">
            <div className="lg:w-6/12 mx-auto my-16 px-12 w-full text-center lg:text-start">
                <h1 className=" font-normal lg:text-7xl text-6xl w-11/12">Learn more about us. Or join us.</h1>
            </div>
            <div className="flex lg:flex-col md:flex-row flex-col mx-12 lg:mx-0 lg:w-6/12">
                <div className=" lg:border-black lg:border-b-2 lg:border-l-2 p-5 border-0 ">
                    <h2 className="text-black font-normal text-2xl py-5">The Medium blog</h2>
                    <p className="text-black font-normal text-lg py-3 w-8/12">Visit our company blog for the 
                    latest news, product updates, and tips and tricks.</p>
                    <button className=" text-green-700 my-10 border border-green-700 rounded-3xl py-2 px-4">Read our blog</button>
                </div>
                <div className="lg:border-black lg:border-l-2 p-5 border-0 ">
                    <h2 className="text-black font-normal text-2xl py-5">Work at Medium</h2>
                    <p className="text-black font-normal text-lg py-3 w-8/12">Our team is home to engineers, 
                    journalists, artists, and creatives of all stripes.</p>
                    <button className=" text-green-700 my-10 border border-green-700 rounded-3xl py-2 px-4">View open positions</button>
                </div>
            </div>
            
        </div>
        <div className="flex md:flex-row flex-col justify-center">
            <div className="md:w-6/12 w-full mx-0 my-16 md:px-10 px-0">
            <img src={square} alt="img" className="lg:w-7/12 lg:h-7/12 m-auto w-10/12 h-10/12"/>
            </div>
            <div className="md:w-6/12 w-full md:border-black md:border-l-2 px-12 py-5 md:mx-auto mx-0">
            <h1 className="lg:font-normal lg:text-6xl md:text-4xl md:font-semibold py-5 w-7/12 text-3xl font-bold">Read, write, and expand your world.</h1>
            <button className=" md:mt-28 mt-2 mb-10 md:mb-0 lg:px-10 lg:py-3 bg-green-700 text-white rounded-3xl px-6 py-2">
                Get started</button>
            </div>
        
            </div>
        </div>
      
    );
  }
  
  export default Blog;