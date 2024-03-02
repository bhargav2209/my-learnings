console.log('index.js');


console.log('===========================');
console.log('Default function export');
console.log('===========================');
const defaultFunction = require('./default-function');
defaultFunction();


console.log('\n\n\n===========================');
console.log('Export as JSON');
console.log('===========================');
const {prop, func} = require('./json-export');
console.log('json.prop value ==>', prop);
console.log('json.func value ==>', func);
console.log(func());


console.log('\n\n\n===========================');
console.log('Using require with dot notation');
console.log('===========================');
console.log('json.prop value ==>', require('./json-export').prop);
console.log('json.func value ==>', require('./json-export').func);
console.log(require('./json-export').func());
