const config = require("./content/meta/config");

const sourceFilesystem = [
  {
    resolve: "gatsby-source-filesystem",
    options: {
      name: "uploads",
      path: `${__dirname}/static/assets/img`,
    },
  },
  {
    resolve: "gatsby-source-filesystem",
    options: {
      name: "images",
      path: `${__dirname}/src/images`,
    },
  },
  {
    resolve: "gatsby-source-filesystem",
    options: {
      name: "posts",
      path: `${__dirname}/content/posts`,
    },
  },
];

module.exports = {
  siteMetadata: {
    title: config.site.title,
    description: config.site.description,

    author: config.author.name,
    aboutAuthor: config.author.about,
    profession: config.author.profession,
  },
  plugins: [
    ...sourceFilesystem,
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 1440,
              linkImagesToOriginal: true,
            },
          },
          "gatsby-remark-lazy-load",
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: true,
              noInlineHighlight: false,
              prompt: {
                user: "root",
                host: "localhost",
                global: false,
              },
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "gatsby-starter-default",
        short_name: "starter",
        start_url: "/",
        background_color: "#663399",
        theme_color: "#663399",
        display: "minimal-ui",
        icon: config.site.icon, // This path is relative to the root of the site.
      },
    },
  ],
};
