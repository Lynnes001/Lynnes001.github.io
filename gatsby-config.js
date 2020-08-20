plugins: [`gatsby-transformer-sharp`, `gatsby-plugin-sharp`]

const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: `Title from siteMetadata`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `data`),
      },
    },
    {
        resolve: "gatsby-transformer-remark",
        options: {
          plugins: [] // just in case those previously mentioned remark plugins sound cool :)
        }
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    // "gatsby-plugin-catch-links",
    "gatsby-plugin-react-helmet",
  ],
}