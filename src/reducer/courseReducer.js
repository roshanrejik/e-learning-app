const initState={
    data:[],loading:true,error:{}
}

const courseReducer=(state=initState,action)=>{
    switch(action.type){
            case 'ADDCOURSE':return {...state,data:[...state.data,action.payload]}
            case 'REMOVECOURSE':return {...state,data:state.data.filter(course=>course._id!==action.payload)}
            case 'ALLCOURSEINFO':return {...state,data:[...action.payload]}
            default : return {...state}
    }
}

export default courseReducer