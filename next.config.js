const path = require('path')

module.exports = {
    distDir: 'build',
    images:{
        loader:'akamai',
        path:"",
    },
    basePath:"/rumsan-wallet-website-pages",
    assetPrefix:"/nextjs-pages",
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    trailingSlash: true,
}