import React from 'react';
import Post from './Post';

// Props (Properties) -> Propriedades
export default function App(){
  return (
    <>
      <h1>JStack's Blog</h1>
      <h2>Posts da semana</h2>

      <hr />

      <Post 
        title="Título da Notícia 01" 
        subtitle="Subtítulo da Notícia 01"
      />
      <Post 
        title="Título da Notícia 02" 
        subtitle="Subtítulo da Notícia 02"
      />
      <Post 
        title="Título da Notícia 03" 
        subtitle="Subtítulo da Notícia 03"
      />

      {/* <Post 
        post={{
          title: 'Título da Notícia 01',
          subtitle: 'Subtítulo da Notícia 01'
        }}
      />   */}
      
    </>
  );
}

