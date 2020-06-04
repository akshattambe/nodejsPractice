const EventEmitter = require('events');

class LoggerClass extends EventEmitter{
    
    log(message){
        console.log(message);
        this.emit('messageLogged', {data : 'message event is raised and logged.'});
    }

}

module.exports = LoggerClass;