module.exports = {
  siteMetadata: {
    title: `Ocean artUp`,
    description: `ERC research project investigating artificial upwelling`,
    author: `Janosh Riebesell`,
    siteUrl: `https://www.ocean-artup.eu`,
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: 'dbpftxjar4kc',
        accessToken: 'c84ebd1a474873d15559f1ee04871d21d3c34c1dfe16c4398e71c1195cec1920',
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images-contentful`,
            options: {
              // maxWidth (in pixels) of content container
              // used as base for generating different widths of each image
              maxWidth: 880,
              showCaptions: true,
              backgroundColor: `none`,
            },
          },
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: '***************',
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: "./src/assets/favicon.png",
        injectHTML: true,
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          twitter: false,
          yandex: false,
          windows: false
        }
      }
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}
