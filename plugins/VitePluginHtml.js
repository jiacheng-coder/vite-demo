const createHtmlPlugin = ({ inject }) => {
  return {
    transformIndexHtml: {
      enforce: 'pre',
      transform: (html, ctx) => {
        return html.replace(/<%= title %>/g, inject.data.title)
      },
    },
  }
}
module.exports = {
  createHtmlPlugin,
}
