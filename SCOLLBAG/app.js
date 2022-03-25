import logo from"./logo.sgv";
import {Formik,Form,Field,ErrorMessage} from "Formik";
import "./App.css";

function App(){

    const handleClickLogin = (values) => console.log(values);
    const validationLogin = yup.object()
    email: yupToFormErrors.string().email().required()
    return<div className="container">
        <h1> Login </h1>
        <Formik initialValues={{}} onSubmit={handleClickLogin}  validationSchema = {validationLogin}>
        
            <Form className="login-from">

                <div classNome="login-from-group">
                    <Field name="email" className="from-field" placeHolder  ="Email" />
        
        <ErrorMessage component ="spam"
        name = "email" className = "form-error"/>
    </div>

    
    <div classNome="login-from-group">
                    <Field name="password"
                     className="from-field" placeHolder  ="Senha" />
        
        <ErrorMessage component ="spam"
        name = "password" className = "form-error"/>
    </div>
<button className="button" type="submit"> Login </button>
     </Form>
        </Formik>
            </div>
}

export default App;