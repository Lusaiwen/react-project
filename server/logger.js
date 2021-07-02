const log4js = require('log4js');
const path = require('path');

function getCommonAppender(pathSeg) {
    return {
        //定义一个sql日志出口
        type: 'dateFile',
        filename: path.resolve(__dirname, 'logs', pathSeg, 'logging.log'),
        maxLogSize: 1024 * 1024,
        daysToKee: 3,
        keepFileExt: true,
        layout: {
            type: 'pattern',
            pattern: '%c [%d] [%p]: %m%n'
        }
    };
}

log4js.configure({
    appenders: {
        sql: getCommonAppender('sql'),
        default: {
            type: 'stdout' //控制台输出
        },
        api: getCommonAppender('api')
    },
    categories: {
        sql: {
            appenders: ['sql'], //该分类使用出口sql的配置写入日志
            level: 'all'
        },
        default: {
            appenders: ['default'],
            level: 'all'
        },
        api: {
            appenders: ['api'],
            level: 'all'
        }
    }
});

process.on('exit', () => {
    log4js.shutdown();
});

exports.sqlLogger = log4js.getLogger('sql');
exports.logger = log4js.getLogger();
exports.apiLogger = log4js.getLogger('api');

console.log(exports.sqlLogger, exports.apiLogger, exports.logger);
