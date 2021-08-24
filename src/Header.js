import React,{useContext} from 'react';
import PropTypes from 'prop-types'
import Button from './Button';
import { ThemeContext } from './ThemeContext';
export default function Header(props){
  // const context = useContext(ThemeContext);
  // console.log(context);

  const {onToggleTheme} = useContext(ThemeContext);
  return(
    <div 
      style={{
        background: '#ccc',
        fontFamily:'sans-serif',
        fontSize: 36,//por padrão é em px, se quiser outro, coloque entre aspas;
        marginBottom: '4rem'
      }}
    >
      <h1>{props.title}</h1>
      <Button
        onClick={onToggleTheme}
      >
        Mudar Tema
      </Button>
      {props.children}
    </div>
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