export const loginReducers = (state={}, action) =>{
   
    switch(action.type){
        case 'login':
            return{
                isAuth:true,
                isAdmin:action.payload.isAdmin,
                user: action.payload.user,
            };
        
        case 'logout':
            return{
                isAuth:false,
            };
        default:
            return state;
    }
   
    
}