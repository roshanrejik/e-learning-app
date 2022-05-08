import React from 'react'
import {Link} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {startRemoveCourse} from '../../action/courseAction'
const CourseItem=(props)=>{
    const {name,category,level,_id}=props
    const dispatch=useDispatch()
    return(
        <div className='border rounded shadow m-3 p-2'>
            <h2 className='d-inline'>{name}</h2> ---- <h2 className='d-inline'>{level}</h2>---- <h2 className='d-inline'>{category}</h2><div className='d-inline' style={{float:'right'}}><Link to={`/courses/${_id}`}><img src="https://www.seekpng.com/png/detail/938-9383200_png-file-svg-view-report-icon-png.png" alt="SHOW" className='m-1' style={ { 'width':'30px'}} /></Link><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGavCopLe-l7TtmyltWgmNY7s9FZK4mGFPlw&usqp=CAU" alt="DELETE" className='m-1' style={ { 'width':'30px'}} /> <button className='btn btn-light'><img src="https://www.pngall.com/wp-content/uploads/5/Delete-Bin-Trash-PNG-Clipart.png" alt="DELETE" style={ { 'width':'25px'}} onClick={()=>{dispatch(startRemoveCourse(_id))}}  className='m-1'/></button> </div>
        </div>
    )
}
export default CourseItem