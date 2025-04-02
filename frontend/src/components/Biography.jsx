import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
          At iPhysioPerth, we are dedicated to helping you move better, feel stronger, and live pain-free. As a leading physiotherapy and rehabilitation center, our mission is to provide expert care tailored to your individual needs. With a team of highly skilled professionals, we combine evidence-based treatments with a personalized approach to ensure the best outcomes for our patients.

Whether you're recovering from an injury, managing a chronic condition, or looking to enhance your physical performance, iPhysioPerth is here to support you every step of the way. Our state-of-the-art facility is equipped with advanced techniques and modern technology to deliver high-quality care in a welcoming and supportive environment.

Your health and well-being are our top priorities. At iPhysioPerth, we believe in empowering our patients with the knowledge and guidance they need to take control of their recovery and achieve their wellness goals.
          </p>
        </div>
      </div>
    </>
  );
};

export default Biography;
