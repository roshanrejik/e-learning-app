import React from "react";
import { useSelector } from "react-redux";
import StudentItem from './StudentItem'


const StudentsList=(props)=>{
    const allstudents=useSelector(state=>state.student.ALLdata)
    return(
        <div style={{width:'90%',float:'right'}}>
            {
                allstudents.map(student=>{return<StudentItem key={student._id} {...student}/>})
            }
        </div>
    )
}
export default StudentsList