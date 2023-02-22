import {Form, Formik} from 'formik'

export function ProductoFormulario(){
    return(
        <>

        <Formik>
            <Form>
                <label>Nombre producto</label>
                <input type="text" name="nombre"/>
            </Form>
        </Formik>
        </>
        
    )

}