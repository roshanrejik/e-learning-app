import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link, Route } from "react-router-dom";
import Login from './Login'
import Home from './Home'
import Header from "./components/header/Header";
import { withRouter } from "react-router-dom";
import { removeUserInfo,startgetAdminInfo } from "./action/userAction";
import { startgetALLCourseInfo } from "./action/courseAction";
import { useDispatch, useSelector } from "react-redux";
import StudentContainer from "./components/students/StudentContainer";
import StudentShow from "./components/students/StudentShow";
import CourseContainer from "./components/courses/CourseContainer";
import CourseShow from "./components/courses/CourseShow";
const Navbar = (props) => {
    const [popUp, setPopUp] = useState(false)
    const [auth, setAuth] = useState(false)
    const user=useSelector(state=>state.user.data)
    const dispatch=useDispatch()
    const handlePopUp = () => {
        setPopUp(!popUp)
    }
    const handleLogout = () => {
        localStorage.removeItem('token')
        dispatch(removeUserInfo())
        setAuth(false)
    }
    useEffect(()=>{
        if(localStorage.getItem('token')){
            setAuth(true)
            dispatch(startgetAdminInfo())
            dispatch(startgetALLCourseInfo())
        }
    },[])
    return (
        <div>
            <div><Link to='/'><img src="https://learn.dctacademy.com/logo.png?v=10" alt="" /><input type="text" placeholder=" Search" style={{ 'marginLeft': '20em', 'padding': '0.8rem 4rem', 'fontWeight': 'bold' }} name="" id="" /></Link>
                {
                    Object.keys(user).length>0 ?
                        <Link to='/' className="btn btn-primary btn-lg" onClick={handleLogout} style={{ 'borderRadius': '15px', 'float': 'right', 'margin': '20px' }}>Logout</Link>

                        :
                        <Link to='/login' className="btn btn-primary btn-lg" onClick={handlePopUp} style={{ 'borderRadius': '15px', 'float': 'right', 'margin': '20px' }}>Login</Link>

                }
            </div>

            {
                Object.keys(user).length>0&&<Header/>
            }
            <Route path='/' component={Home} exact />
            <Route path='/login' exact><Login popUp={popUp} handlePopUp={handlePopUp} setAuth={setAuth} /></Route>
            <Route path='/students' exact><StudentContainer/></Route>
            <Route path='/course' exact><CourseContainer/></Route>
            <Route path='/students/:_id' exact><StudentShow/></Route>
            <Route path='/courses/:_id' exact><CourseShow/></Route>
        </div>
    )
}
export default withRouter(Navbar)