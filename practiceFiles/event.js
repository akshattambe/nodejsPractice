const EventEmitter = require('events');
var eventsObj = new EventEmitter();

eventsObj.on('message event', function(){
    console.log('Event listner is added');
});

eventsObj.emit('message event');
//-------------------------------***------------------------------
eventsObj.on('Logging', (evetArgs) => {
    console.log(evetArgs.data);
});

eventsObj.emit('Logging', {data:'this is message from the event.'});