# Todo

`[TODO]` - things that need to be implemented and are not started yet
`[DEV]` - things that are in progress
`[DONE]` - things that are implemented
`[S]` - suggestion, that need to be consider in order to be part of the plan
`*` - optional

## Description
Todo app with extensive feature like categories, different view, searching, user preference etc.
Core idea is to deliver a highly optimized Todo app that has:

## UI
- todo items lists
- category list view
- item detailed view
  - is completed
  - title
  - description
  - subtasks: list of task
  - is favorite
  - category
  - reminder
  - due date
  - repetition options
- searching
- user profile
  - login/register view
  
- user settings
  - completion view settings:
    - at bottom / at the same position / hide
  - auto appear in Today until completion 
- *theme

## Functional

- CRUD over categories and items
- base auth
- *third party auth(google)

## Scalability
- should allow more than 30 categories + more than 200 items per category + 200 subitems per item without UI lag
- 

## Tech stack
- React@19+
- TypeScript
- BE:
  - `[S]`persist in localstorage
  - `[S]`persist in local JSON file
