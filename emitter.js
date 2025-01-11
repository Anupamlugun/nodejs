const eventEmitter = require("events");
const myEmitter = new eventEmitter();
myEmitter.on("greet", () => {
  console.log("hello world");
});
myEmitter.emit("greet");

// EventEmitter allows you to handle asynchronous events and listeners in Node.js.
// You can emit events and pass arguments to listeners.
// Listeners can be added using .on() and removed using .removeListener() or .off().
// The once method allows listeners to be executed only once.
// EventEmitter is widely used in many core modules, like fs and http.
