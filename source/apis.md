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

### [Get Recipe Information](https://spoonacular.com/food-api/docs#Get-Recipe-Information)
### `HTTP GET`
Use a recipe id to get full information about a recipe, such as ingredients, nutrition, diet and allergen information, etc.

`GET https://api.spoonacular.com/recipes/{id}/information`

##### Parameters
| Name |Type  |Example  |Description  |
|--|--|--|--|
| **`id`** | number | 716429 |The id of the recipe. |
| **`includeNutrition`** | false | italian |Include nutrition data in the recipe information. Nutrition data is per serving. If you want the nutrition data for the entire recipe, just multiply by the number of servings. |

##### Sample Request URL
`GET https://api.spoonacular.com/recipes/716429/information?includeNutrition=false`

##### Sample Request URL
```json
{
    "id": 716429,
    "title": "Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs",
    "image": "https://spoonacular.com/recipeImages/716429-556x370.jpg",
    "imageType": "jpg",
    "servings": 2,
    "readyInMinutes": 45,
    "license": "CC BY-SA 3.0",
    "sourceName": "Full Belly Sisters",
    "sourceUrl": "http://fullbellysisters.blogspot.com/2012/06/pasta-with-garlic-scallions-cauliflower.html",
    "spoonacularSourceUrl": "https://spoonacular.com/pasta-with-garlic-scallions-cauliflower-breadcrumbs-716429",
    "aggregateLikes": 209,
    "healthScore": 19.0,
    "spoonacularScore": 83.0,
    "pricePerServing": 163.15,
    "analyzedInstructions": [],
    "cheap": false,
    "creditsText": "Full Belly Sisters",
    "cuisines": [],
    "dairyFree": false,
    "diets": [],
    "gaps": "no",
    "glutenFree": false,
    "instructions": "",
    "ketogenic": false,
    "lowFodmap": false,
    "occasions": [],
    "sustainable": false,
    "vegan": false,
    "vegetarian": false,
    "veryHealthy": false,
    "veryPopular": false,
    "whole30": false,
    "weightWatcherSmartPoints": 17,
    "dishTypes": [
        "lunch",
        "main course",
        "main dish",
        "dinner"
    ],
    "extendedIngredients": [
        {
            "aisle": "Milk, Eggs, Other Dairy",
            "amount": 1.0,
            "consitency": "solid",
            "id": 1001,
            "image": "butter-sliced.jpg",
            "measures": {
                "metric": {
                    "amount": 1.0,
                    "unitLong": "Tbsp",
                    "unitShort": "Tbsp"
                },
                "us": {
                    "amount": 1.0,
                    "unitLong": "Tbsp",
                    "unitShort": "Tbsp"
                }
            },
            "meta": [],
            "name": "butter",
            "original": "1 tbsp butter",
            "originalName": "butter",
            "unit": "tbsp"
        },
        {
            "aisle": "Produce",
            "amount": 2.0,
            "consitency": "solid",
            "id": 10011135,
            "image": "cauliflower.jpg",
            "measures": {
                "metric": {
                    "amount": 473.176,
                    "unitLong": "milliliters",
                    "unitShort": "ml"
                },
                "us": {
                    "amount": 2.0,
                    "unitLong": "cups",
                    "unitShort": "cups"
                }
            },
            "meta": [
                "frozen",
                "thawed",
                "cut into bite-sized pieces"
            ],
            "name": "cauliflower florets",
            "original": "about 2 cups frozen cauliflower florets, thawed, cut into bite-sized pieces",
            "originalName": "about frozen cauliflower florets, thawed, cut into bite-sized pieces",
            "unit": "cups"
        },
        {
            "aisle": "Cheese",
            "amount": 2.0,
            "consitency": "solid",
            "id": 1041009,
            "image": "cheddar-cheese.png",
            "measures": {
                "metric": {
                    "amount": 2.0,
                    "unitLong": "Tbsps",
                    "unitShort": "Tbsps"
                },
                "us": {
                    "amount": 2.0,
                    "unitLong": "Tbsps",
                    "unitShort": "Tbsps"
                }
            },
            "meta": [
                "grated",
                "(I used romano)"
            ],
            "name": "cheese",
            "original": "2 tbsp grated cheese (I used romano)",
            "originalName": "grated cheese (I used romano)",
            "unit": "tbsp"
        },
        {
            "aisle": "Oil, Vinegar, Salad Dressing",
            "amount": 1.0,
            "consitency": "liquid",
            "id": 1034053,
            "image": "olive-oil.jpg",
            "measures": {
                "metric": {
                    "amount": 1.0,
                    "unitLong": "Tbsp",
                    "unitShort": "Tbsp"
                },
                "us": {
                    "amount": 1.0,
                    "unitLong": "Tbsp",
                    "unitShort": "Tbsp"
                }
            },
            "meta": [],
            "name": "extra virgin olive oil",
            "original": "1-2 tbsp extra virgin olive oil",
            "originalName": "extra virgin olive oil",
            "unit": "tbsp"
        },
        {
            "aisle": "Produce",
            "amount": 5.0,
            "consitency": "solid",
            "id": 11215,
            "image": "garlic.jpg",
            "measures": {
                "metric": {
                    "amount": 5.0,
                    "unitLong": "cloves",
                    "unitShort": "cloves"
                },
                "us": {
                    "amount": 5.0,
                    "unitLong": "cloves",
                    "unitShort": "cloves"
                }
            },
            "meta": [],
            "name": "garlic",
            "original": "5-6 cloves garlic",
            "originalName": "garlic",
            "unit": "cloves"
        },
        {
            "aisle": "Pasta and Rice",
            "amount": 6.0,
            "consitency": "solid",
            "id": 20420,
            "image": "fusilli.jpg",
            "measures": {
                "metric": {
                    "amount": 170.097,
                    "unitLong": "grams",
                    "unitShort": "g"
                },
                "us": {
                    "amount": 6.0,
                    "unitLong": "ounces",
                    "unitShort": "oz"
                }
            },
            "meta": [
                "(I used linguine)"
            ],
            "name": "pasta",
            "original": "6-8 ounces pasta (I used linguine)",
            "originalName": "pasta (I used linguine)",
            "unit": "ounces"
        },
        {
            "aisle": "Spices and Seasonings",
            "amount": 2.0,
            "consitency": "solid",
            "id": 1032009,
            "image": "red-pepper-flakes.jpg",
            "measures": {
                "metric": {
                    "amount": 2.0,
                    "unitLong": "pinches",
                    "unitShort": "pinches"
                },
                "us": {
                    "amount": 2.0,
                    "unitLong": "pinches",
                    "unitShort": "pinches"
                }
            },
            "meta": [
                "red"
            ],
            "name": "red pepper flakes",
            "original": "couple of pinches red pepper flakes, optional",
            "originalName": "couple of red pepper flakes, optional",
            "unit": "pinches"
        },
        {
            "aisle": "Spices and Seasonings",
            "amount": 2.0,
            "consitency": "solid",
            "id": 1102047,
            "image": "salt-and-pepper.jpg",
            "measures": {
                "metric": {
                    "amount": 2.0,
                    "unitLong": "servings",
                    "unitShort": "servings"
                },
                "us": {
                    "amount": 2.0,
                    "unitLong": "servings",
                    "unitShort": "servings"
                }
            },
            "meta": [
                "to taste"
            ],
            "name": "salt and pepper",
            "original": "salt and pepper, to taste",
            "originalName": "salt and pepper, to taste",
            "unit": "servings"
        },
        {
            "aisle": "Produce",
            "amount": 3.0,
            "consitency": "solid",
            "id": 11291,
            "image": "spring-onions.jpg",
            "measures": {
                "metric": {
                    "amount": 3.0,
                    "unitLong": "",
                    "unitShort": ""
                },
                "us": {
                    "amount": 3.0,
                    "unitLong": "",
                    "unitShort": ""
                }
            },
            "meta": [
                "white",
                "green",
                "separated",
                "chopped"
            ],
            "name": "scallions",
            "original": "3 scallions, chopped, white and green parts separated",
            "originalName": "scallions, chopped, white and green parts separated",
            "unit": ""
        },
        {
            "aisle": "Alcoholic Beverages",
            "amount": 2.0,
            "consitency": "liquid",
            "id": 14106,
            "image": "white-wine.jpg",
            "measures": {
                "metric": {
                    "amount": 2.0,
                    "unitLong": "Tbsps",
                    "unitShort": "Tbsps"
                },
                "us": {
                    "amount": 2.0,
                    "unitLong": "Tbsps",
                    "unitShort": "Tbsps"
                }
            },
            "meta": [
                "white"
            ],
            "name": "white wine",
            "original": "2-3 tbsp white wine",
            "originalName": "white wine",
            "unit": "tbsp"
        },
        {
            "aisle": "Pasta and Rice",
            "amount": 0.25,
            "consitency": "solid",
            "id": 99025,
            "image": "breadcrumbs.jpg",
            "measures": {
                "metric": {
                    "amount": 59.147,
                    "unitLong": "milliliters",
                    "unitShort": "ml"
                },
                "us": {
                    "amount": 0.25,
                    "unitLong": "cups",
                    "unitShort": "cups"
                }
            },
            "meta": [
                "whole wheat",
                "(I used panko)"
            ],
            "name": "whole wheat bread crumbs",
            "original": "1/4 cup whole wheat bread crumbs (I used panko)",
            "originalName": "whole wheat bread crumbs (I used panko)",
            "unit": "cup"
        }
    ],
    "summary": "Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs might be a good recipe to expand your main course repertoire. One portion of this dish contains approximately <b>19g of protein </b>,  <b>20g of fat </b>, and a total of  <b>584 calories </b>. For  <b>$1.63 per serving </b>, this recipe  <b>covers 23% </b> of your daily requirements of vitamins and minerals. This recipe serves 2. It is brought to you by fullbellysisters.blogspot.com. 209 people were glad they tried this recipe. A mixture of scallions, salt and pepper, white wine, and a handful of other ingredients are all it takes to make this recipe so scrumptious. From preparation to the plate, this recipe takes approximately  <b>45 minutes </b>. All things considered, we decided this recipe  <b>deserves a spoonacular score of 83% </b>. This score is awesome. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/cauliflower-gratin-with-garlic-breadcrumbs-318375\">Cauliflower Gratin with Garlic Breadcrumbs</a>, < href=\"https://spoonacular.com/recipes/pasta-with-cauliflower-sausage-breadcrumbs-30437\">Pasta With Cauliflower, Sausage, & Breadcrumbs</a>, and <a href=\"https://spoonacular.com/recipes/pasta-with-roasted-cauliflower-parsley-and-breadcrumbs-30738\">Pasta With Roasted Cauliflower, Parsley, And Breadcrumbs</a>.",
    "winePairing": {
        "pairedWines": [
            "chardonnay",
            "gruener veltliner",
            "sauvignon blanc"
        ],
        "pairingText": "Chardonnay, Gruener Veltliner, and Sauvignon Blanc are great choices for Pasta. Sauvignon Blanc and Gruner Veltliner both have herby notes that complement salads with enough acid to match tart vinaigrettes, while a Chardonnay can be a good pick for creamy salad dressings. The Buddha Kat Winery Chardonnay with a 4 out of 5 star rating seems like a good match. It costs about 25 dollars per bottle.",
        "productMatches": [
            {
                "id": 469199,
                "title": "Buddha Kat Winery Chardonnay",
                "description": "We barrel ferment our Chardonnay and age it in a mix of Oak and Stainless. Giving this light bodied wine modest oak character, a delicate floral aroma, and a warming finish.",
                "price": "$25.0",
                "imageUrl": "https://spoonacular.com/productImages/469199-312x231.jpg",
                "averageRating": 0.8,
                "ratingCount": 1.0,
                "score": 0.55,
                "link": "https://www.amazon.com/2015-Buddha-Kat-Winery-Chardonnay/dp/B00OSAVVM4?tag=spoonacular-20"
            }
        ]
    }
}
```

