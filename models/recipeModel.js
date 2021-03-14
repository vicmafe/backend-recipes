const { ObjectId } = require('mongodb');
const connection = require('./connection');

const getAllRecipes = async () =>
  connection()
    .then((db) => db.collection('recipes').find().toArray());

const createNewRecipe = async (recipe) => {
  const { name, ingredients, preparation, userId } = recipe;
  connection()
    .then((db) => db.collection('recipes')
      .insertOne(({
        name,
        ingredients,
        preparation,
        userId,
      })));
};

const findRecipe = async (id) => {
  const product = await connection()
  .then((db) => db
    .collection('recipes')
    .findOne({ _id: ObjectId(id) }))
    .catch(() => false);
return product;
};

module.exports = {
  getAllRecipes,
  createNewRecipe,
  findRecipe,
};
