import inquirer from 'inquirer';

// commands available to the menu...
const commands = [
  'show',
  'receive_ship',
  'unload',
  'train_send'
]

// the menu loop: it receives the port object and will run commands on it
export function menu(port) {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'command',
        message: 'Welcome to Port Logistics, what do you want to do?',
        choices: [...commands, new inquirer.Separator(), 'quit'],
      }
    ]).then((input) => {
      switch (input.command) {
      case 'show':
        port.show();
        break;
      case 'receive_ship':
        port.receiveShip();
        break;
      case 'unload':
        port.unload();
        break;
      case 'train_send':
        port.trainSend();
        break;
      default:
        process.exit();
      }
      menu(port);
    });
}