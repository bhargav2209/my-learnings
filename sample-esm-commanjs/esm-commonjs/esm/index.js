console.log('index.js');


console.log('===========================');
console.log('Default function export');
console.log('===========================');
import defaultFunction from './default-function.js';
defaultFunction();


console.log('\n\n\n===========================');
console.log('Export as JSON');
console.log('===========================');
import {prop, func} from './json-export.js';
console.log('json.prop value ==>', prop);
console.log('json.func value ==>', func);
console.log(func());

