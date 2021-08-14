import React from "react";
import PropTypes from "prop-types";

export default function Post(props) {
  // props.title = 'Título Sobrescrito'

  return (
    <>
      <article>
        <strong>
          {/* {props.post.read ? <s>{props.post.title}</s> : props.post.title} */}

          {props.post.read && <s>{props.post.title}</s>}
          {!props.post.read && props.post.title}

        </strong>
        <button onClick={() => props.onRemove(props.post.id)}>Remover</button>
        <br />
        <small>{props.post.subtitle}</small>
        <br />
        Média: {props.post.likes / 2}
      </article>
      <br />
    </>
  );
}

/* props.post.title */

Post.propTypes = {
  onRemove: PropTypes.func.isRequired,
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    read: PropTypes.bool.isRequired,
  }).isRequired,
};

/* shape() serve para objetos */

//Primeira forma de renderização condicional
// if(props.post.read){
  //   return <h2>{props.post.title} já foi lido</h2>
  // }

/* Segunda forma de renderizaçõ condicional
{props.post.read ? <s>{props.post.title}</s> : props.post.title}
*/


//Terceira forma de renderização condicional
// short circuit evaluation = &&

/* 
  {props.post.read && <s>{props.post.title}</s>}
  {!props.post.read && props.post.title}
*/

//  se o valor a esquerda do && for true ele retorna o q está a direita

