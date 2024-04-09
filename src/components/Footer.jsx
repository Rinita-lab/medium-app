import React from "react";


function Footer() {
    return (
        <div className="flex flex-col justify-center items-center m-6">
            <div>
                <h2 className="font-bold text-2xl m-6">Medium</h2>
            </div>
            <div className="flex flex-row">
                <ul className="flex flex-row gap-5 underline underline-offset-2 mb-4">
                    <li>Terms</li>
                    <li>Privacy</li>
                    <li>Help</li>
                </ul>
            </div>

        </div>
    );
  }
  
  export default Footer;