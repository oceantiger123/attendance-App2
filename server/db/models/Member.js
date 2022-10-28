const Sequelize = require('sequelize');
const db = require('../db')

const Member = db.define('member', {
  name: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  phone: {
      type: Sequelize.TEXT,
      allowNull: true
      // validate: {
      //   notEmpty: false
      // }
  },
  image: {
    type: Sequelize.TEXT,
    allowNull: true,
    defaultValue: "https://image.shutterstock.com/image-vector/human-head-icon-profile-black-600w-1916481893.jpg"
  }
});

module.exports = Member
