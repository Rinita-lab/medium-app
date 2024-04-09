import React from "react";
import code1 from "../assets/code1.png"
import code2 from "../assets/code2.png"
import mobile from "../assets/mobile.png"
import { FaGooglePlay, FaApple } from "react-icons/fa";

function Membership() {
    return (
      <div className="flex flex-col">
        <div className=" bg-green-600 text-center border-black border-b-2">
            <h1 className="font-mono md:font-normal lg:text-7xl text-black pt-20 pb-8 w-7/12 m-auto md:text-5xl text-3xl font-bold">
                Get more with Membership.</h1>
            <p className="text-black font-normal lg:w-5/12 py-6 m-auto w-6/12">Become a Medium member to enjoy unlimited access and directly support the writers you read most.</p>
            <button className=" text-white mt-12 mb-20 border border-white rounded-3xl py-2 px-8">See membership options</button>
        </div>

        <div className=" bg-green-600 flex md:flex-row flex-col">
            <div className="outline outline-offset-0 outline-1 outline-black px-10 py-5 basis-1/2">
                <h2 className="text-black font-normal text-4xl py-5">Read as much as you want.</h2>
                <img src={code1} alt="code-img" className="w-7/12 h-6/12"/>
                <p className="text-black font-normal text-lg py-5">Enjoy unlimited access to every story across all of your devices.</p>
            </div>
            <div className="outline outline-offset-0 outline-1 outline-black px-10 py-5 basis-1/2">
                <h2 className="text-black font-normal text-4xl py-5">Reward quality content.</h2>
                <img src={code2} alt="code-img" className="w-6/12 h-5/12"/>
                <p className="text-black font-normal text-lg py-6">Your membership helps us pay writers, and keeps your experience ad-free.</p>
            </div>
        </div>

        <div className=" bg-green-200 flex lg:flex-row basis-1/2 border-black border-y-2 flex-col">
            <div className="flex flex-col justify-start lg:w-6/12 w-full text-center lg:text-start">
                <h1 className="font-mono font-normal text-7xl text-black pt-20 pb-10 w-9/12 lg:mx-20 mx-auto">Take Medium with you.</h1>
                <p className="text-black font-normal text-lg py-3 w-7/12 lg:mx-20 mx-auto">Download our app so you can read wherever you are.</p>
                <div className="flex md:flex-row flex-col gap-10 mx-20 my-10 mb-24 lg:mb-8">
                    <button className="bg-black text-white font-light text-sm md:w-4/12 w-8/12 px-4 py-2 rounded-lg mx-auto lg:mx-0 flex flex-row gap-4 items-center">
                        <div>
                            <FaApple className="w-7 h-7 inline-flex m-auto " />
                        </div>
                        <div>
                            <p>Download on the <br/><span className="text-xl">Apple Store</span></p>
                        </div>
                    </button>
                        
                    <button className="bg-black text-white font-light text-sm md:w-4/12 w-8/12 px-4 py-2 rounded-lg mx-auto lg:mx-0 flex flex-row gap-4 items-center">
                    <div>
                        <FaGooglePlay className="w-6 h-6 inline-flex m-auto "/>
                    </div>
                    <div>
                        <p>GET IT ON <br/><span className="text-xl">Google Play</span></p>
                    </div>
                    </button>
                </div>
                
            </div>
            <div className="flex flex-col justify-end items-center mx-auto">
                <img src={mobile} alt="mobile-img" className="w-8/12 h-7/12"/>
            </div>
        </div>
        
      </div>
    );
  }
  
  export default Membership;