### [Ingredient Search](https://spoonacular.com/food-api/docs#Ingredient-Search)
### `HTTP GET`
Search for simple whole foods (e.g. fruits, vegetables, nuts, grains, meat, fish, dairy etc.).

`GET https://api.spoonacular.com/food/ingredients/search`

##### Parameters
| Name |Type  |Example  |Description  |
|--|--|--|--|
| **`query`** | string | apple |The partial or full ingredient name. |
| **`intolerances`** | string | egg |A comma-separated list of intolerances. All recipes returned must not contain ingredients that are not suitable for people with the intolerances entered. See a full list of supported intolerances. |
| **`sort`** | string | calories	 |The strategy to sort recipes by. See a full list of supported sorting options.|
| **`number`** | number | 20 |The number of expected results (between 1 and 100).
|
more parameters in the docs

##### Sample Request URL
`GET https://api.spoonacular.com/food/ingredients/search?query=banana&number=2&sort=calories&sortDirection=desc`

##### Sample Request URL
```json
{
    "results": [
        {
            "id": 19400,
            "name": "banana chips",
            "image": "banana-chips.jpg"
        },
        {
            "id": 93779,
            "name": "banana liqueur",
            "image": "limoncello.jpg"
        }
    ],
    "offset": 0,
    "number": 2,
    "totalResults": 13
}
```

