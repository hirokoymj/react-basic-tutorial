// When you perform server-side rendering with technologies like React, you might have CSS imports or other style-related imports in your code. However, the server-side environment (Node.js) doesn't typically handle CSS directly, as it's not a browser environment and doesn't have the necessary mechanisms to apply styles to the DOM.
require("ignore-styles");

// require(“@babel/register”) imports the babel register module which allows you to transpile ES6+ and React JSX code on the fly. When Node.js import files.

require("@babel/register")({
  //defines which file should be ignored by Babel transpilation.
  ignore: [/(node_module)/],
  // enables certain language features.@babel/preset-env  preset is used to transpile modern JavaScript syntax to older versions of JavaScript. @babel/preset-react is used to transpile JSX syntax to regular JavaScript.
  presets: ["@babel/preset-env", "@babel/preset-react"],
});

require("./server");
