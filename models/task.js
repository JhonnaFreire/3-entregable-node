module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define('Task', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    completed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    userId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER
  });

  Task.associate = models => {
    Task.belongsTo(models.User, { as: 'user', foreignKey: 'userId' });
    Task.belongsTo(models.Category, { as: 'category', foreignKey: 'categoryId' });
  };

  return Task;
};