### [Get Ingredient Information](https://spoonacular.com/food-api/docs#Get-Ingredient-Information)
### `HTTP GET`
Use an ingredient id to get all available information about an ingredient, such as its image and supermarket aisle.

`GET https://api.spoonacular.com/food/ingredients/{id}/information`

##### Parameters
| Name |Type  |Example  |Description  |
|--|--|--|--|
| **`id`** | number | 9266 |The ingredient id. |
| **`amount`** | number | 150 |The amount of this ingredient. |
| **`unit`** | string | grams	|	The unit for the given amount.|

##### Sample Request URL
`GET https://api.spoonacular.com/food/ingredients/9266/information?amount=1`

##### Sample Request URL
```json
{
    "id": 9266,
    "original": "pineapples",
    "originalName": "pineapples",
    "name": "pineapples",
    "nameClean": "pineapple",
    "amount": 1.0,
    "unit": "",
    "unitShort": "",
    "unitLong": "",
    "possibleUnits": [
        "piece",
        "slice",
        "fruit",
        "g",
        "oz",
        "cup",
        "serving"
    ],
    "estimatedCost": {
        "value": 299.0,
        "unit": "US Cents"
    },
    "consistency": "solid",
    "shoppingListUnits": [
        "pieces"
    ],
    "aisle": "Produce",
    "image": "pineapple.jpg",
    "meta": [],
    "nutrition": {
        "nutrients": [
            {
                "name": "Calories",
                "amount": 452.5,
                "unit": "cal",
                "percentOfDailyNeeds": 22.63
            },
            {
                "name": "Fat",
                "amount": 1.09,
                "unit": "g",
                "percentOfDailyNeeds": 1.67
            },
            {
                "name": "Saturated Fat",
                "amount": 0.08,
                "unit": "g",
                "percentOfDailyNeeds": 0.51
            },
            {
                "name": "Carbohydrates",
                "amount": 118.74,
                "unit": "g",
                "percentOfDailyNeeds": 39.58
            },
            {
                "name": "Net Carbohydrates",
                "amount": 106.07,
                "unit": "g",
                "percentOfDailyNeeds": 38.57
            },
            {
                "name": "Sugar",
                "amount": 89.14,
                "unit": "g",
                "percentOfDailyNeeds": 99.05
            },
            {
                "name": "Cholesterol",
                "amount": 0.0,
                "unit": "mg",
                "percentOfDailyNeeds": 0.0
            },
            {
                "name": "Sodium",
                "amount": 9.05,
                "unit": "mg",
                "percentOfDailyNeeds": 0.39
            },
            {
                "name": "Protein",
                "amount": 4.89,
                "unit": "g",
                "percentOfDailyNeeds": 9.77
            },
            {
                "name": "Vitamin C",
                "amount": 432.59,
                "unit": "mg",
                "percentOfDailyNeeds": 524.35
            },
            {
                "name": "Manganese",
                "amount": 8.39,
                "unit": "mg",
                "percentOfDailyNeeds": 419.47
            },
            {
                "name": "Fiber",
                "amount": 12.67,
                "unit": "g",
                "percentOfDailyNeeds": 50.68
            },
            {
                "name": "Vitamin B6",
                "amount": 1.01,
                "unit": "mg",
                "percentOfDailyNeeds": 50.68
            },
            {
                "name": "Copper",
                "amount": 1.0,
                "unit": "mg",
                "percentOfDailyNeeds": 49.78
            },
            {
                "name": "Vitamin B1",
                "amount": 0.72,
                "unit": "mg",
                "percentOfDailyNeeds": 47.66
            },
            {
                "name": "Folate",
                "amount": 162.9,
                "unit": "µg",
                "percentOfDailyNeeds": 40.73
            },
            {
                "name": "Potassium",
                "amount": 986.45,
                "unit": "mg",
                "percentOfDailyNeeds": 28.18
            },
            {
                "name": "Magnesium",
                "amount": 108.6,
                "unit": "mg",
                "percentOfDailyNeeds": 27.15
            },
            {
                "name": "Vitamin B3",
                "amount": 4.53,
                "unit": "mg",
                "percentOfDailyNeeds": 22.63
            },
            {
                "name": "Vitamin B5",
                "amount": 1.93,
                "unit": "mg",
                "percentOfDailyNeeds": 19.28
            },
            {
                "name": "Vitamin B2",
                "amount": 0.29,
                "unit": "mg",
                "percentOfDailyNeeds": 17.04
            },
            {
                "name": "Iron",
                "amount": 2.62,
                "unit": "mg",
                "percentOfDailyNeeds": 14.58
            },
            {
                "name": "Calcium",
                "amount": 117.65,
                "unit": "mg",
                "percentOfDailyNeeds": 11.77
            },
            {
                "name": "Vitamin A",
                "amount": 524.9,
                "unit": "IU",
                "percentOfDailyNeeds": 10.5
            },
            {
                "name": "Zinc",
                "amount": 1.09,
                "unit": "mg",
                "percentOfDailyNeeds": 7.24
            },
            {
                "name": "Phosphorus",
                "amount": 72.4,
                "unit": "mg",
                "percentOfDailyNeeds": 7.24
            },
            {
                "name": "Vitamin K",
                "amount": 6.34,
                "unit": "Âµg",
                "percentOfDailyNeeds": 6.03
            },
            {
                "name": "Selenium",
                "amount": 0.91,
                "unit": "Âµg",
                "percentOfDailyNeeds": 1.29
            },
            {
                "name": "Vitamin E",
                "amount": 0.18,
                "unit": "mg",
                "percentOfDailyNeeds": 1.21
            }
        ],
        "properties": [
            {
                "name": "Glycemic Index",
                "amount": 58.67,
                "unit": ""
            },
            {
                "name": "Glycemic Load",
                "amount": 62.23,
                "unit": ""
            }
        ],
        "caloricBreakdown": {
            "percentProtein": 3.88,
            "percentFat": 1.94,
            "percentCarbs": 94.18
        },
        "weightPerServing": {
            "amount": 905,
            "unit": "g"
        }
    },
    "categoryPath": [
        "tropical fruit",
        "fruit"
    ]
}
```


