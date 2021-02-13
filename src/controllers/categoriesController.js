// import packages for db connection
const sequelize = require("sequelize");

const Category = require("../../models").Category;
const Dish = require("../../models").Dish;

module.exports = {
	// fetch all categories
	getCategories(result) {
		Category.findAll()
			.then((categories) => {
				result(null, categories);
			})
			.catch((error) => result(error, null));
	},

	//   save category
	saveCategory(category, result) {
		if (Object.keys(category).length === 0) {
			result({ error: "Name should not be empty" });
		}
		Category.findOne({
			where: {
				name: category.name,
			},
		})
			.then((data) => {
				if (data !== null) {
					result({ error: "Category Exists" }, null);
				} else {
					Category.create({
						name: category.name,
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

	// delete category
	deleteCategory(id, result) {
		if (Object.keys(id).length === 0) {
			result({ error: "You havenot provided any category to delete" });
		}
		Category.destroy({
			where: {
				id: id.id,
			},
		}).then(() => {
			Dish.destroy({
				where: {
					categoryid: id.id,
				},
			})
				.then(() => {
					result(null, { message: "Category deleted" });
				})
				.catch((error) => {
					result(error, null);
				});
		});
	},
};
