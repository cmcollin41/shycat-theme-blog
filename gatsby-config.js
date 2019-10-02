const path = require('path')

module.exports = {
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path:  'src/content'
      },
    },
    {
      resolve: "gatsby-plugin-page-creator",
      options: {
        name: "blog",
        path: 'src/content',
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: [`.mdx`],
      },
    },

  ]
}