## Add-on features (Should have)

### [Get Similar Recipes](https://spoonacular.com/food-api/docs#Get-Similar-Recipes)
### `HTTP GET`
Find recipes which are similar to the given one.

`GET https://api.spoonacular.com/recipes/{id}/similar`

##### Parameters
| Name |Type  |Example  |Description  |
|--|--|--|--|
| **`id`** | number | 715538 |The id of the source recipe for which similar recipes should be found. |
| **`number`** | number | 1 |The number of random recipes to be returned (between 1 and 100). |
| **`limitLicense`** | boolean | true |Whether the recipes should have an open license that allows display with proper attribution.|

##### Sample Request URL
`GET https://api.spoonacular.com/recipes/715538/similar`

##### Sample Request URL
```json
[
    {
        "id": 209128,
        "title": "Dinner Tonight: Grilled Romesco-Style Pork",
        "imageType": "jpg",
        "readyInMinutes": 45,
        "servings": 4,
        "sourceUrl": "http://www.seriouseats.com/recipes/2008/07/grilled-romesco-style-pork-salad-recipe.html"
    },
    {
        "id": 31868,
        "title": "Dinner Tonight: Chickpea Bruschetta",
        "imageType": "jpg",
        "readyInMinutes": 45,
        "servings": 2,
        "sourceUrl": "http://www.seriouseats.com/recipes/2009/06/dinner-tonight-chickpea-bruschetta-babbo-nyc-recipe.html"
    }
]
```

