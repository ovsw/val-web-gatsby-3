import React from 'react'
import {Link} from 'gatsby'
import Figure from './Figure'
import getYouTubeId from 'get-youtube-id'
import isAbsoluteURL from 'is-absolute-url'

import YouTube from 'react-youtube'
import Table from './Table'
import Embed from './Embed'

const YTopts = {
  width: '100%',
  playerVars: { // https://developers.google.com/youtube/player_parameters
    modestbranding: 1,
    rel: 0
  }
}

const serializers = {
  types: {
    authorReference: ({node}) => <span>{node.author.name}</span>,
    mainImage: Figure,
    youtube: ({node}) => {
      const {url} = node
      const id = getYouTubeId(url)
      return (<YouTube videoId={id} opts={YTopts} />)
    },
    mytable: Table,
    iframeEmbed: Embed
  },
  marks: {
    button: props => {
      const url = props.mark.href
      const isExternal = isAbsoluteURL(url)
      if (isExternal) {
        return <a href={url} rel='noopener noreferrer' target='_blank' className='in-button in-button-theme'><span>{props.children}</span></a>
      } else {
        return <Link to={url} activeClassName='active' className='in-button in-button-theme'><span>{props.children}</span></Link>
      }
    },
    // link: ({mark, children}) => {
    //   // Read https://css-tricks.com/use-target_blank/
    //   const {blank, href} = mark
    //   const isExternal = isAbsoluteURL(href)
    //   if (isExternal) {
    //     return <a href={href} className='externalLink' rel='noopener noreferrer' target='_blank'>{children}</a>
    //     // return blank
    //     //   ? <a href={href} className='externalLink' rel='noopener noreferrer' target='_blank'>{children}</a>
    //     //   : <a href={href}>{children}</a>
    //   } else {
    //     if (href.charAt(0) === '/') {
    //       return <a href={`${config.siteUrl}${href}`}>{children}</a>
    //     } else {
    //       return <a href={href}>{children}</a>
    //     }
    //   }
    // },
    internalLink: ({ mark, children }) => {
      return <Link to={`/${mark.reference.slug.current}/`} >{children}</Link>;
    }
  }
}

export default serializers
