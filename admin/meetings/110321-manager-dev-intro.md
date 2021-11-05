# Intro to Development Phase

## Info

### Main Topics

-   Pitch review
    -   Mostly sufficient! Ready to move onto development
-   Preparing for development
    -   Roles
    -   User stories
    -   Tasks we should focus on

### Time & Place

-   Group 5
-   Wednesday, November 03, 2021
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

-   Reviewing brainstorm progress
-   Project execution logistics
-   Project pitch details

### Current Meeting

-   Pitch & artifact review
-   Moving forward: preparing for development

### For next time!

-   Updates on development phase
-   More resources & guidance (PWA's & more tech)

---

## Pitch & Artifact Review

-   Everything is pretty well thought out, it could just use some polishing
    -   More parallel structure for user flowchart
    -   More finalized wireframes
-   No-gos slide should actually be features that are intentionally NOT being implemented
    -   Not things to watch out for (rabbit holes)
-   Regardless, we may start developing!
-   Note: Tips on implementing calendar view
    -   fullcalendar.io - calendar built in JS
        -   Lightweight
    -   Google Calendar
    -   Or homemade JS solution
        -   Simple chart/grid
        -   Cards would be in the grid entries
    -   Focus on week view, try out month view

---

## Preparing for Development

-   Less urgent:
    -   Fix pitch
    -   Finish hi-fidelity wireframes
-   Urgent:
    -   Come up with user stories (tasks)
    -   Develop project roadmap/timeline
    -   Assign roles & tasks

### User stories

-   CRUD operations
    -   Creating recipes (scraping)
        -   Storage
    -   Viewing a recipe
        -   Scaling serving size
        -   Mark off ingredients & mark steps
    -   Updating/editing a recipe
        -   Manual form
        -   Scraping from the web
    -   Deleting recipes
-   Nutrition facts
-   Grocery list
-   Meal prep calendar
-   Database + Accounts

### Project roadmap/timeline

-   Early phase: End of this sprint + next sprint
    -   Front-end: Structure for wireframes
        -   Basic containers for different sections
        -   Static HTML for components - don't worry about shadow DOM yet
        -   Focus on CRUD pages
    -   Back-end: Exploratory programming
        -   Scraping recipes from online
            -   Analyze general formats of JSON LD 
        -   Test API's and narrow down most important functions/features
        -   Working with local storage - how to store recipe data
            -   Later: More defined schemas for things we store
-   Project phase:
    -   Combining front-end and back-end
        -   Using local storage to populate recipe view with stored recipe data
        -   Front-end buttons to edit local storage (CRUD)
        -   Integrating API's w/ recipe data for extra info on front-end
            -   Nutrition
    -   Implementing hi-fidelity
    -   Implementing pipeline & testing
        -   Discussed in later labs
        -   One person each from front-end and back-end

---

## Additional Remarks

### Remaining Questions / Concerns

-   Will we be deploying throughout the project? At least to staging?

---

## Decisions & Takeaways

-   Our pitch is good to go and we may start developing!
-   Basic HTML structure is expected on Monday
-   Roles and stories are to be decided ASAP
-   Exploratory coding should start

---

Meeting finish time: 12:15pm (1 hr 15 min)
