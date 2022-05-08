import React from "react";
import { useSelector } from "react-redux";
import CourseItem from "./CourseItem";
const CoursesList=(props)=>{
    const courses=useSelector(state=>state.course.data)
    return(
        <div style={{width:'90%',float:'right'}}>
            {
                courses.map(course=>{return<CourseItem key={course._id} {...course}/>})
            }
        </div>
    )
}
export default CoursesList