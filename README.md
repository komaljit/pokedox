## Pokedox App
A user-friendly application to get details about the pokemons (only first 151 pokemons)
* Search by pokemon name or id- User can search by pokemon nae or id. they canonly serach for first 150 pokemons.
    User will see name, id, types, image, and special abilities of the serached pokemon
* Search by type- User will see the type, id, list of pkemons which come under the searched type etc.
    

### API used- http://pokeapi.co/

##### Tech Stack- React, Enzyme, Jest, HTML, CSS, Bootstrap

Steps to run this application-

    Go the the folder pokedox and run following commands
    1.  npm install
    2.  npm start
    
    To run test- npm test
    
    Once the application starts, go to http://localhost:3000/

The component structure of pokedox is as follow-

* App- It is the top level component. It is present in the src/ folder

* Container- This component has two states pokemonDetails, cardType. The cardType state decides which card 
    will be rendered. This state is controlled by SearchBar through showPokeDoxCard method passed as props to SearchBar

* SearchBar- This component has two states- input, message, url
    input- it is the name or id or type entered by user
    url- it is used to determine the which api to call (ie. type or name api)
    message- it is used to indicated message for eg- no result found 

* NameCard- This component is rendered when user search for by name pokemon or id

* TypeCard- This component is rendered when user search by type or type id


#### Test cases<br /> 
    The test cases are written using Enzyme. Onle sesfew test cases are included most of which are for searchBar comonnet
    