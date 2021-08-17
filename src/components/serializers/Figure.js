import React from 'react'
import Img from 'gatsby-image'
import {getFluidGatsbyImage} from 'gatsby-source-sanity'
import clientConfig from '../../../client-config'

export default ({node}) => {
  // console.log(node.asset.metadata.dimensions.width)
  let fluidProps = getFluidGatsbyImage(
    node.asset._id,
    {maxWidth: 730},
    clientConfig.sanity
  )

  let imageClassName = 'contentImage'

  if (node.asset.metadata.dimensions.width < 700) {
    fluidProps = getFluidGatsbyImage(
      node.asset._id,
      {maxWidth: 400},
      clientConfig.sanity
    )
    imageClassName = imageClassName + ' small'
  }

  if (node.asset.metadata.dimensions.aspectRatio > 1) { imageClassName = imageClassName + ' landscape' } else { imageClassName = imageClassName + ' portrait' }

  return (
    <figure className={imageClassName}>
      <Img fluid={fluidProps} alt={node.alt} />
      <figcaption>{node.caption}</figcaption>
    </figure>
  )
}
