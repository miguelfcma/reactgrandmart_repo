/** */
import styles from "./Login.module.css";

import { InputControl } from "../InputControl/InputControl";
import { Link, useNavigate } from "react-router-dom";

import { auth } from "../../data/firebase.jsx";

import { signInWithEmailAndPassword } from "firebase/auth";

import { useState } from "react";

export function Login() {
  const navigate = useNavigate();
  const [values, setValues] = useState({ email: "", pass: "" });
  const [errorMsg, setErrorMsg] = useState([]);
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const Iniciar = () => {
    if (!values.email || !values.pass) {
      setErrorMsg("Datos incompletos");
      return;
    }
    setErrorMsg("");
    setSubmitButtonDisabled(true);
    signInWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
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
        <h1 className={styles.heading}>Login</h1>
        <InputControl className={styles.label}
          label="Email"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
          placeholder="Ingrese su correo"
        />
        <InputControl className={styles.label}
          label="Contraseña"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, pass: event.target.value }))
          }
          placeholder="Ingrese su contraseña"
        />

        <div className={styles.footer}>
          <b className={styles.error}>{errorMsg}</b>
          <button onClick={Iniciar} disabled={submitButtonDisabled}>
            Iniciar sesión
          </button>
          <p>
            <span>
              <Link to="/login">Olvide mi contraseña</Link>
            </span>
        
            <span>
              <Link to="/signup">Crear cuenta</Link>
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
