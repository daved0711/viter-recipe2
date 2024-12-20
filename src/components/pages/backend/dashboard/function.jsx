export const getFoodByCategory = (categoryId, dataFood) => {
  let result = [];

  dataFood?.data.map((item) => {
    if (Number(categoryId) === Number(item.category_aid)) {
      result.push(item);
    }
  });
  return result;
};

export const getCategoryPrices = (dataCategory, dataFood) => {
  let result = [];
  let resultCategoryId = [];

  console.log(dataCategory);
  dataCategory?.data.map((categoryItem) => {
    let isResultCategoryExist = false;

    //BOOLEAN CHECK IF CATEGORY EXIST IN RESULT CATEGORY ARRAY
    dataFood?.data.map((foodItem) => {
      isResultCategoryExist = resultCategoryId.includes(
        Number(categoryItem.recipe_aid)
      );
      //GET INDEX OF EXISTING CATEGORY
      const getIndexCategoryItem = resultCategoryId.indexOf(
        foodItem.recipe_title
      );

      //  if category not exist ad category with price
      if (
        Number(categoryItem.recipe_level) === Number(foodItem.recipe_aid) &&
        isResultCategoryExist === false
      ) {
        resultCategoryId.push(categoryItem.recipe_level);
        result.push({
          ...categoryItem,
          recipe: Number(foodItem.recipe_level),
        });
      }

      // IF CATEGORY EXIST ADD MENU ORUCE TO CATEGORY

      if (isResultCategoryExist == true && getIndexCategoryItem >= 0) {
        result[getIndexCategoryItem].recipe += Number(foodItem.recipe_level);
      }
    });

    if (!isResultCategoryExist) {
      result.push({ ...categoryItem, recipe: 5 });
      resultCategoryId.push(categoryItem.level_aid);
    }
  });
  return result;
};
