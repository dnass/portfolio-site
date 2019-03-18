module.exports = {
  siteMetadata: {
    title: `Daniel Nass`,
    subtitle: `Visual Journalist`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-postcss`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Daniel Nass`,
        short_name: `Daniel Nass`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#0b4182`,
        icon: `src/img/favicon.png`,
        include_favicon: true
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/img/`
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-101609250-1`
      }
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true,
        whitelist: ['svg-inline--fa', 'fa-w-14', 'fa-w-18', 'fa-3x']
      }
    }
  ]
}
