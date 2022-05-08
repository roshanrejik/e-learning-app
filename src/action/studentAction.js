import axios from "axios";
export const startgetALLStudentInfo=()=>{
    return (dispatch)=>{
        axios.get('https://dct-e-learning-app.herokuapp.com/api/admin/students',{
            headers:{ Authorization : `${localStorage.getItem('token')}`}
         })
    .then(res=>{
        if(!res.data.hasOwnProperty('errors')){
            dispatch(allStudentInfo(res.data))
        }
        else{
          alert(res.data.errors)
        }
      })
      .catch(err=>alert(err.message))  
    } 
}
export const  allStudentInfo=(studentArr)=>{
    return {
        type:'ALLSTUDENTINFO',payload:studentArr
    }
}
export const startRemoveStudent=(_id)=>{
    return (dispatch)=>{
        axios.delete(`https://dct-e-learning-app.herokuapp.com/api/admin/students/${_id}`,{
            headers:{ Authorization : `${localStorage.getItem('token')}`}
         })
    .then(res=>{
        if(!res.data.hasOwnProperty('errors')){
           dispatch(removeStudent(res.data._id))
        }
        else{
          alert(res.data.errors)
        }
      })
      .catch(err=>alert(err.message))  
    } 
}
export const removeStudent=(_id)=>{
    return{
        type:'REMOVESTUDENT',payload:_id
    }
}
export const startAddStudent=(formData)=>{
    return (dispatch)=>{
        axios.post(`https://dct-e-learning-app.herokuapp.com/api/admin/students`,formData,{
            headers:{ Authorization : `${localStorage.getItem('token')}`}
         })
    .then(res=>{
        if(!res.data.hasOwnProperty('errors')){
            console.log(res.data);
            dispatch(AddStudent(res.data))
        }
        else{
          alert(res.data.errors)
        }
      })
      .catch(err=>alert(err.message))  
    } 
}
export const AddStudent=(newObj)=>{
    return{
        type:'ADDSTUDENT',payload:newObj
    }
}