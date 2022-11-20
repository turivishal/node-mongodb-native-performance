# node-mongodb-native-performance
Test difference versions of node-mongodb-native driver

## Execute the server:
- Go specific directory from 4.3.0, 4.6.0, 4.12.0
```
cd 4.3.0
```
- NPM install
```
npm install
```
- Run the server file
```
node server.js
```

## Result:
```
mongodb-npm-4.3.0
=================
connection: 15.517ms
find: 10.751ms
explain.executionTimeMillis:  0
```