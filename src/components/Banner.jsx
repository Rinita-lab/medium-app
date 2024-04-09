import React from "react";
import bannerimg from "../assets/banner.png"

function Banner() {
    return (
      <div className="w-full">
      <div className="flex flex-row justify-center p-20 outline outline-offset-0 outline-1 w-full ">
        <h1 className=" font-serif font-light text-6xl text-center lg:text-start">Every idea needs a <span className="font-extrabold">Medium.</span></h1>
      </div>

      <div className="flex flex-col md:flex-col lg:flex-row">
        <div className="w-full mx-auto p-6 outline outline-offset-0 outline-1 lg:w-6/12 lg:mx-0">
            <p className="w-7/12 text-sm lg:ml-40 mt-12 mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Vestibulum lectus mauris ultrices eros in. Sit amet est placerat 
                in egestas. Sit amet consectetur adipiscing elit. Nisi est sit amet facilisis 
                magna etiam tempor. </p>
            <p className="w-7/12 text-sm lg:ml-40 mt-12 mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Vestibulum lectus mauris ultrices eros in. Sit amet est placerat 
                in egestas. Sit amet consectetur adipiscing elit. Nisi est sit amet facilisis 
                magna etiam tempor. Amet luctus venenatis lectus magna fringilla urna porttitor 
                rhoncus. Venenatis tellus in metus vulputate eu scelerisque. Amet consectetur 
                adipiscing elit ut aliquam purus sit amet. Faucibus a pellentesque sit amet porttitor 
                eget dolor morbi </p>
        </div>
        <div className="w-full p-6 outline outline-offset-0 outline-1 lg:w-6/12">
            <img src={bannerimg} alt="banner-img" className=" w-6/12 lg:w-7/12 m-auto"/>
        </div>
      </div>
      </div>
    );
  }
  
  export default Banner;