import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { userLogin } from "./action/userAction";
const Login = (props) => {
    const { popUp,setAuth, handlePopUp } = props
    const dispatch=useDispatch()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [userType,setUserType]=useState('student')
    const redirect=()=>{
        setEmail('')
        setPassword('')
        setUserType('student')
        props.history.push('/')
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        handlePopUp()
        dispatch(userLogin({email,password},userType,redirect,setAuth))
    }
    return (
        <div>
            <>
                <div
                    className="d-flex align-items-center justify-content-center"
                    style={{ height: "100vh" }}
                >
                </div>
                <Modal show={popUp?true:false} >
                    <Modal.Header>
                        <Modal.Title>Login Form</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="Enter email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </Form.Group>
                                <Form.Group controlId="formBasicCheckbox">
                                    
                                        <div key={`inline-radio`} className="mb-3">
                                            <Form.Check
                                                inline
                                                label="Student"
                                                name="group1"
                                                type='radio'
                                                checked={userType=='student'}
                                                onChange={(e) => setUserType('student')}
                                                id={`inline-radio-1`}
                                                value={userType}
                                            />
                                            <Form.Check
                                                inline
                                                label="Admin"
                                                name="group1"
                                                type='radio'
                                                value={userType}
                                                checked={userType=='admin'}
                                                onChange={(e) => setUserType('admin')}
                                                id={`inline-radio-2`}
                                            />
                                        </div>
                                    
                                </Form.Group>
                                <Button variant="primary" type="submit" >
                                    Login
                                </Button>
                            </Form>
                        </>
                    </Modal.Body>
                    <Modal.Footer>
                        <Link to='/'><Button variant="secondary" onClick={handlePopUp}>Close Modal</Button></Link>
                    </Modal.Footer>
                </Modal>
            </>
        </div>
    )
}
export default withRouter(Login)