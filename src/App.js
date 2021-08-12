import React from "react";
import Post from "./Post";
import Header from "./Header";
// Props (Properties) -> Propriedades

const posts = [
  {title: "Title#01",subtitle: "Sub#01",likes:50},
  {title: "Title#02",subtitle: "Sub#02",likes:40},
  {title: "Title#03",subtitle: "Sub#03",likes:10},
  {title: "Title#04",subtitle: "Sub#04",likes:30}

] 
export default function App() {
  return (
    <>
      <Header title="JStack's Blog">
        <h2>Posts da semana</h2>
      </Header>

      <hr />
      
      {posts.map(post =>(
            <Post
              key={post.title}
              likes={post.likes}
              post={{
                title: post.title,
                subtitle: post.subtitle,
              }}
            />
          )
        )
      }
    </>
  );
}
