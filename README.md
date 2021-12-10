## Packages Use

- React (Frontend Framework)
- Redux ?
- Styled Components (Styling)
- Axios (Making HTTP Requests)
- Nodemon (CLI that automatically restarts server when you save)
- Mongoose (ORM)
- Mongo (DB)
- Express.js (Node.js web application framework)

DB runs on localhost3001 <br>
FE runs on localhost3000

Things need to do <br>

- create a seeding script to populate db
- have a schema for a soldier
  - figure out relationships with superiors
  - soldier can only have one superior 
  - superiors can have many subordiantes
  - schema should have
    - name (String)
    - rank (String)
    - sex (Number) ? 0Male 1Female or ShortString
    - id (Number)
    - start date (Date)
    - office phone (Number)
    - email (String)
    - superior (String)
- have frontend connect to server
- have server connect to db
- get images for peoples avatars
- learn how to upload image on a mongodb local
- CRUD operations 
  - create soldier
  - update soldier
  - delete solider
  - get soldier 
- Whe creating a solider
  - Should have input for name
  - A dropdown menu to select Rank
  - A radio button for Sex
  - Input for Date
  - Input for Phone
  - Input for Email
  - Dropdown menu to select Superior