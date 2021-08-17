import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import {StaticQuery, graphql} from 'gatsby'
import {imageUrlFor} from '../lib/image-url'
import {buildImageObj} from '../lib/helpers'

import config from '../../config/website'

function SEO ({description, meta, keywords, title, seoTitle, image}) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const metaDescription = description || (data.siteSettings && data.siteSettings.description) || ''
        const siteTitle = (data.siteSettings && data.siteSettings.title) || seoTitle
        const siteAuthor = (data.siteSettings && data.siteSettings.author && data.siteSettings.author.name) || ''
        const metaImage = (image && image.asset) ? imageUrlFor(buildImageObj(image)).width(1200).url() : config.siteLogo

        return (
          <Helmet
            htmlAttributes={config.siteLanguage}
            title={siteTitle}
            // titleTemplate={title === siteTitle ? '%s' : `%s | ${siteTitle}`}
            meta={[
              {
                name: 'description',
                content: metaDescription
              },
              {
                property: 'og:title',
                content: title
              },
              {
                property: 'og:description',
                content: metaDescription
              },
              {
                property: 'og:type',
                content: 'website'
              },
              {
                property: 'og:image',
                content: metaImage
              },
              {
                name: 'twitter:card',
                content: 'summary'
              },
              {
                name: 'twitter:creator',
                content: siteAuthor
              },
              {
                name: 'twitter:title',
                content: title
              },
              {
                name: 'twitter:description',
                content: metaDescription
              }
            ]
              .concat(meta)}
          >
            <link rel='apple-touch-icon' sizes='180x180' href='/favicons/apple-touch-icon.png' />
            <link rel='icon' type='image/png' sizes='32x32' href='/favicons/favicon-32x32.png' />
            <link rel='icon' type='image/png' sizes='16x16' href='/favicons/favicon-16x16.png' />
            <link rel='mask-icon' href='/favicons/safari-pinned-tab.svg' color={config.themeColor} />
            <meta name='msapplication-TileColor' content={config.backgroundColor} />
            <meta name='theme-color' content={config.themeColor} />
          </Helmet>
        )
      }}
    />
  )
}

SEO.defaultProps = {
  lang: 'en',
  meta: [],
  keywords: []
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired
}

export default SEO

const detailsQuery = graphql`
  query DefaultSEOQuery2 {
    siteSettings: sanitySiteSettings(_id: {eq: "siteSettings"}) {
      title
      description
      keywords
      author {
        name
      }
    }
  }
`