### [Get Ingredient Substitutes](https://spoonacular.com/food-api/docs#Get-Ingredient-Substitutes)
### `HTTP GET`
Search for substitutes for a given ingredient.

`GET https://api.spoonacular.com/food/ingredients/substitutes`

##### Parameters
| Name |Type  |Example  |Description  |
|--|--|--|--|
| **`ingredientName`** | string | butter |The name of the ingredient you want to replace. |

##### Sample Request URL
`GET https://api.spoonacular.com/food/ingredients/substitutes?ingredientName=butter`

##### Sample Request URL
```json
{
    "ingredient": "butter",
    "substitutes": [
        "1 cup = 7/8 cup shortening and 1/2 tsp salt",
        "1 cup = 7/8 cup vegetable oil + 1/2 tsp salt",
        "1/2 cup = 1/4 cup buttermilk + 1/4 cup unsweetened applesauce",
        "1 cup = 1 cup margarine"
    ],
    "message": "Found 4 substitutes for the ingredient."
}
```


## Add-on features (Could have)

### [Autocomplete Recipe Search](https://spoonacular.com/food-api/docs#Autocomplete-Recipe-Search)
### `HTTP GET`
Autocomplete a partial input to suggest possible recipe names.

`GET https://api.spoonacular.com/recipes/autocomplete`

##### Parameters
| Name |Type  |Example  |Description  |
|--|--|--|--|
| **`query`** | string | pasta |The query to be autocompleted. |
| **`number`** | number | 10 |The number of results to return (between 1 and 25). |

##### Sample Request URL
`GET https://api.spoonacular.com/recipes/autocomplete?number=10&query=chick`

##### Sample Request URL
```json
[
    {
        "id": 296687,
        "title": "chicken",
        "imageType": "jpg"
    },
    {
        "id": 42569,
        "title": "chicken bbq",
        "imageType": "jpg"
    },

    {
        "id": 83890,
        "title": "chicken blt",
        "imageType": "jpg"
    },
    {
        "id": 737543,
        "title": "chicken pie",
        "imageType": "jpg"
    }
]
```

### [Autocomplete Ingredient Search](https://spoonacular.com/food-api/docs#Autocomplete-Ingredient-Search)
### `HTTP GET`
Autocomplete the entry of an ingredient.

`GET https://api.spoonacular.com/food/ingredients/autocomplete`

##### Parameters
| Name |Type  |Example  |Description  |
|--|--|--|--|
| **`query`** | string | apple |The partial or full ingredient name. |
| **`intolerances`** | string | egg |A comma-separated list of intolerances. All recipes returned must not contain ingredients that are not suitable for people with the intolerances entered. See a full list of supported intolerances. |
| **`metaInformation`** | boolean | false |Whether to return more meta information about the ingredients.|
| **`number`** | number | 10 |The number of expected results (between 1 and 100).
|

##### Sample Request URL
`GET https://api.spoonacular.com/food/ingredients/autocomplete?query=appl&number=5`

##### Sample Request URL
```json
[
    {
        "name": "apple",
        "image": "apple.jpg",
        "id": 9003,
        "aisle": "Produce",
        "possibleUnits": [
            "small",
            "large",
            "piece",
            "slice",
            "g",
            "extra small",
            "medium",
            "oz",
            "cup slice",
            "cup",
            "serving"
        ]
    },
    {
        "name": "applesauce",
        "image": "applesauce.png",
        "id": 9019,
        "aisle": "Canned and Jarred",
        "possibleUnits": [
            "g",
            "oz",
            "cup",
            "serving",
            "tablespoon"
        ]
    },
    {
        "name": "apple juice",
        "image": "apple-juice.jpg",
        "id": 9016,
        "aisle": "Beverages",
        "possibleUnits": [
            "g",
            "drink box",
            "fl oz",
            "oz",
            "teaspoon",
            "cup",
            "serving",
            "tablespoon"
        ]
    },
    {
        "name": "apple cider",
        "image": "apple-cider.jpg",
        "id": 1009016,
        "aisle": "Beverages",
        "possibleUnits": [
            "g",
            "drink box",
            "fl oz",
            "oz",
            "teaspoon",
            "bottle NFS",
            "cup",
            "serving",
            "tablespoon"
        ]
    },
    {
        "name": "apple jelly",
        "image": "apple-jelly.jpg",
        "id": 10019297,
        "aisle": "Nut butters, Jams, and Honey",
        "possibleUnits": [
            "g",
            "oz",
            "packet",
            "teaspoon",
            "cup",
            "serving",
            "tablespoon"
        ]
    }
]
```

