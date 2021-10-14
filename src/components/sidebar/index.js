import React from "react";

import CTA from "./cta";
import Text from "./text";
import Social from "./social";

const Sidebar = ({ loanCta, storyCta, blogCta, path, noBlogLink }) => {
  return (
    <div className="col-lg-4">
      <div className="row widgets right-sidebar">
        {!(path === "/apply/" || path === "/apply") && (
          <CTA
            title="Apply: VA Loan"
            text="I am here to help you get your dream home. Click here to start the VA Loan application process."
            url="https://connect.valoansforvets.com/"
          />
        )}
        {!(path === "/my-story/" || path === "/my-story") && (
          <CTA
            title="My Story"
            text="I am a committed and passionate professional who puts my VA Loan clients above all else."
            url="/my-story/"
          />
        )}
        {!noBlogLink && (
          <CTA
            title="Blog"
            text="Follow my regular updates on information in the mortgage industry and VA Loans."
            url="/blog/"
          />
        )}

        <Text />
        <Social />

        {/* <div className='col-lg-12'>
          <div className='single-widget widget-search'>
            <form action='#' className='widget-search-form'>
              <input type='text' placeholder='Search...' />
              <button type='submit'><i className='zmdi zmdi-search' /></button>
            </form>
          </div>
        </div> */}

        {/* <div className='col-lg-12'>
          <div className='single-widget widget-categories'>
            <h4 className='widget-title'>
              <span>Categories</span>
            </h4>
            <ul>
              <li><a href='#'><span>Life Insurence</span></a></li>
              <li><a href='#'><span>Business Insurence</span></a></li>
              <li><a href='#'><span>Car Insurence</span></a></li>
              <li><a href='#'><span>Home Insurence</span></a></li>
              <li><a href='#'><span>Travel Insurence</span></a></li>
              <li><a href='#'><span>Agricultural Insurence</span></a></li>
            </ul>
          </div>
        </div> */}

        {/* <div className='col-lg-12'>
          <div className='single-widget widget-latestblog'>
            <h4 className='widget-title'>
              <span>Latest Blog</span>
            </h4>
            <ul>
              <li>
                <div className='widget-latestblog-image'>
                  <a href='blog-details.html'>
                    <img src='assets/images/blog/thumbnails/blog-thumbnail-1.png'
                      alt='blog thumbnail' />
                  </a>
                </div>
                <span>1st Janu, 2018</span>
                <h5><a href='blog-details.html'>Ipsam rerum nisi beatae et</a></h5>
              </li>
              <li>
                <div className='widget-latestblog-image'>
                  <a href='blog-details.html'>
                    <img src='assets/images/blog/thumbnails/blog-thumbnail-2.png'
                      alt='blog thumbnail' />
                  </a>
                </div>
                <span>1st Janu, 2018</span>
                <h5><a href='blog-details.html'>Ipsam rerum nisi beatae et</a></h5>
              </li>
              <li>
                <div className='widget-latestblog-image'>
                  <a href='blog-details.html'>
                    <img src='assets/images/blog/thumbnails/blog-thumbnail-3.png'
                      alt='blog thumbnail' />
                  </a>
                </div>
                <span>1st Janu, 2018</span>
                <h5><a href='blog-details.html'>Illum sint quo provident</a></h5>
              </li>
            </ul>
          </div>
        </div> */}

        {/* <div className='col-lg-12'>
          <div className='single-widget widget-newsletter'>
            <h4 className='widget-title'>
              <span>Newsletter</span>
            </h4>
            <p>Lorem ipsum dolor sit amet, coadipisicint, sed do eiusmod tempor incididunt</p>
            <form action='#' className='widget-newsletter-form'>
              <input type='text' placeholder='Your email...' />
              <button type='submit'>
                <img src='assets/images/icons/paper-plane-white.png'
                  alt='send' /></button>
            </form>
          </div>
        </div> */}

        {/* <div className='col-lg-12'>
          <div className='single-widget widget-newsletter'>
            <h4 className='widget-title'>
              <span>Tag</span>
            </h4>
            <div className='tag-list'>
              <a href='#'>Business</a>
              <a href='#'>FIi nance</a>
              <a href='#'>Tax</a>
              <a href='#'>Insuranc</a>
              <a href='#'>Cost Plan</a>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Sidebar;
