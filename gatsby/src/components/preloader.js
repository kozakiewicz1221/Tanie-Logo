import React, { useEffect } from "react";
import { TweenMax, TimelineMax, Power3, Expo, Back } from "gsap";
import logotyp from "../images/tanielogo-logo.svg";

function Preloader() {
  useEffect(() => {
    TweenMax.set(".logas", { autoAlpha: 0 });

    const tl = new TimelineMax()
      .fromTo(".preloader-inner", 0.1, { opacity: 0 }, { opacity: 1 })
      .fromTo(
        ".logas",
        0.6,
        { scale: 2.4, opacity: 0, autoAlpha: 0 },
        {
          scale: 1.4,
          opacity: 1,
          autoAlpha: 1,
          delay: 0.15,
          ease: Back.easeOut,
        }
      )
      .to(
        ".logas",
        0.3,

        { scale: 0, rotate: 360, opacity: 0, ease: Back.easeIn },
        "-=0.1"
      )

      .to(
        ".preloader-wrapper",
        0.3,
        { scaleY: 0, transformOrigin: "50% 100%", ease: Power3.easeInOut },
        "-=0.1"
      );
  }, []);

  return (
    <div className='preloader-wrapper'>
      <div className='preloader-inner '>
        <span className='pre-logo'>
          <img style={{ width: "150px" }} className='logas' src={logotyp}></img>
        </span>
      </div>
    </div>
  );
}

export default Preloader;
