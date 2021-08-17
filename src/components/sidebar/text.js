import React from 'react'
import {Link} from 'gatsby'

import SideImage from '../../images/2017-award-opt.png'

const Text = () => {
  return (
    <div className='col-lg-12 pt-4 pb-3 mt-2 mb-2' style={{border: '1px solid #2b4d70'}}>
      <h3 className='widget-title mb-2'>
        <span>Get a VA Loan</span>
      </h3>
      <div className='text-center'>
        <p>I am here to help you achieve <br /> home ownership.</p>

        <Link to='/contact-me/' className='in-button in-button-theme2'>
          Contact Me Today!
          {/* <img src='assets/images/icons/paper-plane-white.png'alt='send' /> */}
        </Link>
      </div>

      <p className='mt-4 text-center h5'>
          Or Call Me At<br />
        <a href='tel:602-908-5849'>602-908-5849</a>
      </p>
      <img src={SideImage} alt='Jimmy Vercellino -  Top 1% Mortgage Originators in America, 2017' style={{margin: '0 auto', display: 'block'}} />
    </div>
  )
}

export default Text
