import React, { useState } from 'react'

const UserForm = () => {
    const [newForm, setNewForm] = useState({})
    const [titleError, setTitleError] = useState("")
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false)

    const onChangeHandler = ({ target: { value, name } }) => {
        const objeto = { [name]: value }
        setNewForm({ ...newForm, ...objeto })



        //  console.log("***name :" + name) //imprime la variable name=firstname ,lastname
        //  console.log(name === "firstName")// true or false 

    }

    const createForm = (e) => {

        e.preventDefault()
        //exprecion regular mail
        const regularExpression = RegExp(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/)
        console.log("expresion regular = " + regularExpression.test(newForm.email))

        const formComplit = newForm
        console.log(formComplit)
        console.log("****newform***")
        console.log(newForm)
        //validacion y mensaje de error 
        //  console.log("name :" + newForm.firstName)
        // console.log("value length :" + newForm.firstName.length)
        let errors = {}
        if (!newForm.firstName || newForm.firstName.length < 4) { //!newForm.firstName cuando esta bacio no se crea la propiedad nombre a si que comprueba que este 
            errors['fistName'] = "fist name mor longer than 4 characters"
        }
        if (!newForm.lastName || newForm.lastName.length < 4) {
            errors['lastName'] = "Last name mor longer than 4 characters"
        }
        if (!newForm.email || newForm.email.length < 6 || !regularExpression.test(newForm.email)) {
            errors['email'] = "mail longer than 5 characters"
        }
        if (!newForm.email || !regularExpression.test(newForm.email)) {
            errors['email'] = "mail tiene que tener el formato valido"
        }


        if (!newForm.currentPassword || newForm.currentPassword.length < 8) {
            errors['currentPassword'] = "password mor longer than 8 characters"
        }
        if (!newForm.password || newForm.password !== newForm.currentPassword) {
            errors['password'] = "password and currentPassword can be equal "
        }




        if (Object.entries(errors).length !== 0) {
            setTitleError(errors)
        } else {
            console.log("usuaria guardado")
            setHasBeenSubmitted(true)
            newForm.firstName = ""
            newForm.lastName = ""
            newForm.email = ""
            newForm.currentPassword = ""
            newForm.password = ""


        }
    }

    return (
        <div>
            <form onSubmit={createForm}>
                <h3>{hasBeenSubmitted ? 'Thank you for submitting the form!' : 'Welcome, please submit the form'}</h3>
                <div>
                    <label>First name: </label>
                    <input type="text" name="firstName" value={newForm.firstName} onChange={onChangeHandler} />
                    <p>{titleError.fistName}</p>
                </div>
                <div>
                    <label>Last name: </label>
                    <input type="text" name="lastName" value={newForm.lastName} onChange={onChangeHandler} />
                    <p>{titleError.lastName}</p>
                </div>
                <div>
                    <label>Email: </label>
                    <input type="email" name="email" value={newForm.email} onChange={onChangeHandler} />
                    <p>{titleError.email}</p>
                </div>
                <div>
                    <label>Current Password: </label>
                    <input type="text" name="currentPassword" value={newForm.currentPassword} onChange={onChangeHandler} />
                    <p>{titleError.currentPassword}</p>
                </div>
                <div>
                    <label>Password: </label>
                    <input type="text" name="password" value={newForm.password} onChange={onChangeHandler} />
                    <p>{titleError.password}</p>
                </div>
                <div>
                    <input type="submit" value="submit" />
                </div>

            </form>
        </div>
    );
}
export default UserForm
