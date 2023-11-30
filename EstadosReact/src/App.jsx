
import './App.css'
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Registro  from "./components/Registro";

function App() {
  const [Alert, setAlert] = useState({ error: false, msg: "", color: "" });

  return (
    <div className="container">
      <Registro setAlert={setAlert} alerta={Alert} />
    </div>
  );
}
export default App;