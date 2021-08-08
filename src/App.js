import React from 'react';

const category = 'Posts da semana';

export default function App(){
  return (
    <>
      <h1>JStack's Blog{console.log('Expressão dentro do JSX')}</h1>
      <h2>{category}</h2>
    </>
  );
}

/* 
Podemos importar o React.Fragment, a difereça de se usar dessa forma '<React.Fragment></React.Fragment>' para essa forma '<></>' é no primeiro caso podemos colocar atributos no fragment por exemplo um className, mas no segundo caso isso não é permitido.
Elementos adjacentes são irmãos. 
*/

// Render -> Renderizar