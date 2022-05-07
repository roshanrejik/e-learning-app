import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
const StudentShow=(props)=>{
    const _id=props.match.params._id
        const students=useSelector(state=>state.student.ALLdata)
        const student=(students&&students.find(student=>student._id===_id))   
        return(
        <div style={{width:'90%',float:'right',margin:'30px'}} className='border shadow p-5 rounded'> 
           <center> <h2>Name : {student.name}</h2>
            <h2>Email : {student.email}</h2>
            <h2>Role : {student.role}</h2></center>
        </div>
    )
}
export default withRouter(StudentShow)