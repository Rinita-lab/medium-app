import React from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Users from "./components/Users";
import Readers from "./components/Readers";
import Membership from "./components/Membership";
import Blog from "./components/Blog";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Users/>
      <Readers/>
      <Membership/>
      <Blog/>
      <Footer/>
    </div>
  );
}

export default App;
