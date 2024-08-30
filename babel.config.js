module.exports = {
  plugins: (() => {
    const plugins = [];

    // Use Babel's official JSX transform for React.
    // https://www.npmjs.com/package/@babel/plugin-transform-react-jsx-development
    // https://www.npmjs.com/package/@babel/plugin-transform-react-jsx
    {
      let jsxplugin;
      switch (process.env.STAGE) {
        case "development":
          jsxplugin = "@babel/plugin-transform-react-jsx-development";
          break;
        case "production":
          jsxplugin = "@babel/plugin-transform-react-jsx";
          break;
      }      
      plugins.push([jsxplugin, {
          // Invoke import('react') automatically anytime a file contains a JSX expression.
          // If this is NOT set to `automatic` we will be required to import React explicitly
          // everytime we want to write a JSX expression. That is inconvenient and unnecessary.
          runtime: 'automatic'
      }]);
      console.log("Using Babel JSX Transform: " + jsxplugin);
    }


    // During development support HMR (Hot Module Replacement) in React via Facebook's official 
    // react-refresh NPM package.
    // https://www.npmjs.com/package/react-refresh
    if (process.env.STAGE === "development")
      plugins.push("react-refresh/babel");

    return plugins;
  })(),

  // https://babeljs.io/docs/options#source-map-options
  inputSourceMap: (() => {
    switch (process.env.STAGE) {
      case "development":
        return true;
      case "production":
        return false;
    }
  })(),

  // https://babeljs.io/docs/options#source-map-options
  sourceMaps: (() => {
    switch (process.env.STAGE) {
      case "development":
        return "inline";
      case "production":
        return false;
    }
  })()
};

