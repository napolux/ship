const TRAIN_MAX_SIZE = 3;
const SHIP_MAX_SIZE = 4;
const STORAGE_MAX_SIZE = 5;
const PORT_MAX_SIZE = 12;

export class Port {
  constructor(ship, storage, train) {
    this.ship = (ship > 0 || ship === 0) ? ship : null;
    this.storage = storage || 0;
    this.train = train || 0;
  }

  show() {
    // top of the cranes
    console.log('_^_^');

    // all the lines before the train one
    for (let i = STORAGE_MAX_SIZE; i >= 2; i--) {
      const shipLine = (this.ship >= i) ? 'X' : ' ';
      const storageLine = (this.storage >= i) ? 'X' : ' ';
      console.log(shipLine + '|' + storageLine + '|');
    }

    // the train line
    const shipLine = (this.ship >= 1) ? 'X' : ' ';
    const storageLine = (this.storage >= 1) ? 'X' : ' ';
    let trainLine = '';

    for (let i = 0; i < TRAIN_MAX_SIZE; i++) {
      trainLine += (this.train > i) ? 'X' : ' ';
    }

    console.log(shipLine + '|' + storageLine + '|' + trainLine + '  D i');

    // is there at least 1 ship in port?
    if (this.ship === null) {
      console.log(' A_A---::%%%');
    } else {
      console.log('VA_A---::%%%');
    }
  }

  receiveShip() {
    // a new ship is here!
    this.ship = SHIP_MAX_SIZE;
  }

  unload() {
    // our port is made of 3 "arrays" of size
    // SHIP_MAX_SIZE    +
    // STORAGE_MAX_SIZE +
    // TRAIN_MAX_SIZE
    // For a total of 12 max. items
    // XXXX XXXXXX XXX (if everything is full)
    // we are going to create one single array of items 
    // and then reverse it to unload our port
    let status = [];

    const currentContainersCount = this.ship + this.storage + this.train;

    for (let i = 1; i <= PORT_MAX_SIZE; i++) {
      if (i <= currentContainersCount) {
        status.push('X');
      } else {
        status.push('O');
      }
    }

    // unloading our port...
    status = status.reverse();

    // slicing and filtering!
    // slice 0, 4 -> ship
    // slice 4, 9 -> storage
    // slice 9, 12 -> train
    const ship = status.slice(0, 4);
    const storage = status.slice(4, 9);
    const train = status.slice(9, 12);

    // counting only the "X"s
    this.train = train.filter(x => x === 'X').length
    this.storage = storage.filter(x => x === 'X').length
    this.ship = ship.filter(x => x === 'X').length
  }

  trainSend() {
    // the train is gone, goodbye!
    this.train = 0;
  }
}