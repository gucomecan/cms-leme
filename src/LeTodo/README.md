# Todo

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
  - mode: base/advanced
- *theme: light/dark...

## Functional

- CRUD over categories and items
- reorder items
- base view and advanced view
  - base: just a list of to do items
  - advanced: items are grouped by categories
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

### 📑 Dictionary

<span style="color:#e9924b;">[T]</span> - [TODO] things that need to be implemented and are not started yet

<span style="color:#2596be;">[D]</span> - [IN DEV] things that are in progress

<span style="color:#2B9425;">[D]</span> - [DONE] things that are implemented/ready

<span style="color:#F0DC43;">[S]</span> - suggestion, that need to be consider in order to be part of the plan

<span style="color:#A243F0;">[*]</span> - optional
