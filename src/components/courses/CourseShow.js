
    import React,{useState} from "react";
    import  AddSTudentToCourse from './AddSTudentToCourse'
    import { useSelector } from "react-redux";
    import { withRouter } from "react-router-dom";
    const CourseShow=(props)=>{
        const _id=props.match.params._id
            const courses=useSelector(state=>state.course.data)
            const course=(courses&&courses.find(course=>course._id===_id))   
            const [popUp,setPopUp]=useState(false)
            const handlePopUp = () => {
                setPopUp(!popUp)
            }
            return(
            <div>
                <div style={{width:'90%',float:'right',margin:'30px'}} className='border shadow p-5 rounded'> 
              <h2>Name : {course.name}</h2>
                <h2>Author : {course.author}</h2>
                <h2>Level : {course.level}</h2>
                <h2>Category : {course.category}</h2>
                <h2>Description : {course.description}</h2>
                <h2>Validity : {course.validity}</h2>
                
            </div>
            <div>
            <button className="btn btn-dark m-4" onClick={handlePopUp} style={{float:'right'}}> + Add Student</button>
            <AddSTudentToCourse popUp={popUp} handlePopUp={handlePopUp}/>
            </div>
            </div>
        )
    }
    export default withRouter(CourseShow)
