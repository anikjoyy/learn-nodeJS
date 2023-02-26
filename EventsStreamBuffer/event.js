const events = require('events');
const eventEmitter = new events.EventEmitter();

//creating an event handler
const myEventHandler = () => {
  console.log('I am a handler');
};

//assign the handle into an event
eventEmitter.on('myEvent', myEventHandler).myEventHandler;

//firing the event
eventEmitter.emit('myEvent');
