import React from 'react'
import {Link} from 'gatsby'

import styles from './cta.module.css'

const CTA = ({title, text, url}) => {
  return (
    <div className={`${styles.root} col-lg-12 mb-2`}>
      <div className='py-3' >

        <div className='side-cta'>
          <Link to={url} className='side-apply'>
            <h2 className={styles.heading}>
              <span>{title}</span>
            </h2>
            <p>{text}</p>
          </Link>
        </div>

      </div>
    </div>
  )
}

export default CTA
