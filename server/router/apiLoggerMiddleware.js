const { apiLogger, logger } = require('../logger');
const log4js = require('log4js');


// module.exports = log4js.connectLogger(apiLogger);



module.exports = log4js.connectLogger(apiLogger, {
    level: 'auto'
  })

