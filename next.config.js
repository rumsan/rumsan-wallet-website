const path = require('path')

module.exports = {
    distDir: 'build',
    images:{
        loader:'akamai',
        path:"",
    },
    basePath:"/",
    assetPrefix:"/",
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    trailingSlash: true,
}
