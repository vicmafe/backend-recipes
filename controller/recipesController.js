const { Router } = require('express');
const {
  newRecipe,
  lastRecipe,
  searchAllRecipes,
  findRecipeById,
} = require('../service/recipeServices');
const {
  validateRecipe,
  verifyAuthorization,
  verifyExistRecipe,
} = require('../service/validatesRecipe');

const router = Router();
const SUCCESS = 200;
const CREATED = 201;

router.post('/', validateRecipe, verifyAuthorization, async (req, res) => {
  const recipeBody = req.body;
  const { _id } = req.payload;
  recipeBody.userId = _id;
  await newRecipe(recipeBody);
  const recipe = await lastRecipe(recipeBody);
  return res.status(CREATED).json({ recipe });
});

router.get('/', async (_req, res, _next) => {
  const allRecipes = await searchAllRecipes();
  return res.status(SUCCESS).json(allRecipes);
});

router.get('/:id', verifyExistRecipe, async (req, res) => {
  const { id } = req.params;
  const foundedRecipe = await findRecipeById(id);
  return res.status(SUCCESS).json(foundedRecipe);
});

router.post('/');

module.exports = router;