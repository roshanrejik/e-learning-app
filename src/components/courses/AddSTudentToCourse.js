import React, { useEffect, useState } from "react";
import { Modal, Button, Form, Dropdown, DropdownButton } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import {startgetAdminInfo} from "../../action/userAction"
import { startAddStudentToCourse } from "../../action/courseAction";
const AddSTudentToCourse = (props) => {
    const { popUp, handlePopUp } = props
    const {_id:courseId}=props.match.params
    const dispatch = useDispatch()
    const [studentId, setStudentId] = useState('')
    const redirect = () => {
        setStudentId('')
        props.history.push(`/course/${courseId}`)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(startAddStudentToCourse(courseId,studentId, redirect))
         handlePopUp()
    }
    const students=useSelector(state=>state.student.ALLdata)

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
                        <Modal.Title>Add Student To Course</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <>
                            <Form onSubmit={handleSubmit}>
                                
                                <div className="m-3">
                                    <DropdownButton
                                        title={studentId?students.find(student=>student._id==studentId).name:"Select Student"}
                                        id="dropdown-menu-align-right"
                                        className="d-inline"
                                        onSelect={(e) => setStudentId(e)}
                                    >
                                        {
                                            students.map(student=>{return  <Dropdown.Item key={student._id} eventKey={student._id}>{student.name}</Dropdown.Item> })
                                        }
                                    </DropdownButton>
                               
                               </div>
                                
                                <Button variant="primary" type="submit" >
                                    Add Student
                                </Button>
                            </Form>
                        </>
                    </Modal.Body>
                    <Modal.Footer>
                        <Link to={`/courses/${courseId}`}><Button variant="secondary" onClick={handlePopUp}>Close Modal</Button></Link>
                    </Modal.Footer>
                </Modal>
            </>
        </div>
    )
}
export default withRouter(AddSTudentToCourse)