### [Search Grocery Products](https://spoonacular.com/food-api/docs#Search-Grocery-Products)
### `HTTP GET`
Search packaged food products, such as frozen pizza or Greek yogurt.

`GET https://api.spoonacular.com/food/products/search`

##### Parameters
| Name |Type  |Example  |Description  |
|--|--|--|--|
| **`query`** | string | greek yogurt |The search query. |
| **`intolerances`** | string | egg |A comma-separated list of intolerances. All recipes returned must not contain ingredients that are not suitable for people with the intolerances entered. See a full list of supported intolerances. |
| **`offset`** | number	 | 0 |The number of results to skip (between 0 and 990).|
| **`number`** | number | 20 |The number of expected results (between 1 and 100).
|
more parameters in the docs

##### Sample Request URL
`GET https://api.spoonacular.com/food/products/search?query=pizza&number=2`

##### Sample Request URL
```json
{
    "products": [
        {
            "id": 192386,
            "title": "Pizza Buddy: Frozen Pizza Dough, 16 Oz",
            "imageType": "jpg"
        },
        {
            "id": 27693,
            "title": "Uno Pizza",
            "imageType": "jpg"
        }
    ],
    "totalProducts": 1258,
    "type": "product",
    "offset": 0,
    "number": 2
}
```

### [Get Product Information](https://spoonacular.com/food-api/docs#Get-Product-Information)
### `HTTP GET`
Use a product id to get full information about a product, such as ingredients, nutrition, etc. The nutritional information is per serving.

`GET https://api.spoonacular.com/food/products/{id}`

##### Parameters
| Name |Type  |Example  |Description  |
|--|--|--|--|
| **`id`** | number | 22347 |The id of the packaged food. |

##### Sample Request URL
`GET https://api.spoonacular.com/food/products/22347`

