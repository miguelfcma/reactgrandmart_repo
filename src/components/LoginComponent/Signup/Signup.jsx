/**Este es el registro de una nueva cuenta dentro */ 
import styles from "./Signup.module.css";

import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../data/firebase.jsx";

import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

import { InputControl } from "../InputControl/InputControl";

export function Signup() {
  /**Con esto navegamos sin tener que poner botones */
  const navigate = useNavigate();
  /**use state para la info de los usuarios */
  const [values, setvalues] = useState({ name: "", email: "", pass: "" });

  /**use state para los errores */
  const [errorMsg, setErrorMsg] = useState([]);
  
  /** */ 
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const registro = () => {
    if (!values.name || !values.email || !values.pass) {
      setErrorMsg("Llene todos los campos");
      return;
    
    }
    setErrorMsg("");
    setSubmitButtonDisabled(true);
    createUserWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        const user = res.user;
        await updateProfile(user, {
          displayName: values.name,
        });
        navigate("/");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
  };

  return (
    <div className={styles.container}>
      <div className={styles.innerBox}>
        <h1 className={styles.heading}>Registro</h1>
        <InputControl className={styles.label}
          label="Nombre"
          placeholder="Ingresa un nombre de usuario"
          onChange={(event) =>
            setvalues((prev) => ({ ...prev, name: event.target.value }))
          }
        />
        <InputControl className={styles.label}
          label="Email"
          placeholder="Ingrese un correo electrónico"
          onChange={(event) =>
            setvalues((prev) => ({ ...prev, email: event.target.value }))
          }
        />
        <InputControl className={styles.label}
          label="Contraseña"
          placeholder="Ingrese una contraseña"
          onChange={(event) =>
            setvalues((prev) => ({ ...prev, pass: event.target.value }))
          }
        />
        <div className={styles.footer}>
          <b className={styles.error}>{errorMsg}</b>
          <button onClick={registro} disabled={submitButtonDisabled}>
            Guardar
          </button>
          <p>
            Si ya tienes una cuenta inicia sesión
            <span>
              <Link to="/login"> ir a iniciar sesión</Link>
            </span>
            <span>
              <Link to="/">Volver a página principal</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
