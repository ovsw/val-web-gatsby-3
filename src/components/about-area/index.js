import React, { useState } from "react";
import { Link } from "gatsby";
// import FsLightbox from 'fslightbox-react'

import { StaticImage } from "gatsby-plugin-image";

import ModalVideo from "react-modal-video";

// images
import uncleSamImage from "../../images/uncle-sam.jpg";
import "../../../node_modules/react-modal-video/css/modal-video.min.css";

const AboutArea = () => {
  const [videoToggler, setvideoToggler] = useState(false);

  return (
    <div className="about-area in-section section-padding-top-lg bg-white">
      <div className="kontainer custom-container">
        <div className="row no-gutters">
          <div className="col-xl-6 col-lg-12">
            <div className="about-content heightmatch">
              {/* <h6>about me </h6> */}
              <h2 className="h2" style={{ color: "#2b2b2b" }}>
                VA Home Loan Specialist
              </h2>
              <h3 className="h4" style={{ color: "#ff372f" }}>
                Serving Veterans NATIONWIDE.
              </h3>
              <p>
                My mission is to provide and assist all veterans and active-duty military with all
                their VA Home Loan financing needs.
              </p>
              <ul className="ul-style-1">
                <li>Choose your family’s dream home</li>
                <li>Partner alongside a trusted advisor</li>
                <li>I’ll walk with you through the home loan process</li>
              </ul>
              <Link to="/contact-me/" className="in-button">
                CONTACT ME TODAY
              </Link>
            </div>
          </div>
          <div
            className="col-xl-6 col-lg-6 d-flex align-items-center justify-content-center py-5"
            style={{ background: `url(${uncleSamImage}) no-repeat center center` }}
          >
            <StaticImage
              src="../../images/then-now1.png"
              placeholder="none"
              width={370}
              alt="Jimmy Vercellino, then as a Marine and now as a VA Loan Specialist"
            />
          </div>

          <div
            className="col-xl-6 col-lg-6"
            style={{ cursor: "pointer" }}
            onClick={() => setvideoToggler(!videoToggler)}
          >
            <StaticImage
              src="../../images/jimmy-vercellino-interview-on-good-morning-arizona.jpg"
              alt="Jimmy Vercellino giving interview on the Good Morning Arizona TV show"
              placeholder="none"
              width={640}
              className="w-100"
              style={{ height: "100%" }}
            />
          </div>
          <div className="col-xl-6 col-lg-12 d-flex align-items-stretch">
            <div className="insurencebox d-flex flex-column align-items-start justify-content-center w-100">
              {/* <h4>MY MISSION</h4> */}
              {/* <h3 className='h2'>VIDEO: Interview on 3TV</h3> */}
              <h3 className="h4">
                Jimmy Vercellino talks about VA Home Loans on Good Morning Arizona
              </h3>
              <ul className="ul-style-1">
                <li>VA Loan misconceptions</li>
                <li>New legislation for VA Loans</li>
                <li>Why it's important to speak with a VA Loans Specialist</li>
              </ul>
              <button
                className="in-button in-button-theme"
                onClick={() => setvideoToggler(!videoToggler)}
              >
                {" "}
                <i className="zmdi zmdi-play" style={{ marginRight: "1rem" }} /> Watch Now
              </button>
              <ModalVideo
                channel="youtube"
                isOpen={videoToggler}
                videoId="UgUybgYklkE"
                onClose={() => setvideoToggler(!videoToggler)}
              />

              {/* <form action='#' className='insurencebox-form'>
                <select>
                  <option value='life'>Life Insurence</option>
                  <option value='home'>Home Insurence</option>
                  <option value='travel'>Travel Insurence</option>
                  <option value='business'>Business Insurence</option>
                  <option value='car'>Car Insurence</option>
                  <option value='auto'>Auto Insurence</option>
                </select>
                <input type='text' placeholder='Name *' />
                <input type='text' placeholder='Email *' />
                <input type='text' placeholder='Phone *' />
                <button type='submit' className='in-button'>Submit</button>
              </form> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutArea;
