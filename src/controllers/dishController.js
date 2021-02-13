// import packages for db connection
const sequelize = require("sequelize");

const Dish = require("../../models").Dish;

module.exports = {
  // fetch all disheshes
  getDishes(result) {
    Dish.findAll({
      include: ["category_name"]
    })
      .then((dishes) => {
        result(null, dishes);
      })
      .catch((error) => result(error, null));
  },
};
