import React from 'react'
import Helmet from 'react-helmet'
import {StaticQuery, graphql} from 'gatsby'
import {imageUrlFor} from '../lib/image-url'
import {buildImageObj} from '../lib/helpers'

import {
  // websiteSchema,
  localBusinessSchema,
  // professionalServiceSchema,
  // breadCrumbsList,
  // organizationSchema,
  // reviewSchema,
  // faqPageSchema
} from './schemas'

import config from '../../config/website'

function SEO ({description, meta, title, image, noIndex = false, slug = ''}) {

  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const siteTitle = title || (data.siteSettings && data.siteSettings.title)
        const metaDescription = description || (data.siteSettings && data.siteSettings.description) || ''
        const metaImage = (image && image.asset) ? imageUrlFor(buildImageObj(image)).width(1200).url() : `${config.siteUrl}${config.defaultImage}`
        // const siteAuthor = (data.siteSettings && data.siteSettings.author && data.siteSettings.author.name) || ''

        // schema.org in JSONLD format
        // https://developers.google.com/search/docs/guides/intro-structured-data
        // You can fill out the 'author', 'creator' with more data or another type (e.g. 'Organization')

        return (
          <Helmet>
            <html lang={config.siteLanguage} />
            <title>{siteTitle}</title>
            <link rel='apple-touch-icon' sizes='180x180' href='/favicons/apple-touch-icon.png' />
            <link rel='icon' type='image/png' sizes='32x32' href='/favicons/favicon-32x32.png' />
            <link rel='mask-icon' href='/favicons/safari-pinned-tab.svg' color={config.themeColor} />
            <link rel='icon' type='image/png' sizes='16x16' href='/favicons/favicon-16x16.png' />
            <link rel='shortcut icon' href='/favicon.ico' />

            <link rel='canonical' href={`${config.siteUrl}/${slug}${slug ? '/' : ''}`} />

            <meta name='msapplication-TileColor' content={config.backgroundColor} />
            <meta name='theme-color' content={config.themeColor} />

            {noIndex && <meta name='robots' content='noindex' />}

            <meta name='msapplication-config' content='/browserconfig.xml' />
            <meta name='description' content={metaDescription} />
            <meta name='image' content={metaImage} />
            <meta property='og:locale' content={config.ogLanguage} />
            <meta property='og:site_name' content={config.ogSiteName} />
            <meta property='og:title' content={siteTitle} />
            <meta property='og:type' content='website' />
            <meta property='og:description' content={metaDescription} />
            <meta property='og:image' content={metaImage} />
            {(image && image.alt) ? `<meta property='og:image:alt' content=${image.alt} />` : `` }
            {config.siteFBAppID && <meta property='fb:app_id' content={config.siteFBAppID} />}
            <meta name='twitter:card' content='summary_large_image' />
            <meta name='twitter:creator' content={config.userTwitter ? config.userTwitter : ''} />
            <meta name='twitter:title' content={siteTitle} />
            {/*<meta name='twitter:description' content={metaDescription} />*/}
            {/*<meta name='twitter:image' content={metaImage} />*/}
            {/*<meta name='twitter:image:alt' content={metaDescription} />*/}
            <meta name='google-site-verification' content='QS8GjLT3XOeeEU9Mc6NgrGNBUPlH144c9LGV_RXQWKk' />
            {/* <script type='application/ld+json'>{JSON.stringify(websiteSchema)}</script> */}
            <script type='application/ld+json'>{JSON.stringify(localBusinessSchema)}</script>
            {/* <script type='application/ld+json'>{JSON.stringify(professionalServiceSchema)}</script> */}
            {/* <script type='application/ld+json'>{JSON.stringify(breadCrumbsList)}</script> */}
            {/* <script type='application/ld+json'>{JSON.stringify(organizationSchema)}</script> */}
            {/* <script type='application/ld+json'>{JSON.stringify(reviewSchema)}</script> */}
            {/* <script type='application/ld+json'>{JSON.stringify(faqPageSchema)}</script> */}
          </Helmet>
        )
      }}
    />
  )
}

export default SEO

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      buildTime(formatString: "YYYY-MM-DD")
    }
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
