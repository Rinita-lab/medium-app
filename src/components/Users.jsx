import React from "react";
import avatar from "../assets/avatar.png"

function Users() {
    const authors = [
        'Ericka Dhawan',
        'Devon Price',
        'GEN',
        'Scott Galloway',
        'Kaki Okumura',
        'Hal H. Harris',
        'OneZero',
        'Carvell Wallace',
        'Elemental',
        'Sarah Cottrell',
        'Forge',
        'LEVEL',
      ];
    return (
        
      <div className="bg-[#fed7aa]">
        <h1 className=" font-normal lg:text-6xl text-4xl px-32 pt-32 md:w-7/12 m-auto text-center w-full">A living network of curious minds.</h1>
        <p className=" font-light text-sm p-8 lg:w-5/12 m-auto text-center w-10/12">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Vestibulum lectus mauris ultrices eros in. Sit amet est placerat 
                in egestas. Sit amet consectetur adipiscing elit. Nisi est sit amet facilisis 
                magna etiam tempor.</p>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 p-20  grid-cols-1">
          {authors.map((author, index) => (
            <div key={index} className="border-y-2 border-black flex flex-row items-center">
               <img src={avatar} className="w-10 h-10 mx-2"/>
              {author}
            </div>
          ))}
        </div>

      </div>
    );
  }
  
  export default Users;