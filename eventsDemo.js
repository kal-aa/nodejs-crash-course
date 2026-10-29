import events from "events";

const myEmmitter = new events.EventEmitter();

const greatHandler = (name) => {
  console.log("Hello " + name);
};
const goodbyeHandler = (name) => {
  console.log("Goodbye " + name);
};

// Register event listners
myEmmitter.on("greet", greatHandler);
myEmmitter.on("goodbye", goodbyeHandler);

// Emit events
myEmmitter.emit("greet", "Kalab");
myEmmitter.emit("goodbye", "Kalab");

// Error handler
myEmmitter.on("error", (error) => {
  console.error("An Error Occured", error);
});

// Simulate error
myEmmitter.emit("error", new Error("Something went wrong"));
