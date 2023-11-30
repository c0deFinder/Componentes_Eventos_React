import React from 'react'
import Alerta from "react-bootstrap/Alert";



const Alert = ({props}) => {
  return (
    <Alerta  key={props.change} change={props.change}>
    {props.mensaje}
  </Alerta>
  );
}

export default Alert