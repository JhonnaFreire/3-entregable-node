module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  });

  User.associate = models => {
    User.hasMany(models.Task, { as: 'tasks', foreignKey: 'userId' });
  };

  return User;
};
