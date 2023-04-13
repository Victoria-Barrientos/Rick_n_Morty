import { useState } from "react";
import validation from "../../validation";
import styles from "./LoginForm.module.css";

export default function LoginForm({login}) {

    const [form, setForm] = useState(
        {
        email: "",
        password: ""
        }
    );

    const [errors, setErrors] = useState(
        {}
    );

    const handleChange = (event) => {
        let property = event.target.name;
        let value = event.target.value;
        setForm({
            ...form,
            [property]: value
        })
        validation (property, value, errors, setErrors)
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        login(form)
        if(!form.email || !form.password) return alert ('Los campos no pueden estar vacios')
        if(form.email && !form.password) return alert ('Por favor, escriba su contrasena')
        if (errors.length > 0) return alert('Debe llenar todos los campos')
        if (!errors.length) {
        setForm({
            email: "",
            password: ""
            }
        )
        setErrors(
            {}
        )
        return alert("Datos completos")}
    }

    return (
        <div className={styles.Container}>
            <h2>Log In</h2>
            <form onSubmit={handleSubmit}>
            <div className={styles.Field}>
                <label className={styles.Label}>Email</label>
                <input className={styles.Input} type="email" name="email" value={form.email} onChange={handleChange}></input>
                <div>{errors?.email}</div>
            </div>
            <div className={styles.Field}>
                <label className={styles.Label}>Password</label>
                <input className={styles.Input} type="password" name="password" value={form.password} onChange={handleChange}></input>
                <div>{errors?.password}</div>
            </div>
            <div className={styles.ButtonContainer}>
                <button className={styles.Button} type="submit">Log in</button>
            </div>
            </form>
        </div>
    )
}