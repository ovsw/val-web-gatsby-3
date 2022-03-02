import React from "react";
import { Link } from "gatsby";

const Highlights = () => {
  return (
    <div className="features-area in-section section-padding-md bg-white">
      <div className="kontainer">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section-title text-center">
              {/* <h6>FAQ</h6> */}
              <h2>Frequently Asked Questions</h2>
            </div>
          </div>
        </div>

        <div className="row features-wrapper">
          <div className="col-lg-4 col-md-6 col-12">
            <div className="in-feature">
              <span className="in-feature-icon">
                <i className="flaticon-mortgage" />
              </span>
              <h4>What is a VA Home Loan?</h4>
              <p>
                VA guaranteed loans are made by private lenders, such as banks, savings & loans, or
                mortgage companies to eligible veterans for the purchase of a home which must be for
                their own personal occupancy. The guaranty means the lender is protected against
                loss if you or a later owner fail to repay the loan. The guaranty replaces the
                protection the lender normally receives by requiring a down payment.
              </p>
              <Link to="/obtaining-a-va-home-loan/" type="submit" className="in-button mt-5">
                Learn More
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="in-feature">
              <span className="in-feature-icon">
                <i className="flaticon-planning" />
              </span>
              <h4>What Types of VA Loans Are Available?</h4>
              <p>
                Whether you are looking for a first mortgage, adding a second mortgage or trying to
                refinance an existing mortgage, it is helpful to understand more about the general
                loan classifications and types of VA loans available to you. Mortgage loans are
                categorized as either fixed rate mortgages (FRM), adjustable rate mortgages (ARM) or
                some combination (hybrid) of the two.
              </p>
              <Link to="/types-of-loans/" type="submit" className="in-button mt-5">
                Learn More
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="in-feature">
              <span className="in-feature-icon">
                <i className="flaticon-lock" />
              </span>
              <h4>Can I Refinance a VA Loan?</h4>
              <p>
                Some worry that refinancing takes too much time and money, but fortunately the
                process is simple. Refinancing is simply the process of paying of your existing loan
                with a new one. Your new loan could be for a better interest rate, a shorter/longer
                term, or a different amount. In fact, your new loan could be an entirely different
                type. For example, instead of an adjustable-rate mortgage you could opt for a
                fixed-rate mortgage.
              </p>
              <Link to="/refinancing/" type="submit" className="in-button mt-5">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Highlights;
