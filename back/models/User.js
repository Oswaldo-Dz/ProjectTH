const Sequelize = require('sequelize');
const sequelize = new Sequelize('dbthegarage', 'postgres', '123', {
  host: 'localhost',
  dialect: 'postgres'
});

const User = sequelize.define('User', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  }
});


User.methods.usernameExist = async function(username) {
  const result = await sequelize(User).finOne({username});
  return result > 0;
};
// Don't define an 'id' column in Sequelize as it's typically handled automatically by PostgreSQL as a serial primary key.

(async () => {
  await sequelize.sync(); // Creates the table if it doesn't exist
})();

module.exports = User;
