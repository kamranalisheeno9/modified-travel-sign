import './signup.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Card, ListGroup, Form, Button } from 'react-bootstrap';
import TextField from './textField'
import { Formik } from 'formik';
import * as yup from 'yup';
import { useState } from 'react';
const SignUp = (props) => {

  const [checked,setChecked]=useState()
  const [agreement,setAgreement]=useState(true)

  const NotChecked=(e)=>{
   
    setChecked(false)
  }
  const Checked=(e)=>{
   
    setChecked(true)

  }


  const Validate = yup.object({
    firstName: yup.string()
      .max(15, 'Must Be 15 Characters or Less')
      .required('Required'),
    lastName: yup.string()
      .max(20, 'Must Be 20 Characters or Less')
      .required('Required'),
    email: yup.string()
      .email('Email is Invalid')
      .required('Required'),
    password: yup.string()
      .min(6, 'Password Must Be At Least 6 Characters')
      .required('Required'),
    Confirmpassword: yup.string()
      .min(6, 'Password Must Be At Least 6 Characters')
      .required('Required'),
    nationality: yup.string()
      .required('Required'),
    passport: yup.string()
      .required('Required'),
  })

  const [users, setUsers] = useState([])


  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        passport:'',
        nationality:'',
        password:'',
        group1:'',
        // email: '',
        password: '',
        Confirmpassword: '',
      }}
      onSubmit={values => {
        users.push(values)
        setUsers([...users])
        props.setShow(true)

        alert("Account Registered");

      }}

      validationSchema={Validate}
    >

      {formik => (

        <Container className="signup-container">
          <Card style={{ width: '18rem', }}>
            <Card.Body className="cardBody">
              <Card.Title className="signup-title">Sign Up</Card.Title>

            </Card.Body>
            <ListGroup className="list-group-flush">
            </ListGroup>
            <Card.Body>
              <Form onSubmit={formik.handleSubmit}>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <TextField type="text" name="firstName" placeholder="First Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <TextField type="text" name="lastName" placeholder="Last Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Text className="srilankan">
                    Are You Sri Lankan ?
                  </Form.Text>
                </Form.Group>

                {['radio'].map((type) => (
                  <div key={`inline-${type}`} className="mb-3">
                    <Form.Check
                      inline
                      onClick={(e)=>Checked(e)}
                      label="Yes"
                      name="group1"
                      type={type}
                      id={`inline-${type}-1`}
                    />
                    <Form.Check
                      inline
                      onClick={(e)=>NotChecked(e)}
                      label="No"
                      name="group1"
                      type={type}
                      id={`inline-${type}-2`}
                    />
                  </div>
                ))}


                <Form.Select className="drop-down" disabled={checked ? true : false} aria-label="Default select example">
                  <option>Select Country</option>
                  <option value="Country1">Country 1</option>
                  <option value="Country2">Country 2</option>
                  <option value="Country3">Country 3</option>
                </Form.Select>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <TextField type="text" name="nationality" placeholder="Nationality" />

                </Form.Group>


                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <TextField type="text" name="passport" placeholder="Passport/NIC" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <TextField type="password" name="password" placeholder="Password" />
                  <Form.Text className="text-muted">
                    Comment Here
                  </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <TextField type="password" name="Confirmpassword" placeholder="Confirm Password" />
                  <Form.Text className="text-muted">
                    Comment Here
                  </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" onClick={()=>setAgreement(!agreement)} label="I agree the terms and conditions" />
  </Form.Group>
                <div className="btn-submit" >
                  <Button variant="dark" type="submit" disabled={agreement ? true : false} >
                    Sign Up
                  </Button>
                </div>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Text className="">
                    Already have an account? <a className="signin-btn" onClick={()=>props.setShow(true)}>Sign in</a>
                  </Form.Text>
                </Form.Group>
              </Form>
            </Card.Body>
          </Card>

        </Container>
      )}

    </Formik>

  );
}

export default SignUp;
