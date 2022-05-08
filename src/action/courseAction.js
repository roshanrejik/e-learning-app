
import axios from "axios";
export const startAddCourse=(formData,redirect)=>{
            return (dispatch)=>{
            axios.post(`https://dct-e-learning-app.herokuapp.com/api/courses`,formData,{
                headers:{ Authorization : `${localStorage.getItem('token')}`}
             })
        .then(res=>{
            if(!res.data.hasOwnProperty('errors')){
                dispatch(AddCourse(res.data))
                redirect()
            }
            else{
              alert(res.data.errors)
            }
          })
          .catch(err=>alert(err.message))  
        } 
    }
    export const AddCourse=(newObj)=>{
        return{
            type:'ADDCOURSE',payload:newObj
        }
    }
    export const startRemoveCourse=(_id)=>{
        return (dispatch)=>{
            axios.delete(`https://dct-e-learning-app.herokuapp.com/api/courses/${_id}`,{
                headers:{ Authorization : `${localStorage.getItem('token')}`}
             })
        .then(res=>{
            if(!res.data.hasOwnProperty('errors')){
               dispatch(removeCourse(res.data._id))
            }
            else{
              alert(res.data.errors)
            }
          })
          .catch(err=>alert(err.message))  
        } 
    }
    export const removeCourse=(_id)=>{
        return{
            type:'REMOVECOURSE',payload:_id
        }
    }
    export const startgetALLCourseInfo=()=>{
        return (dispatch)=>{
            axios.get('https://dct-e-learning-app.herokuapp.com/api/courses',{
                headers:{ Authorization : `${localStorage.getItem('token')}`}
             })
        .then(res=>{
            if(!res.data.hasOwnProperty('errors')){
                dispatch(allCourseInfo(res.data))
            }
            else{
              alert(res.data.errors)
            }
          })
          .catch(err=>alert(err.message))  
        } 
    }
    export const  allCourseInfo=(courseArr)=>{
        return {
            type:'ALLCOURSEINFO',payload:courseArr
        }
    }