const path = require('path')

module.exports = {
    distDir: 'build',
    images:{
        loader:'akamai',
        path:"",
    },
    basePath:"/rumsan-wallet-website",
    assetPrefix:"/rumsan-wallet-website",
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    trailingSlash: true,
}