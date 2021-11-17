import React from "react";
import PropTypes from "prop-types";
import PostHeader from "./PostHeader";
import styles from './Post.scss';

import {Subtitle,Rate} from './styles'



export default function Post(props) {
  // props.title = 'Título Sobrescrito'

  return (
  
      <article 
        className={
          props.post.removed
            ? styles.postDeleted
            : styles.post
        }>
        <PostHeader
          onRemove={props.onRemove}
          post={{
            id: props.post.id,
            title: props.post.title,
            read: props.post.read
          }}
        />
  
        <Subtitle>{props.post.subtitle}</Subtitle>
  
        <Rate>Média: {props.post.likes / 2}</Rate>
      </article>
      
    
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
    removed: PropTypes.bool.isRequired
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

