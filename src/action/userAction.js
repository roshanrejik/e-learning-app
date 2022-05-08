import axios from "axios";
import {startgetALLStudentInfo}from './studentAction'
import { startgetALLCourseInfo } from "./courseAction";
export const userLogin=(formData,userType,redirect,setAuth)=>{
    return (dispatch)=>{
        if(userType=='admin'){
            axios.post('https://dct-e-learning-app.herokuapp.com/api/admin/login',formData)
            .then(res=>{
              if(!res.data.hasOwnProperty('errors')){
                localStorage.setItem('token',res.data.token);
                redirect()
                setAuth(true)
                dispatch(startgetAdminInfo())
              }
              else{
                alert(res.data.errors)
              }
            })
            .catch(err=>alert(err.message))
        }
        else{
            axios.post('https://dct-e-learning-app.herokuapp.com/api/students/login',formData)
            .then(res=>{
                if(!res.data.hasOwnProperty('errors')){
                  localStorage.setItem('token',res.data.token);
                  redirect()
                  setAuth(true)
                }
                else{
                  alert(res.data.errors)
                }
              })
              .catch(err=>alert(err.message))

        }
    }
}
export const startgetAdminInfo=()=>{
    return (dispatch)=>{
        axios.get('https://dct-e-learning-app.herokuapp.com/api/admin/account',{
            headers:{ Authorization : `${localStorage.getItem('token')}`}
         })
    .then(res=>{
        if(!res.data.hasOwnProperty('errors')){
            dispatch(addUserInfo(res.data))
            dispatch(startgetALLStudentInfo())
            dispatch(startgetALLCourseInfo())
        }
        else{
          alert(res.data.errors)
        }
      })
      .catch(err=>alert(err.message))  
    } 
}
export const addUserInfo=(userobj)=>{
    return {
        type:'ADDUSERINFO',payload:userobj
    }
}
export const removeUserInfo=()=>{
    return {
        type:'REMOVEUSERINFO'
    }
}