import { strict as assert } from 'assert';
import { Port } from './index.js';

var port;

describe("testing port functionalities", function () {
  beforeEach(() => {
    port = new Port();
  });
  it("should be initialized correctly", function () {
    assert.deepStrictEqual(port, new Port(null, 0, 0));
  });
  it("should manage example 1 commands from PDF test correctly", function () {
    assert.deepStrictEqual(port, new Port(null, 0, 0));
  });
  it("should manage example 2 commands from PDF test correctly", function () {
    port.receiveShip();
    assert.deepStrictEqual(port, new Port(4, 0, 0));
  });
  it("should manage example 3 commands from PDF test correctly", function () {
    port.receiveShip();
    port.unload();
    assert.deepStrictEqual(port, new Port(0, 1, 3));
  });
  it("should manage example 4 commands from PDF test correctly", function () {
    port.receiveShip();
    port.unload();
    port.receiveShip();
    port.unload();
    assert.deepStrictEqual(port, new Port(0, 5, 3));
  });
  it("should manage example 5 commands from PDF test correctly", function () {
    port.receiveShip();
    port.unload();
    port.receiveShip();
    port.unload();
    port.receiveShip();
    port.unload();
    port.trainSend();
    assert.deepStrictEqual(port, new Port(4, 5, 0));
  });
});

