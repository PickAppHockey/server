
const config = require('./src/Infrastructure/config');
const connectionString = config.connectionString;

module.exports = {
  
    client: connectionString.client,
    connection: connectionString.connection
    
};
