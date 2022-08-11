const path = require('path')

module.exports = {
    distDir: 'build',
    images:{
        loader:'akamai',
        path:"",
    },
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    trailingSlash: true,
}