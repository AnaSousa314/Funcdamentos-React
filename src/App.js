import React from "react";
import Post from "./Post";
import Header from "./Header";
// Props (Properties) -> Propriedades
export default function App() {
  return (
    <>
      <Header title="JStack's Blog">
        <h2>Posts da semana</h2>
      </Header>

      <hr />

      {/* <Post 
        likes="20"
        title="Título da Notícia 01" 
        subtitle="Subtítulo da Notícia 01"
      />*/}


      <Post
        likes={20}
        post={{
          title: "Título da Notícia 01",
          subtitle: "Subtítulo da Notícia 01",
        }}
      />

      <Post
        likes={10}
        post={{
          title: "Título da Notícia 02",
          subtitle: "Subtítulo da Notícia 02",
        }}
      />

      <Post
        likes={40}
        post={{
          title: "Título da Notícia 03",
          subtitle: "Subtítulo da Notícia 03",
        }}
      />
    </>
  );
}
