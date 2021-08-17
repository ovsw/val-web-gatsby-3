import React from 'react'

const InnerPageHeader = ({title}) => {
  return (
    <div className='breadcrumb-area' style={{backgroundImage: 'url(/images/bg/breadcrumb-bg-1.jpg)'}} data-black-overlay='4'>
      <div className='container'>
        <div className='in-breadcrumb'>
          <div className='row align-items-center'>
            <div className='col'>
              <h1 style={{color: 'white'}}>{title}</h1>
              {/* <ul>
                <li><a href='index.html'>Home</a></li>
                <li>Blog</li>
              </ul> */}
            </div>
            {/* <div className='col'>
              <h6>Blog Details</h6>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default InnerPageHeader
