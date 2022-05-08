import React, { useState } from "react";
import CourseAddItem from "./CourseAddItem";
import CoursesList from "./CoursesList";
const CourseContainer=(props)=>{
    const [popUp,setPopUp]=useState(false)
    const handlePopUp = () => {
        setPopUp(!popUp)
    }
    return(
        <div>
            <button className="btn btn-dark m-4" onClick={handlePopUp} style={{float:'right'}}> + Add Course</button>
            <CoursesList/>            
            <CourseAddItem popUp={popUp} handlePopUp={handlePopUp}/>
            
        </div>
    )
}
export default CourseContainer