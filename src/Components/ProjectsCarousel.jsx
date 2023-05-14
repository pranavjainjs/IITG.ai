import React from "react";
import "@splidejs/splide/css";
// import Splide from "@splidejs/splide";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import RightArrowIcon from "../Icons/RightArrowIcon";
import LeftArrowIcon from "../Icons/LeftArrowIcon";
import TempCard from "../Images/tempcard.svg";
import ProjectDescription from "./Landing/ProjectDescription";

const ProjectsCarousel = () => {
  return (
    <div>
      
      <Splide
        hasTrack={false}
        options={{
          rewind: true,
          //   autoWidth: true,
          autoplay: true,
          interval: 2000,
          lazyLoad: "sequential",
          keyboard: "global",
          perPage: 4,
          perMove: 1,
          pagination: false,
          focus: "center center",
          type: "loop",
          easing: "ease",
          arrows: true,
          focus: 1,
          gap: 10,
        }}
      >
        <SplideTrack className="mx-20">
          <SplideSlide>
            <div
              id="carouselCard"
              onMouseOver={() => {
                // document.getElementById("carouselCard").childNodes[1];
              }}
            >
              <img src={TempCard} />
              <div className="hidden">
                <ProjectDescription />
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <img src={TempCard} />
          </SplideSlide>
          <SplideSlide>
            <img src={TempCard} />
          </SplideSlide>
          <SplideSlide>
            <img src={TempCard} />
          </SplideSlide>
        </SplideTrack>

        <div className="splide__arrows">
          <LeftArrowIcon
            style={{ backgroundColor: "black" }}
            className="splide__arrow splide__arrow--prev "
          />
          <RightArrowIcon
            style={{ backgroundColor: "black" }}
            className="splide__arrow splide__arrow--next"
          />
        </div>
      </Splide>
    </div>
  );
};

export default ProjectsCarousel;
