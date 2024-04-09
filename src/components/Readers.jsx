import React from "react";
import user from "../assets/user-medium.png"


function Readers() {
    return (
      <div className="flex flex-col bg-black w-full ">
        <div className=" flex md:flex-row flex-col">
        <div className="outline outline-offset-0 outline-1 outline-white p-8 ">
            <h1 className=" font-mono font-light lg:text-7xl text-white p-8 md:w-9/12 w-10/12 md:text-5xl text-4xl text-start ">
                Over 100 million readers and growing.</h1>
        </div>
        <div className="outline outline-offset-0 outline-1 outline-white py-8 px-12">
            <img src={user} alt="img" className=" lg:w-60 lg:h-52 w-44 h-40"/>
            <p className="text-white font-normal md:w-10/12 w-11/12 py-2">"Medium is a great place to read and learn from a wide range of authors. 
                It's not muddied up by ads. It feels like one of those few pure places to go online."</p>
            <p className="text-white font-normal w-7/12">- Jackie Colburn</p>
        </div>
        </div>

        <div className="flex flex-col justify-center items-center text-center p-8">
            <h1 className=" font-mono font-normal lg:text-7xl text-white p-8 md:w-8/12 w-10/12 md:text-5xl text-4xl">Create the space for your thinking to take off.</h1>
            <p className="text-white md:font-normal font-light lg:w-6/12 py-8 w-7/12">
                A blank page is also a door. At Medium you can walk through it. It's easy and free to share your feelings on any topic,
                connect with an audience, express yourself with an range of publishing tools, and even earn money for your work.
            </p>
            <button className=" text-green-700 my-10 border border-green-700 rounded-3xl py-2 px-4">Write on Medium</button>
        </div>
      </div>
    );
  }
  
  export default Readers;