# CalorieNinjas

[Click here for the main website](https://calorieninjas.com/api)

###  /v1/nutrition
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