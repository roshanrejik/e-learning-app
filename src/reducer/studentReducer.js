const initState={
    ALLdata:[],loading:true,error:{},singledata:{}
}

const studentReducer=(state=initState,action)=>{
    switch(action.type){
        case 'ALLSTUDENTINFO':return {...state,ALLdata:[...action.payload]}
        case 'REMOVESTUDENT':return {...state,ALLdata:state.ALLdata.filter(student=>{return student._id!=action.payload})}
        case 'ADDSTUDENT':return {...state,ALLdata:[...state.ALLdata,action.payload]}
        default:{
            return {...state}
        }
    }
}

export default studentReducer