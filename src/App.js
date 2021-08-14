import React, {useState} from "react";
import Post from "./Post";
import Header from "./Header";
// Props (Properties) -> Propriedades

export default function App() {
  const [posts,setPosts] = useState([
    {id: Math.random(),title: "Title#01",subtitle: "Sub#01",likes:50, read:false},
    {id: Math.random(),title: "Title#02",subtitle:  "Sub#02",likes:40,read:true},
    {id: Math.random(),title: "Title#03",subtitle:  "Sub#03",likes:10,read:false},
    {id: Math.random(),title: "Title#04",subtitle:  "Sub#04",likes:30,read:true}
  ]);
  // console.log(posts);

  function handleRefresh(){
   
      setPosts((prevState)=> [
        ...prevState,{
        id: Math.random(),
        title: `Title#0${prevState.length+1}`,
        subtitle: `Sub#0${prevState.length+1}`,
        likes:50
        }
      ]);

    //com o prevState o react só vai pegar a lista de posts no momento em que ele for atualizar o state
    //sempre que tiver que mudar o estado inicial do state, é melhor não usar o proprio estado, no caso pegar o proprio posts, é melhor usar o prevState assim não sobrescreve o valor do estado
  }

  function handleRemovePost(postId){
    setPosts((prevState) => (
    prevState.filter(post => post.id !== postId)
    ));
  }

  return (
    <>
      <Header title="JStack's Blog">
        <h2>
          Posts da semana
          <button onClick={handleRefresh}>Atualizar</button>
        </h2>
      </Header>

      <hr />
      
      {posts.map(post =>(
            <Post
              key={post.id}
              onRemove={handleRemovePost}
              post={post}
            />
          )
        )
      }
    </>
  );
}
