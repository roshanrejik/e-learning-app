import React, { useState } from "react";
import StudentAddItem from "./StudentAddItem";
import StudentsList from "./StudentsList";
const StudentContainer=(props)=>{
    const [popUp,setPopUp]=useState(false)
    const handlePopUp = () => {
        setPopUp(!popUp)
    }
    return(
        <div>
            <button className="btn btn-dark m-4" onClick={handlePopUp} style={{float:'right'}}> + Add Student</button>
            <StudentsList/>
            <StudentAddItem popUp={popUp} handlePopUp={handlePopUp}/>
        </div>
    )
}
export default StudentContainer