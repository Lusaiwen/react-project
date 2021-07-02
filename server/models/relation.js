const User = require('./User');
const Blog = require('./Blog');
const Comment = require('./Comment');

User.hasMany(Blog);
Blog.belongsTo(User);

Blog.hasMany(Comment);
User.hasMany(Comment);

Comment.belongsTo(Blog);
Comment.belongsTo(User);
