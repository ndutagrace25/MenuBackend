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
  saveDish(dish, result) {
    if (Object.keys(dish).length === 0) {
      result({ error: "Name should not be empty" });
    }
    Dish.findOne({
      where: {
        name: dish.name,
        categoryid : dish.categoryid,
        price:dish.price,
      },
    })
      .then((data) => {
        if (data !== null) {
          result({ error: "Dish already Exists" }, null);
        } else {
          Dish.create({
            name: dish.name,
            categoryid : dish.categoryid,
            price:dish.price,
          })
            .then(() => {
              result(null, { message: "success" });
            })
            .catch((error) => {
              result(error, null);
            });
        }
      })
      .catch((error) => {
        result(error, null);
      });
  },
};
