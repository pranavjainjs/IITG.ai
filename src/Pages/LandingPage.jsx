import React from "react";
import Marquee from "../Components/Marquee";
import LandingPageProjects from "../Components/Landing/Projects";
import Events from "../Components/Landing/Events";
import { Splide } from "@splidejs/splide";
import MainHeader from "../ConstantComponents/MainHeader";

const LandingPage = () => {
  document.addEventListener("DOMContentLoaded", function () {
    var splide = new Splide(".splide");
    splide.mount();
  });

  return (
    <div>
      <MainHeader />
      <Marquee />

      <div className="mt-20">
        <img src="team/people.png" className="bg-black border" />
      </div>

      {/* <TeamMemberCard /> */}
      <LandingPageProjects />

      <Events />
      {/* <FooterNav /> */}
    </div>
  );
};

export default LandingPage;
