
const {shareAll, withModuleFederationPlugin} = require("@angular-architects/module-federation/webpack");
module.exports = withModuleFederationPlugin ({
  remotes:{
    products: 'http://localhost:4300/remoteEntry.js',
    testApp: "http://localhost:4400/remoteEntry.js",
  },
  shared: {
    ...shareAll({
     singleton: true, strictVersion: true, requiredVersion: 'auto'
    })
  }
})
