import { useField, ErrorMessage } from 'formik';
import React from 'react';
import { Form } from 'react-bootstrap'
const TextField = ({ ...props }) => {
    const [field, meta] = useField(props)
    return (
        <div className="mb-2">
            <Form.Group className="mb-3" controlId="formBasicPassword" >
                <Form.Control type="password" name="password" placeholder="Password"
                    {...field} {...props}
                    autoComplete="off"
                    className={`form-control shadow-none ${meta.touched && meta.error && 'is-invalid'}`}

                />
                <ErrorMessage name={field.name} />
            </Form.Group>

        </div>
    );
}

export default TextField;