##### Sample Request URL
```json
{
    "id": 22347,
    "title": "SNICKERS Minis Size Chocolate Candy Bars Variety Mix 10.5-oz. Bag",
    "breadcrumbs": [
        "bars"
    ],
    "imageType": "jpg",
    "badges": [
        "msg_free",
        "no_artificial_colors",
        "no_artificial_flavors",
        "no_artificial_ingredients",
        "gluten_free"
    ],
    "importantBadges": [
        "no_artificial_flavors",
        "no_artificial_colors",
        "no_artificial_ingredients",
        "gluten_free",
        "msg_free"
    ],
    "ingredientCount": 32,
    "generatedText": null,
    "ingredientList": "Snickers Brand Almond Bar: Milk Chocolate (Sugar, Cocoa Butter, Chocolate, Skim Milk, Lactose, Milkfat, Soy Lecithin, Artificial Flavor), Corn Syrup, Almonds, Sugar, Milkfat, Skim Milk, Less than 2% - Lactose, Salt, Hydrogenated Palm Kernel Oil and/or Palm Oil, Egg Whites, Chocolate, Artificial Flavor. Snickers Brand: Milk Chocolate (Sugar, Cocoa Butter, Chocolate, Skim Milk, Lactose, Milkfat, Soy Lecithin, Artificial Flavor), Peanuts, Corn Syrup, Sugar, Milkfat, Skim Milk, Partially Hydrogenated Soybean Oil, Lactose, Salt, Egg Whites, Chocolate, Artificial Flavor. Snickers Brand Peanut Butter Squared Bars: Milk Chocolate (Sugar, Cocoa Butter, Chocolate, Skim Milk, Lactose, Milkfat, Soy Lecithin, Artificial Flavor), Peanut Butter (Peanuts, Partially Hydrogenated Soybean Oil), Peanuts, Sugar, Corn Syrup, Vegetable Oil (Hydrogenated Palm Kernel Oil, Palm Oil, Rapeseed Oil and Cottonseed Oil and/or Partially Hydrogenated Palm Kernel Oil), Lactose, Corn Syrup Solids, Invert Sugar, Less than 2% - Glycerin, Dextrose, Skim Milk, Salt, Calcium Carbonate, Partially Hydrogenated Soybean Oil, Egg Whites, Artificial Flavor, TBHQ to Maintain Freshness",
    "ingredients": [
        {
            "description": null,
            "name": "emulsifier",
            "safety_level": null
        },
        {
            "description": null,
            "name": "added sugar",
            "safety_level": null
        },
        {
            "description": null,
            "name": "sweetener",
            "safety_level": null
        },
        {
            "description": null,
            "name": "cooking fat",
            "safety_level": null
        },
        {
            "description": null,
            "name": "cooking oil",
            "safety_level": null
        },
        {
            "description": null,
            "name": "lecithin",
            "safety_level": null
        },
        {
            "description": null,
            "name": "yeast",
            "safety_level": null
        },
        {
            "description": null,
            "name": "menu item type",
            "safety_level": null
        },
        {
            "description": null,
            "name": "nuts",
            "safety_level": null
        },
        {
            "description": null,
            "name": "partially hydrogenated vegetable oil",
            "safety_level": "low"
        },
        {
            "description": "Unlike partially hydrogenated oils, fully hydrogenated oils do not contain trans fat and thus are currently considered safer.",
            "name": "hydrogenated vegetable oil",
            "safety_level": "high"
        },
        {
            "description": null,
            "name": "calcium",
            "safety_level": null
        },
        {
            "description": null,
            "name": "nut butter",
            "safety_level": null
        },
        {
            "description": null,
            "name": "legumes",
            "safety_level": null
        },
        {
            "description": null,
            "name": "refined sweetener",
            "safety_level": null
        },
        {
            "description": null,
            "name": "non food item",
            "safety_level": null
        },
        {
            "description": null,
            "name": "tree nuts",
            "safety_level": null
        },
        {
            "description": null,
            "name": "chocolate",
            "safety_level": null
        },
        {
            "description": null,
            "name": "sugar",
            "safety_level": null
        },
        {
            "description": null,
            "name": "snack",
            "safety_level": null
        },
        {
            "description": null,
            "name": "corn syrup",
            "safety_level": null
        },
        {
            "description": null,
            "name": "drink",
            "safety_level": null
        },
        {
            "description": null,
            "name": "milk",
            "safety_level": null
        },
        {
            "description": null,
            "name": "spread",
            "safety_level": null
        },
        {
            "description": null,
            "name": "vegetable oil",
            "safety_level": null
        },
        {
            "description": null,
            "name": "yeast nutrient",
            "safety_level": null
        },
        {
            "description": null,
            "name": "palm kernel oil",
            "safety_level": null
        },
        {
            "description": null,
            "name": "artificial ingredient",
            "safety_level": null
        },
        {
            "description": null,
            "name": "stabilizer",
            "safety_level": null
        },
        {
            "description": null,
            "name": "additive",
            "safety_level": null
        },
        {
            "description": null,
            "name": "nutrient",
            "safety_level": null
        },
        {
            "description": null,
            "name": "soybean oil",
            "safety_level": null
        },
        {
            "description": null,
            "name": "supplement",
            "safety_level": null
        },
        {
            "description": null,
            "name": "mineral",
            "safety_level": null
        },
        {
            "description": null,
            "name": "artificial flavor",
            "safety_level": "medium"
        },
        {
            "description": null,
            "name": "skim milk",
            "safety_level": null
        },
        {
            "description": null,
            "name": "peanuts",
            "safety_level": null
        },
        {
            "description": null,
            "name": "corn syrup solids",
            "safety_level": "medium"
        },
        {
            "description": "Unlike partially hydrogenated oils, fully hydrogenated oils do not contain trans fat and thus are currently considered safer.",
            "name": "hydrogenated palm kernel oil",
            "safety_level": "high"
        },
        {
            "description": null,
            "name": "cottonseed oil",
            "safety_level": null
        },
        {
            "description": null,
            "name": "milkfat",
            "safety_level": "high"
        },
        {
            "description": null,
            "name": "lactose",
            "safety_level": null
        },
        {
            "description": null,
            "name": "corn syrup",
            "safety_level": null
        },
        {
            "description": null,
            "name": "cocoa butter",
            "safety_level": "high"
        },
        {
            "description": null,
            "name": "tbhq to maintain freshness",
            "safety_level": null
        },
        {
            "description": null,
            "name": "peanut butter",
            "safety_level": null
        },
        {
            "description": null,
            "name": "egg whites",
            "safety_level": null
        },
        {
            "description": null,
            "name": "sugar",
            "safety_level": null
        },
        {
            "description": null,
            "name": "milk chocolate",
            "safety_level": null
        },
        {
            "description": null,
            "name": "palm oil",
            "safety_level": null
        },
        {
            "description": null,
            "name": "artificial flavor",
            "safety_level": null
        },
        {
            "description": null,
            "name": "salt",
            "safety_level": null
        },
        {
            "description": null,
            "name": "almonds",
            "safety_level": null
        },
        {
            "description": null,
            "name": "skim milk less than 2% - lactose",
            "safety_level": null
        },
        {
            "description": null,
            "name": "vegetable oil",
            "safety_level": null
        },
        {
            "description": null,
            "name": "less than 2% - glycerin",
            "safety_level": null
        },
        {
            "description": null,
            "name": "dextrose",
            "safety_level": "high"
        },
        {
            "description": "Soy lecithin is not a concern for most people allergic to soy.",
            "name": "soy lecithin",
            "safety_level": "high"
        },
        {
            "description": null,
            "name": "invert sugar",
            "safety_level": "high"
        },
        {
            "description": null,
            "name": "chocolate",
            "safety_level": null
        },
        {
            "description": null,
            "name": "rapeseed oil",
            "safety_level": null
        },
        {
            "description": null,
            "name": "partially hydrogenated soybean oil",
            "safety_level": "low"
        },
        {
            "description": null,
            "name": "calcium carbonate",
            "safety_level": "high"
        },
        {
            "description": null,
            "name": "partially hydrogenated palm kernel oil",
            "safety_level": "low"
        },
        {
            "description": null,
            "name": "artificial flavor.snickers brand",
            "safety_level": null
        },
        {
            "description": null,
            "name": "snickers brand almond bar",
            "safety_level": null
        }
    ],
    "likes": 0,
    "aisle": "Sweet Snacks",
    "nutrition": {
        "nutrients": [
            {
                "name": "Fat",
                "amount": 4,
                "unit": "g",
                "percentOfDailyNeeds": 6.15
            },
            {
                "name": "Protein",
                "amount": 10,
                "unit": "g",
                "percentOfDailyNeeds": 20
            },
            {
                "name": "Calories",
                "amount": 200,
                "unit": "cal",
                "percentOfDailyNeeds": 10
            },
            {
                "name": "Carbohydrates",
                "amount": 26,
                "unit": "g",
                "percentOfDailyNeeds": 9.45
            }
        ],
        "caloricBreakdown": {
            "percentProtein": 22.22,
            "percentFat": 20,
            "percentCarbs": 57.78
        }
    },
    "price": 324.0,
    "servings": {
        "number": 8,
        "size": 4,
        "unit": "pieces"
    },
    "spoonacularScore": 0.0
}
```

