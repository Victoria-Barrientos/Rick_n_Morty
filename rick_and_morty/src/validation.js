const regexEmail = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
const regexPassword = /^(?=.*?[a-z]).{8,16}$/;
const regexNumbers = /[0-9]/

const validation = (property, value, errors, setErrors) => {
    if (property === "email") {
        if(!value) {
            setErrors({
                ...errors,
                [property]: "El email no puede estar vacío."
            })
        } 
        // if(emailLength.test(value)) {
        //     setErrors({
        //         ...errors,
        //         [property]: "El email no puede tener mas de 35 caracteres."
        //     })
        // }
        if (!regexEmail.test(value)) {
            setErrors({
                ...errors,
                [property]: "El email debe tener formato Email."
            })
        } else {
            setErrors({})
        }
    }
    if (property === "password") {
        if(!value) {
            setErrors({
                ...errors,
                [property]: "La contraseña no puede estar vacía."
            })
        } 
        if(!(regexPassword.test(value))) {
            setErrors({
                ...errors,
                [property]: "La contraseña tiene que tener una longitud entre 8 y 16 caracteres."
            })
        }
        if(!regexNumbers.test(value)) {
            setErrors({
                ...errors,
                [property]: "La contraseña tiene que tener al menos un número."
            })
        }
        else {
            setErrors({})
        }
    }
}

export default validation