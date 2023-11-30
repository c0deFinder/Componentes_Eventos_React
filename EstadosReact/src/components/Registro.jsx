
import SocialMedia from "./SocialesButton"
import Formulari01 from "./formulario"
import Container from "react-bootstrap/Container";
import Alert from "./Alert";


const Registro = (props) => {
    const iconosImagenes = [
      {
        id: 1,
        value: "fa-brands fa-facebook",
      },
      {
        id: 2,
        value: "fa-brands fa-github",
      },
      {
        id: 3,
        value: "fa-brands fa-linkedin-in",
      },
    ];
    return (
      <>
        <Container className="pt-5 pl-2 pr-2 mb-5 pb-5 bg-light text-center rounded-5">
          <h1>Crear una cuenta</h1>
          <div className="pb-0" id="seccionIconos">
            {iconosImagenes.map(({ id, value }) => (
              <SocialMedia key={id} icono={value} />
            ))}
          </div>
          
          <Formulari01 setAlert={props.setAlert} alerta={props.alerta} />
          {props.alerta.msg ? (
            <Alert
              className="rounded-3"
              change={props.alerta.color}
              mensaje={props.alerta.msg}
            />
          ) : null}
        </Container>
      </>
    );
  };
  
  export default Registro;