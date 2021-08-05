"use strict";

var _user$address;

var user = {}; // Optional chaining

console.log(user === null || user === void 0 ? void 0 : (_user$address = user.address) === null || _user$address === void 0 ? void 0 : _user$address.street);
/*  
yarn babel src -d build

Podemos colocar só um arquivo especifico de src, src/index.js

O build é o nome da pasta em queremos que a transpilação seja colocada
*/