module.exports = {
  siteMetadata: {
    title: `Daniel Nass`,
    subtitle: `News ⧉ Data ⧉ Graphics ⧉ Code`,
    description: `Visual journalist Daniel Nass creates interactive and data-driven stories.`,
    phone: `(781) 354-6246`,
    email: `dnlnss [at] gmail [dot] com`,
    location: `Brooklyn, N.Y.`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-postcss`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-json`,
    `gatsby-plugin-layout`,
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
