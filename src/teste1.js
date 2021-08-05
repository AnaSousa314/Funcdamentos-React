const user = {

};

// Optional chaining
console.log(user?.address?.street);

/*  
yarn babel src -d build

Podemos colocar só um arquivo especifico de src, src/index.js

O build é o nome da pasta em queremos que a transpilação seja colocada
*/ 