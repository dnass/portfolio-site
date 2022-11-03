module.exports = {
  siteMetadata: {
    title: `Daniel Nass`,
    subtitle: `News&nbsp;⧉&nbsp;Data&nbsp;⧉&nbsp;Graphics&nbsp;⧉&nbsp;Code`,
    description: `Newsroom developer Daniel Nass creates interactive and data-driven stories.`,
    phone: `(781) 354-6246`,
    email: `dnlnss [at] gmail [dot] com`,
    location: `Toronto, Ont.`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-postcss`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,
    `gatsby-transformer-json`,
    `gatsby-plugin-layout`,
    `gatsby-plugin-netlify`,
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
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [`G-4PYXHZD8D3`]
      }
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true,
        purgeCSSOptions: {
          safelist: ['svg-inline--fa', 'fa-3x']
        }
      }
    }
    // {
    //   resolve: `gatsby-plugin-webpack-bundle-analyzer`,
    //   options: {
    //     production: false
    //   }
    // }
  ]
}
