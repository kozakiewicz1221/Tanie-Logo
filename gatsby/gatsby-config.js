require("dotenv").config();

module.exports = {
  siteMetadata: {
    title: `Tanie Logo Firmowe od 47zł nawet w 12h + Poprawki w cenie`,
    description: `Zamów najtańsze logo w Polsce! Elastyczne pakiety. Ponad 2000 realizacji. Prawa autorskie na piśmie. Pliki wektorowe i źródłowe. Projekt wizytówki, ulotki.`,
    author: `Tanie Logo`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require(`tailwindcss`)],
      },
    },
    {
      resolve: "@mkitio/gatsby-theme-password-protect",
      options: {
        password: "!LoLeQ3@1",
        pagePaths: ["/admin"],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Tanie Logo`,
        short_name: `Tanie Logo`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
      },
    },
    `gatsby-plugin-offline`,

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
