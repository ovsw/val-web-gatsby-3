import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

import QA from './qa'

const FAQArea = ({sectionTitle, sectionSubtitle, faqContent}) => {
  const {sectionBg} = useStaticQuery(
    graphql`
    query {
      sectionBg: file(relativePath: { eq: "bg/background-image-1.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
    `
  )

  const backgroundFluidImageStack = [
    sectionBg.childImageSharp.fluid,
    `linear-gradient(rgba(3, 27, 56, 0.9), rgba(3, 27, 56, 0.9))`
  ].reverse()

  return (
    <BackgroundImage
      Tag='div'
      className='calltoaction-area in-section section-padding-lg dark'
      fluid={backgroundFluidImageStack}
      backgroundColor={`#163963`}
      fadeIn={false}
    >

      <div className='container'>
        <div className='row justify-content-center in-cta'>
          <div className='col-lg-8' >
            <div className='section-title text-center'>
              {sectionSubtitle && <h6>{sectionSubtitle}</h6>}
              <h2>{sectionTitle}</h2>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-12'>
            <div className='faequently-accordion'>
              {faqContent && faqContent.map((QandA, index) => <QA key={index} item={index + 1} {...QandA} />)}
            </div>
          </div>
        </div>
      </div>
    </BackgroundImage>
  )
}

export default FAQArea
