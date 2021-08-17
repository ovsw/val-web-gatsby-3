import React from 'react'

const Service = ({title, description, icon}) => {
  return (<div className='col-lg-4 col-md-6 col-sm-6 col-12 d-flex' >
    <div className='in-service mt-30' style={{width: '100%'}}>
      <span className='in-service-icon'>
        <i className={icon} />
      </span>
      <h5 style={{color: 'red'}}>{title}</h5>
      {/* <p>{description}</p> */}
      <span className='in-service-transparenticon'>
        <i className={icon} />
      </span>
    </div>
  </div>)
}

export default Service
