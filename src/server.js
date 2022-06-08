const App = require('./app');
const config = require('./config/config.json');
const env = process.env.NODE_ENV;
const configuration = config[env];

App.listen(configuration.PORT, () => {
  console.log(`server running on port ${configuration.PORT}`);
});
