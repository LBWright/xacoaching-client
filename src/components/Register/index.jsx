import React from 'react';
import { withFormik } from 'formik';
import Yup from 'yup';

const RegistrationForm = ({values, handleChange}) => {
    return (
        <form >
            <input 
                type="email" 
                name="email" 
                placeholder="Email" 
                value={values.email} 
                onChange={handleChange} 
            />
            <input 
                type="password" 
                name="password" 
                placeholder="Password" 
                value={values.password} 
                onChange={handleChange} 
            />
        </form>
    )
}
const FormikRegistration = withFormik({
    mapPropsToValues: () => ({
        email: 'test',
        password: ''
    })
})(RegistrationForm)

export default FormikRegistration;