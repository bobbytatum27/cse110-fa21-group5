# CalorieNinjas

[Click here for the main website](https://calorieninjas.com/api)

## Core features

###  [/v1/nutrition](https://calorieninjas.com/api)
### `HTTP GET`

Get a detailed list of nutrition information for each item from an input text query.

##### Parameters

**`query`**  (required) - a string containing food or drink items. If you wish to calculate a specific quantity, you may prefix a quantity before an item. For example,  `3 tomatoes`  or  `1lb`  beef brisket. If no quantity is specified, the default quantity is  **100 grams**. Queries cannot exceed  **1500 characters**.

##### Headers

**`X-Api-Key`**  (required) - API Key associated with your account.

##### Sample Request URL
`https://api.calorieninjas.com/v1/nutrition?query=10oz onion and a tomato`

##### Sample Request URL
```java
{
  "items": [
    {
      "sugar_g": 13.3,
      "fiber_g": 4,
      "serving_size_g": 283.495,
      "sodium_mg": 8,
      "name": "onion",
      "potassium_mg": 99,
      "fat_saturated_g": 0.1,
      "fat_total_g": 0.5,
      "calories": 126.7,
      "cholesterol_mg": 0,
      "protein_g": 3.9,
      "carbohydrates_total_g": 28.6
    },
    {
      "sugar_g": 2.6,
      "fiber_g": 1.2,
      "serving_size_g": 100,
      "sodium_mg": 4,
      "name": "tomato",
      "potassium_mg": 23,
      "fat_saturated_g": 0,
      "fat_total_g": 0.2,
      "calories": 18.2,
      "cholesterol_mg": 0,
      "protein_g": 0.9,
      "carbohydrates_total_g": 3.9
    }
  ]
}
```

##### Code Example
```javascript
const request = require('request');
var query = '3lb carrots and a chicken sandwich';
request.get({
  url: 'https://api.calorieninjas.com/v1/nutrition?query='+query,
  headers: {
    'X-Api-Key': 'YOUR_API_KEY'
  },
}, function(error, response, body) {
  if(error) return console.error('Request failed:', error);
  else if(response.statusCode != 200) return console.error('Error:', response.statusCode, body.toString('utf8'));
  else console.log(body)
});
```

# Spoonacular
[Click here for the main website](https://spoonacular.com/food-api/docs)

## Core features

### [Search Recipes](https://spoonacular.com/food-api/docs#Search-Recipes-Complex)
### `HTTP GET`
Search through hundreds of thousands of recipes using advanced filtering and ranking. NOTE: This method combines searching by query, by ingredients, and by nutrients into one endpoint.

`GET https://api.spoonacular.com/recipes/complexSearch`

##### Parameters
| Name |Type  |Example  |Description  |
|--|--|--|--|
| **`query`** | string | pasta |The (natural language) recipe search query. |
| **`cuisine`** | string | italian |The cuisine(s) of the recipes. One or more, comma separated (will be interpreted as 'OR'). See a full [list of supported cuisines](https://spoonacular.com/food-api/docs#Cuisines). |
| **`diet`** | string | vegetarian |The diet for which the recipes must be suitable. See a full [list of supported diets](https://spoonacular.com/food-api/docs#Diets).|
| **`maxReadyTime`** | number | 20 |The maximum time in minutes it should take to prepare and cook the recipe|
more parameters in the docs

##### Sample Request URL
`GET https://api.spoonacular.com/recipes/complexSearch?query=pasta&maxFat=25&number=2`

##### Sample Request URL
```json
{
    "offset": 0,
    "number": 2,
    "results": [
        {
            "id": 716429,
            "title": "Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs",
            "calories": 584,
            "carbs": "84g",
            "fat": "20g",
            "image": "https://spoonacular.com/recipeImages/716429-312x231.jpg",
            "imageType": "jpg",
            "protein": "19g"
        },
        {
            "id": 715538,
            "title": "What to make for dinner tonight?? Bruschetta Style Pork & Pasta",
            "calories": 521,
            "carbs": "69g",
            "fat": "10g",
            "image": "https://spoonacular.com/recipeImages/715538-312x231.jpg",
            "imageType": "jpg",
            "protein": "35g"
        }
    ],
    "totalResults": 86
}
```





## Add-on features (Should have)

## Add-on features (Could have)