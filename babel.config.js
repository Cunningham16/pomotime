module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ['module-resolver',
      {
        alias: {
          widgets: "./src/widgets",
          shared: "./src/shared",
          assets: "./assets"
        }
      }]
    ]
  };
};
