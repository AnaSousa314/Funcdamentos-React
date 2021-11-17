import React,{useContext} from 'react';
import PropTypes from 'prop-types'

import Title from '../Title';
import Button from '../Button';
import styles from './Header.scss';

import { ThemeContext } from '../../context/ThemeContext';

console.log(styles);
export default function Header(props){
  // const context = useContext(ThemeContext);
  // console.log(context);

  const {onToggleTheme} = useContext(ThemeContext);
  return(
    <>
      <Title>{props.title}</Title>
      <Button
        onClick={onToggleTheme}
      >
        Mudar Tema
      </Button>
      {props.children}
    </>
  )
}

Header.propTypes = {
  // onToggleTheme: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node
}

Header.defaultProps={
  title: `JStack's Blog`
}

/* exemplo de estilização inline
  <div 
      style={{
        background: '#ccc',
        fontFamily:'sans-serif',
        fontSize: 36,//por padrão é em px, se quiser outro, coloque entre aspas;
        marginBottom: '4rem'
      }}
  >
  </div>    
*/