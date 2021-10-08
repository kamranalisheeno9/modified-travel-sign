import './login.css';
import React,{useState} from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import { Container, Card, Form, Button,Modal,ListGroup } from 'react-bootstrap';
import TextField from './textField'

const Forgetpassmodel = (props) => {

    const [forgetPassValues,setForgetPassValues]=useState({})

    const [show, setShow] = useState(false);

    const handleClose = (email,newpassword) =>  {
        setShow(false)
        
    }
    const handleShow = (email,newpass) => {
        setShow(true)
        
        
    };
    const Validate = yup.object({
       
        email: yup.string()
          .email('Email is Invalid')
          .required('Required'),
            newPassword: yup.string()
          .min(6, 'Password Must Be At Least 6 Characters')
          .required('Required'),
      })
    

    return (
        <Formik
        initialValues={{
          email: '',
          newPassword: '',
        }}
        onSubmit={values => {
            {values.email ="" || values.newPassword == "" ? 
            values.email ="" &&
            values.newPassword =="" 
            :

            setForgetPassValues(values)
            console.log("Password Changed");

        }

          }}
        
        validationSchema={Validate}
      >
          
      {formik => (
          
          <>
            <a variant="primary" className="forget-password" onClick={()=>handleShow(formik.values.email,formik.values.newPassword)}>
                Forget Password
            </a>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add New Password</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    


        <div className="">

          <Container className="login-container">
             
              <ListGroup className="list-group-flush">
              </ListGroup>
                <Form onSubmit={formik.handleSubmit}>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <TextField type="email" name="email" placeholder="Email" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <TextField type="password" name="newPassword" placeholder="New Password" />
                  </Form.Group>
                  <div className="btn-submit">
                  <Button variant="primary" type="submit" onClick={()=>handleClose(formik.values.email,formik.values.oldPassword,formik.values.newPassword)}>Change Password</Button>
</div>
                </Form>

          </Container>
        </div>
                </Modal.Body>
            </Modal>
        </>
      )}

    </Formik>                    
    );
}

export default Forgetpassmodel;