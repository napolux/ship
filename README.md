# ship

> Don't spend your entire life building a ship, without ever tasting the salt of the ocean.

## setup

- clone the repo
- run `npm install` (if you're using npm, otherwise `yarn`)
- launch `node index.js` (tested on node 13.12.0)
- use arrow keys to navigate the menu and press enter to input a command or quit
- run `npm run test` (or yarn equivalent) to run tests

### some details

- we're using ES6 modules
- we're using [Inquirer.js](https://github.com/SBoudrias/Inquirer.js#readme) to manage command prompt and management
- we're using [mocha](https://mochajs.org/) for unit tests. Test cases are taken from the project document
- you can lint code by running `npm run lint` or `npm run lint:fix` (or equivalent yarn commands)
