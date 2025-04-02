import React from "react";

const Hero = ({ title, imageUrl }) => {
  return (
    <>
      <div className="hero container">
        <div className="banner">
          <h1>{title}</h1>
          <p>
            iPhysioPerth is a cutting-edge healthcare center specializing in holistic physiotherapy and rehabilitation services. Our team of experienced professionals is dedicated to providing personalized treatment plans that cater to each individual's unique needs. At iPhysioPerth, we focus on restoring mobility, enhancing recovery, and promoting overall well-being through expert care and innovative techniques.
          </p>
        </div>
        <div className="banner">
          <img src={imageUrl} alt="hero" className="animated-image" />
          <span>
            <img src="/Vector.png" alt="vector" />
          </span>
        </div>
      </div>
    </>
  );
};

export default Hero;
