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

const updateRecipes = async (id, recipeToUpdate) => {
  const { name, ingredients, preparation, userId } = recipeToUpdate;
  await connection().then((db) => {
    db.collection('recipes')
      .updateOne({ _id: ObjectId(id) }, { $set: { name, ingredients, preparation, userId } });
  });
  return recipeToUpdate;
};

const deleteRecipes = async (id) => {
  await connection().then((db) =>
    db.collection('recipes').deleteOne({ _id: ObjectId(id) }));
};

module.exports = {
  getAllRecipes,
  createNewRecipe,
  findRecipe,
  updateRecipes,
  deleteRecipes,
};
