import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { startAddStudent } from "../../action/studentAction";
const StudentAddItem = (props) => {
    const { popUp,handlePopUp } = props
    const dispatch=useDispatch()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name,setName]=useState('')
    const redirect=()=>{
        setEmail('')
        setPassword('')
        props.history.push('/student')
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        handlePopUp()
        dispatch(startAddStudent({name,email,password},redirect))
    }
    return (
        <div>
            <>
                <div
                    className="d-flex align-items-center justify-content-center"
                    style={{ height: "100vh" }}
                >
                </div>
                <Modal show={popUp} >
                    <Modal.Header>
                        <Modal.Title>Add Student</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <>
                            <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control
                                        type="name"
                                        placeholder="Enter name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </Form.Group>

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
                                
                                <Button variant="primary" type="submit" >
                                    Add
                                </Button>
                            </Form>
                        </>
                    </Modal.Body>
                    <Modal.Footer>
                        <Link to='/students'><Button variant="secondary" onClick={handlePopUp}>Close Modal</Button></Link>
                    </Modal.Footer>
                </Modal>
            </>
        </div>
    )
}
export default withRouter(StudentAddItem)