import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";




const Formulari01 = (props) => {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [pass, setPass] = useState("");
    const [errorr, setError] = useState(false);
    
    

    const validarDatos = (e) => {
        e.preventDefault();
        if (nombre === Number ) {
            props.setAlert({
                error: true,
                msg: "Ingrese su nombre correctamente",
                color: "danger",
            })
            
        }
        if (nombre === Number ||nombre === "" || email === "" || password === "" || pass === "") {
            props.setAlert({
                error: true,
                msg: "Ingrese sus datos",
                
               
            })
            setError(true);;
        } else if (password != pass) {
            props.setAlert({
                error: true,
                msg: "Contraseña Incorrecta",
                color: "red",
            })
            
        } else {
            setError(false);
            props.setAlert({
                error: true,
                msg: "Registro correcto",
                color: "success",
            })
    
            setNombre("");
            setEmail("");
            setPassword("");
            setPass("");
            

        }
    }
    return (
        <>
            <Form className='justify-content-center align-content-center text-center ' onSubmit={validarDatos}>
            
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Control
                        placeholder="Nombre"
                        type="text"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                        placeholder="tuemail@ejemplo.com"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control
                        placeholder="Contraseña"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control
                        placeholder="Confirma tu contraseña"
                        type="password"
                        value={pass}
                        onChange={(e) => setPass(e.target.value)}
                    />
                </Form.Group>
                
                <Button className="w-100" type="submit">
                {errorr ? <p  style={{ color: "yellow", margin: "4px",padding:"2px" }}>Todos los campos son obligatorios</p> : null}
                    Registrarse
                </Button>
            </Form>
        </>
    );
};

export default Formulari01