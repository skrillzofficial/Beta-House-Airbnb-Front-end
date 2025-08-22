import React from "react";
import Hero from "./Hero";
import LoggedInNav from "./LoggedInNav";


const NavHeroLoggedin = () => {
  return (
    <div className="Herobackground">
        <LoggedInNav/>
        <Hero/>
    </div>
  );
};

export default NavHeroLoggedin;
