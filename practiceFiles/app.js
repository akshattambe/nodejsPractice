
const logger = require('./logger');
const EventClass = require('./eventClass');

console.log(logger);
logger('this is new message!!')
logger.loggerFunc123('thi is a second function with the same object!!');

var sayHello = function (name){
    console.log(name); 
}

//-------------------------------***------------------------------
const eventClassObj = new EventClass();
eventClassObj.on('messageLogged', (eventArgs) => {
    console.log(eventArgs.data);
});



eventClassObj.log('Test events in JS');
