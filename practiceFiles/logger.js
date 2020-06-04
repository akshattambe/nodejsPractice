
var url = 'http://testmylog.io/logger';

function loggerFunc(message){
    var str = 'asdasdasd';
    console.log(message);
}

function loggerFunc123(message){
    var str = 'asdasdasd';
    console.log(message);
}

module.exports = loggerFunc;
module.exports.loggerFunc123 = loggerFunc123;
//loggerFunc('asdasdasdasd');