module.exports = {
  siteMetadata: {
    title: "Gatsby Default Starter",
    menuLinks: [
      {
        name: "home",
        link: "/",
      },
      {
        name: "page2",
        link: "/page-2",
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: "images",
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.svg",
      },
    },
    {
      resolve: "gatsby-source-storyblok",
      options: {
        accessToken: "H1qminNZJVKJsq5VEshsaAtt",
        version: "draft",
      },
    },
    {
      resolve: `gatsby-transformer-json`,
      options: {
        typeName: `JsonFiles`, // this allows us to query all json files in graphql
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
        ignore: [`**/\.*`], // ignore files starting with a dot
      },
    },
  ],
  flags: {
    DEV_SSR: false,
    FAST_DEV: false,
    PRESERVE_FILE_DOWNLOAD_CACHE: false,
    PARALLEL_SOURCING: false,
    LMDB_STORE: false,
  },
}
