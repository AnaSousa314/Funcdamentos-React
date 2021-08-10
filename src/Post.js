import React from 'react';

export default function Post(props){
  // console.log(props);

  /* props são apenas leitura para os filhos, não pode alterar os dados */
  props.title = 'Título Sobrescrito'

  return(
    <>
      <article>
        <h3>{props.title}</h3>
        <small>{props.subtitle}</small>
      </article>
      <br />
    </>
  );
}

/* props.post.title */