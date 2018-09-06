## Pokedox app-
A user-friendly application to get details about the pokemon by name, id or type.

## API used- http://pokeapi.co/

## Tech Stack- React, Enzyme, Jest, HTML, CSS, Bootstrap

Steps to run this application-

    Go the the folder pokedox and run following commands
    1.  npm install
    2.  npm start
    
    To run test- npm test
    
    Once the application starts, go to http://localhost:3000/

The component structure of pokedox is as follow-

* App- It is the top level component. It is prsent in the src/ folder

* Container- This component has two states pokemonDetails, cardType. The cardType state decides which card 
    will be rendered. This state is controlled by SearchBar through showPokeDoxCard method passed as props to SearchBar

* SearchBar- This component has two states- input, message, url
    input- it is the name or id or type entered by user
    url- it is used to determine the which api to call (ie. type or name api)
    message- it is used to indicated message if no result found for user input

* NameCard- This component is rendered when user search for by name pokemon or id

* TypeCard- This component is rendered when user search by type or type id
