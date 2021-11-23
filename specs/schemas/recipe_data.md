# Summary

Recipes should be stored in JSON with the following key-value pairs. These value types are derived from
[schema.org/DataType](https://schema.org/DataType).
- `image: URL`
    - An image of the completed dish
    - Required: YES
- `name: String`
    - The name of the dish
    - REQUIRED: YES
- `author: Person`
    - The name of the person who wrote the recipe.
    - REQUIRED: No
- `cookTime: Duration`
    - The time it takes to cook the dish in ISO 8601 format.
    - Always use in combination with `prepTime`
    - REQUIRED: No
- `datePublished: Date`
    - The date the recipe was published in ISO 8601 format.
    - REQUIRED: No
- `description: String`
    - A short summary describing the dish.
    - REQUIRED: No
- `nutrition: NutritionInformation`
    - Nutritional information about the recipe.
    - REQUIRED: No
- `prepTime: Duration`
    - The length it takes to prepare the ingredients and workspace for the dish in ISO 8601 format.
    - REQUIRED: No
- `recipeIngredient: Array of String`
    - Ingredients used in the recipe.
    - REQUIRED: No
- `recipeInstructions: Array of HowToStep`
    - The steps to make the dish.
    - REQUIRED: No
- `recipeYield: String`
    - The quantity produced by the recipe.
    - REQUIRED: No
- `totalTime: Duration`
    - The total time it takes to prepare and cook the dish in ISO 8601 format.
    - REQUIRED: No
- `video: VideoObject`
    - A video depicting the steps to make the dish.
    - REQUIRED: No

See [Google's guide on recipe
data](https://developers.google.com/search/docs/advanced/structured-data/recipe#recipe-properties) for more info on
JSON-LD and these types.
