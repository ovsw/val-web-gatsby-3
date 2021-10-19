import React from "react"; // eslint-disable-line
import { Helmet } from "react-helmet";
// import HomeTestimonialItem from './HomeTestimonialItem'

const HomeTestimonials = () => {
  return (
    <>
      <Helmet>
        <script src="https://embedsocial.com/embedscript/ri.js" />
      </Helmet>
      <section className="in-section section-padding-top-lg bg-white">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-title text-center">
                <h2> Customer Reviews</h2>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-12">
              <div
                className="embedsocial-reviews"
                data-ref="dbf6aa080360d368baaa5c359edfb1d06eab94c0"
              >
                {/* this iframe would normally be loaded by the embedsocial script. To add a trailing slash on the iframe source (by request from Sting) I've manually pasted it below */}
                <iframe
                  src="https://embedsocial.com/api/reviews/widget/eceb16c40e50a0247dc0ff338d96b63265739ea7/"
                  id="embedIFrame_eceb16c40e50a0247dc0ff338d96b63265739ea7ffb8gl"
                  className="embedsocial-reviews-iframe"
                  scrolling="no"
                  style={{ width: "100%", height: "591px", border: "0px", overflow: "hidden" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeTestimonials;
