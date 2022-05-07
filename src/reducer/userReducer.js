const initState={
    data:{},loading:true,error:{}
}

const userReducer=(state=initState,action)=>{
    switch(action.type){
        case 'ADDUSERINFO':return {...state,data:{...action.payload}}
        case 'REMOVEUSERINFO':return {...state,data:{}}
        default:{
            return {...state}
        }
    }
}

export default userReducer