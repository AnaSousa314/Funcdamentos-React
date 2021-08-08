import React from 'react';

// Functional Component (Componente Funcional) - forma mais moderna
export default function App(){
  return (
    <>
      <h1>Componente App</h1>
      <h2>Subtítulo</h2>
    </>
  );
}

/* 
Podemos importar o React.Fragment, a difereça de se usar dessa forma '<React.Fragment></React.Fragment>' para essa forma '<></>' é no primeiro caso podemos colocar atributos no fragment por exemplo um className, mas no segundo caso isso não é permitido.
Elementos adjacentes são irmãos. 
*/