module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    name: DataTypes.STRING,
    description: DataTypes.STRING
  });

  Category.associate = models => {
    Category.hasMany(models.Task, { as: 'tasks', foreignKey: 'categoryId' });
  };

  return Category;
};
