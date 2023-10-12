
const { shareAll, withModuleFederationPlugin } = require("@angular-architects/module-federation/webpack");
module.exports = withModuleFederationPlugin ({
  name: "products",
  exposes:{
    // './Module': './projects/products-app/src/app/products/products.module.ts',
    './Component':'./projects/products-app/src/app/app.module.ts'
  },
  shared: {
    ...shareAll({
     singleton: true, strictVersion: true, requiredVersion: 'auto'
    })
  }
})
// module.exports = {
//   ...plugins: [
//     new ModuleFederationPlugin({
//       name: "products",
//       library: { type: 'var', name: 'products' },
//       filename: 'remoteEntry.js',
//       exposes: {
//         './App1Module': './src/app/app.module.ts'
//       }
//     })
//   ]
// }
