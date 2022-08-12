const path = require('path')

module.exports = {
    distDir: 'build',
    images:{
        loader:'akamai',
        path:"",
    },
    basePath:"/nextjs-pages",
    assetPrefix:"/nextjs-pages",
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    trailingSlash: true,
}