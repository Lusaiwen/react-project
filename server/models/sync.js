require('./User');
require('./Blog')
require('./Comment')
const sequelize = require('./db');
sequelize.sync({ alter: true }).then((res) => {
    console.log('所有模型已经被初始化');
});
