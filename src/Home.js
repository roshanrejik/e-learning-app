import React from "react";
import {  useSelector } from "react-redux";
const Home =(props)=>{
    const  user=useSelector(state=>state.user.data)

    return(

        <div>
            { Object.keys(user).length>0 && <div>
               <center>
               <h2>Welcome <p className="d-inline" style={{color:'blue'}}> {user.username}</p><p/></h2>
               </center>
            <img src="https://c.tenor.com/A0DqBUR_a8MAAAAC/welcome-illustration.gif" alt="gif" style={{'width':'100%'}}/>
            </div>}
            <div>
            <img src="https://i.pinimg.com/originals/cf/94/7b/cf947b46283c10c47e3d5d945afb7053.gif" alt="gif" style={{'width':'100%'}}/>
            </div>
        </div>
    )
}
export default Home