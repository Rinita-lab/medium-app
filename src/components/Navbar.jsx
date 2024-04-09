import React from "react";
import logo from "../assets/logoimg.png"
import { useState, useEffect } from "react";
import { FaAlignJustify, FaRegWindowClose } from "react-icons/fa";
import list from "../list.json"


function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);
  function togglehandler(){
    setMenuOpen(!menuOpen);
  }

  useEffect((event)=>{
    togglehandler(event)
  },[])

    return (
      <>
      <div className=" flex flex-row px-4 outline outline-offset-0 outline-1 justify-between h-3/6">
        
        <img src={logo} alt="logo" className="md:w-52 md:h-28 w-40 h-20 my-auto"/>
        
        
        <div className="flex flex-row">
          <div className="flex flex-row  gap-5 items-center">

            <ul className=" md:flex md:flex-row gap-7 items-center hidden">
                <li className=" hover:underline">Our story</li>
                <li className=" hover:underline">Membership</li>
                <li className=" hover:underline">Write</li>
                <li className=" hover:underline">Sign in</li>
            </ul>
            <button className="bg-black rounded-3xl text-white mx-5 my-6 px-5 py-3 ">Get Started</button>
            <div className=" md:hidden block">

              <button onClick={togglehandler}>
                {
                  !menuOpen? (
                    <FaAlignJustify/>
                  ):(
                    <FaRegWindowClose/>
                  )
                }
              </button>
              
          </div>
          </div>   
        </div>
      </div>


        {
          menuOpen &&
          <div className=" md:hidden flex flex-col items-start w-full px-10 h-32 p-2 outline outline-offset-0 outline-1">
            {
              list.map((item,i)=>(
              <div className="w-full h-12" key={i}>
                <h3 className=" hover:underline">{item.menu}</h3>
              </div>
              ))
            }
          </div>
        } 
      </>


    );
  }
  
  export default Navbar;