### [Classify Cuisine](https://spoonacular.com/food-api/docs#Classify-Cuisine)
### `HTTP POST`
Classify the recipe's cuisine.

`POST https://api.spoonacular.com/recipes/cuisine`

##### Parameters
| Name |Type  |Example  |Description  |
|--|--|--|--|
| **`title`** | string | Pork roast with green beans |The title of the recipe. |
| **`ingredientList`** | string | 3 oz pork shoulder |The ingredient list of the recipe, one ingredient per line (separate lines with \n). |
| **`language`** | string | en |TThe input language, either "en" or "de". |

##### Sample Request URL
`POST https://api.spoonacular.com/recipes/cuisine`

##### Sample Request URL
```json
{
    "cuisine": "Mediterranean",
    "cuisines": [
        "Mediterranean",
        "European",
        "Italian"
    ],
    "confidence": 0.0
}
```

### [Analyze Recipe](https://spoonacular.com/food-api/docs#Analyze-Recipe)
### `HTTP POST`
This endpoint allows you to send raw recipe information, such as title, servings, and ingredients, to then see what we compute (badges, diets, nutrition, and more). This is useful if you have your own recipe data and want to enrich it with our semantic analysis.

`POST https://api.spoonacular.com/recipes/analyze`

##### Parameters
| Name |Type  |Example  |Description  |
|--|--|--|--|
| **`language`** | string | en |The input language, either "en" or "de". |
| **`includeNutrition	`** | boolean | false |Whether nutrition data should be added to correctly parsed ingredients. |
| **`includeTaste`** | boolean | false |Whether taste data should be added to correctly parsed ingredients. |

##### Example Request and Body
`POST https://api.spoonacular.com/recipes/analyze`

##### Example Request and Body
```json
{
    "title": "Spaghetti Carbonara",
    "servings": 2,
    "ingredients": [
        "1 lb spaghetti",
        "3.5 oz pancetta",
        "2 Tbsps olive oil",
        "1  egg",
        "0.5 cup parmesan cheese"
    ],
    "instructions": "Bring a large pot of water to a boil and season generously with salt. Add the pasta to the water once boiling and cook until al dente. Reserve 2 cups of cooking water and drain the pasta. "
}
```

##### Example Request and Response
`GET https://api.spoonacular.com/recipes/analyze`

##### Example Request and Response
```json
/* recipe data as in Get Recipe Information endpoint */
```

## Helpful endpoints

### [Ingredients by ID](https://spoonacular.com/food-api/docs#Ingredients-by-ID)
### `HTTP GET`

Get a recipe's ingredient list.

### [Nutrition by ID](https://spoonacular.com/food-api/docs#Nutrition-by-ID)
### `HTTP GET`
Get a recipe's nutrition widget data.

### [Taste by ID](https://spoonacular.com/food-api/docs#Taste-by-ID)
### `HTTP GET`
Get a recipe's taste. The tastes supported are sweet, salty, sour, bitter, savory, and fatty. These tastes are between 0 and 100 while the spiciness value is in scoville on an open scale of 0 and above.

Every ingredient has each of these values and it is weighted by how much they contribute to the recipe. Spiciness is taking the weight of the spicy ingredient and multiplying it with its scoville amount. Of course, taste is also very personal and it depends on how it is prepared so all of the values should only give you an indication of how the dish tastes.

### [Get Analyzed Recipe Instructions](https://spoonacular.com/food-api/docs#Get-Analyzed-Recipe-Instructions)
### `HTTP GET`
Get an analyzed breakdown of a recipe's instructions. Each step is enriched with the ingredients and equipment required.

### [Extract Recipe from Website](https://spoonacular.com/food-api/docs#Extract-Recipe-from-Website)
### `HTTP GET`
This endpoint lets you extract recipe data such as title, ingredients, and instructions from any properly formatted Website.

### [Quick Answer](https://spoonacular.com/food-api/docs#Quick-Answer)
### `HTTP GET`
Answer a nutrition related natural language question.

### [Talk to Chatbot](https://spoonacular.com/food-api/docs#Talk-to-Chatbot)
### `HTTP GET`
This endpoint can be used to have a conversation about food with the spoonacular chatbot. Use the "Conversation Suggests" endpoint to show your user what he or she can say.