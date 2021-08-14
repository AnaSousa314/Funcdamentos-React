import React from 'react';
import PropTypes from 'prop-types';

export default function Post(props){
  // props.title = 'Título Sobrescrito'

  return(
    <>
      <article>
        <strong>{props.post.title}</strong>
        <button onClick={()=>props.onRemove(props.post.id)}>
          Remover
        </button>
        <br />
        <small>{props.post.subtitle}</small>
        <br />
        Média: {props.likes / 2}
      </article>
      <br />
    </>
  );
}

/* props.post.title */

Post.propTypes = {
  likes: PropTypes.number.isRequired,
  onRemove: PropTypes.func.isRequired,
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired
  }).isRequired
}

/* shape() serve para objetos */