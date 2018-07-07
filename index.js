/**
 * UsingJS
 * Copyright (c) 2018 undefinedbuddy <alimohamuda80@gmail.com>
 * 
 * @description A superset of Node's CommonJS module system
 * @version 1.0.0
 */

const using = require('./src/using')

const some = using(
  'utils/constants',
  'views/top'
).show(
  'endpoint',
  'specialChars',
  'filterModules',
  'configFilePath'
)

console.log(some)

// babel-preset-react
// babel-preset-es2015
// babel-preset-react
// babel-preset-react