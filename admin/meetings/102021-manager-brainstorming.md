# Brainstorming

## Info

### Main Topics

-   Approaching the brainstorming assignment
-   Implementing features
-   Expectations for an A project

### Time & Place

-   Group 5
-   Wednesday, October 20, 2021
-   11am @ https://ucsd.zoom.us/my/sanatbhandarkar

### Attendance

-   [x] Adory
-   [x] Hanming
-   [ ] Steven
-   [ ] Royce
-   [ ] Divneet
-   [ ] Julian
-   [ ] Xuan
-   [ ] Robert (Bobby)
-   [ ] Sizhe (Chris)

---

## Agenda

### Previous Meeting

-   Sprint 0 (Brainstorming) expectations
-   Project timeline expectations
-   Sprint 1 (Design & Planning) expectations

### Current Meeting

-   Brainstorming assignment
    -   Steps for the brainstorming meeting
    -   Specifying features
        -   Core features (CRUD)
        -   Add-on features
        -   Data format & API's
-   Project submission expectations
    -   Expected deliverables
    -   Expectations for an A

### For next time!

-   Project pitch assignment
-   Sprint 1

---

## Meeting Approach/Steps

-   2 hours worth of brainstorming
    -   1 hour max per meeting to prevent fatigue! -> 2 meetings
-   Miro will be our best friend for the meetings

### Steps:

1. Decide target audience
    1. Develop [user personas](<https://en.wikipedia.org/wiki/Persona_(user_experience)>) to get an idea for the needs of different people
        - At least 5
        - Different kinds of people - college students, professionals, athletes, etc.
            - Ex: College student
                - Grocery list
                    - With prices
            - Ex: Health-focused individuals
                - Calorie count
                - Meal prep
        - After finishing 5 different personas, we can pick one as our main target audience.
    2. Which subset of these people do we want to build the app for?
        1. Features and user experience should be tailored for them.
    3. Are we allowed to have multiple target audiences?
        - Yes. It depends on our decision, but be specific as possible.
2. Decide & organize features
    1. Brainstorm as many features as possible
    2. Organize core MVP features vs. add-on features
        - Keep the target audience in mind for organizing/prioritizing them
            - User Centered Design
    3. Categorize with the [MoSCoW method](https://en.wikipedia.org/wiki/MoSCoW_method)
        - > M - Must have, S - Should have, C - Could have, W - Won't have
        - Think about balancing convenience & necessity.
        - Examples/Suggestions:
            - M: Must have CRUD operations (Create, Read, Update, Delete)
            - S: Should have a search function, serving size scaling
            - C: Could have audiovisual components like images, gifs, and videos.
            - W: The application should DEFINITELY not have React, Angular, ML, AI, image processing, etc.

---

## Feature Specification

### Create - Add recipes

-   How to allow user to add recipes?
    -   Easiest accessibility for user: scraping internet for already made recipes
        -   Not hard to implement! (See below data formats and API's)
    -   Additionally: Manual typing
        -   Manual form
        -   Potentially allow copy and pasting
-   Blank canvas or existing recipes?
    -   Existing recipes & images - Which recipes to preload?
        -   Maybe ask for user preferences
            -   Careful: Do not fall in the rabbit hole of recommender systems
        -   Use internal tags to categorize recipes
            -   Potential inspiration: Like Spotify’s playlists - curated selections of recipes

### Read - Read recipes

-   Searching
    -   Plain-text
    -   Ingredients
-   Filtering
    -   Tags
        -   Should they be preloaded or allow users to add tags?
            -   Do not need custom tags if we have really good predefined ones!
            -   Cater to the target audience - will our users know what the tags mean?
    -   Properties of recipes: Cuisine type, cook time, difficulty
    -   Sorting
        -   By cook time, alphabetical, etc.
        -   Note: Not a priority
-   When you display search results for recipes, the media content of the recipes should be the focus, not walls of text
    -   Images

### Update - Update recipes

-   Any modification of existing recipes
    -   Change their recipe text
    -   Media - Change images
    -   Mark recipe as favorite

### Delete - Delete recipes

-   Remove recipe from storage
-   Similar to Read: Controlling displayed recipes in different user accounts
    -   How to show/hide recipes that the user wants
    -   Similar to filtering - which recipes show to the user

### Add-on Features

-   Timer
    -   For durations within recipes
-   Focus mode
    -   Focus on a smaller section of steps while doing the recipe
-   Low-touch interface
    -   While cooking, hands are gonna be dirty!
    -   Minimalistic, not cluttered UI
    -   Speech recognition
        -   “Next step!”
        -   API’s!
    -   We can use any API’s for our purposes
        -   Speech recognition
        -   Google Calendar
        -   List in Slack to start researching
            -   Mostly catered to recipe data
-   Grocery list
    -   Organize needed items based on recipes
-   Meal prep
    -   Calendar
        -   Select recipes for the week
-   Unit scaling
    -   Be able to scale ingredient amounts based on serving size
-   Appearance/Accessibility
    -   Colorblind mode for UI
    -   High contrast mode
    -   Multilingual support
        -   Google Translate API
-   Post-cooking reflection
    -   Comments, pictures, notes
    -   Rating/review

### Data Format

-   Figuring out how to store recipes
    -   JSON LD
        -   JS Object with properties for title, description, ingredients, images, etc.
        -   [Google structured data](https://developers.google.com/search/docs/advanced/structured-data/recipe#guided-example) - recipe schema markup
        -   The top recipe websites all used JSON LD for storing recipes - easy scraping!
        -   Seems like the best option
    -   Schema.org
    -   hRecipe

### API’s

-   [Spoonacular](https://spoonacular.com/food-api)
    -   it uses JSON LD data format.
    -   Studied - best API we have
    -   Recipe database
    -   Operations to access database
    -   Detailed info about recipes
    -   150 calls/day for free plan
    -   Student discount access
-   [TheMealDB](https://www.themealdb.com/)
    -   Open source
    -   Free api
    -   Slightly less professional than spoonacular
-   [USDA FoodData Central API](https://fdc.nal.usda.gov/api-guide.html)
    -   Nutrient data
-   [CalorieNinjas](https://calorieninjas.com/)
    -   Nutrient data

---

## Project Submission Expectations

### Deliverables

-   CRUD features
    -   JS backend
    -   Reflect on frontend
-   Data storage
    -   Local storage
    -   Database
    -   Recommend to start with local
-   Recipes
    -   List of recipes aligned to target audience
-   2-3 Domain specific features
    -   Timer
    -   Focus mode
    -   Unit conversion / scaling (pretty much required)
    -   Social sharing

### For an A

1. User centered design & thinking across the board
2. Good image & media visualization
    1. JSON-LD will help
3. Domain-specific
    1. Cater to target audience as much as possible
        1. Recipes
        2. Features
        3. Even design
4. Polished UI
    1. No bugs & clunkiness
    2. Nothing fancy, just polished
5. SE practices within the team
    1. Expected Agile practices throughout the project

---

## Additional Remarks

### Remaining Questions / Concerns

-   When/How should the specs be fleshed out?
    -   Who will do it?

---

## Decisions & Takeaways

-   Create Miro board for the brainstorming meetings
-   Flesh out target audience & features

---

Meeting finish time: 12:20pm (1 hr, 20 min)
