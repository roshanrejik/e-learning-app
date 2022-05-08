import React, { useState } from "react";
import { Modal, Button, Form, Dropdown, DropdownButton } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { startAddCourse } from "../../action/courseAction";
const CourseAddItem = (props) => {
    const { popUp, handlePopUp } = props
    const dispatch = useDispatch()
    const [duration, setDuration] = useState('')
    const [description, setDescription] = useState('')
    const [category, setCategory] = useState('')
    const [validity, setValidity] = useState('')
    const [name, setName] = useState('')
    const [level, setLevel] = useState('')
    const [author, setAuthor] = useState('')
    const redirect = () => {
        setAuthor('')
        setCategory('')
        setDescription('')
        setDuration('')
        setLevel('')
        setName('')
        setValidity('')
        props.history.push('/course')
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        handlePopUp()
     dispatch(startAddCourse({ name,description,duration,author,category,validity,level }, redirect))
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
                        <Modal.Title>Add Course</Modal.Title>
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
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control
                                        type="description"
                                        placeholder="Enter description"
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                    />
                                </Form.Group>

                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Author</Form.Label>
                                    <Form.Control
                                        type="author"
                                        placeholder="Enter author"
                                        value={author}
                                        onChange={(e) => setAuthor(e.target.value)}
                                    />
                                </Form.Group>
                                <div className="m-3">
                                    <DropdownButton
                                        title={category?category:"Select Courses"}
                                        id="dropdown-menu-align-right"
                                        className="d-inline"
                                        onSelect={(e) => setCategory(e)}
                                    >
                                        <Dropdown.Item eventKey="HTML">HTML</Dropdown.Item>
                                        <Dropdown.Item eventKey="CSS">CSS</Dropdown.Item>
                                        <Dropdown.Item eventKey="javascript">javascript</Dropdown.Item>
                                       
                                        <Dropdown.Item eventKey="reactjs">reactjs</Dropdown.Item>
                                        <Dropdown.Item eventKey="nodejs">nodejs</Dropdown.Item>
                                        <Dropdown.Item eventKey="expressjs">expressjs</Dropdown.Item>
                                        <Dropdown.Item eventKey="mongodb">mongodb</Dropdown.Item>
                                    </DropdownButton>
                               
                                    <DropdownButton
                                        title={level?level:"Select Level"}
                                        id="dropdown-menu-align-right"
                                        className="d-inline m-1"
                                        onSelect={(e) => setLevel(e)}

                                    >
                                        <Dropdown.Item eventKey="beginner">beginner</Dropdown.Item>
                                        <Dropdown.Item eventKey="intermediate">intermediate</Dropdown.Item>
                                        <Dropdown.Item eventKey="expert">expert</Dropdown.Item>
                                    </DropdownButton>
                               </div>
                               <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Duration</Form.Label>
                                    <Form.Control
                                        type="description"
                                        placeholder="Enter description"
                                        value={duration}
                                        onChange={(e) => setDuration(e.target.value)}
                                    />
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Validity</Form.Label>
                                    <Form.Control
                                        type="description"
                                        placeholder="Enter description"
                                        value={validity}
                                        onChange={(e) => setValidity(e.target.value)}
                                    />
                                </Form.Group>
                                
                                <Button variant="primary" type="submit" >
                                    Add
                                </Button>
                            </Form>
                        </>
                    </Modal.Body>
                    <Modal.Footer>
                        <Link to='/course'><Button variant="secondary" onClick={handlePopUp}>Close Modal</Button></Link>
                    </Modal.Footer>
                </Modal>
            </>
        </div>
    )
}
export default withRouter(CourseAddItem)