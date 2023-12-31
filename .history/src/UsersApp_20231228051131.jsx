import { useReducer } from "react";
import { UserForm } from "./components/UserForm";
import { UsersList } from "./components/UsersList";
import { usersReducer } from "./reducers/usersReducer";

const initiallUsers = [
    {

        id: 1,
        username: 'pepe',
        password: '12345',
        email: 'pepe@correo.com'
    },    

] 

const initialUserForm = {
    username:'',
    password:'',
    email:'',
}

export const UsersApp = () =>{
    
    const [users,dispatch] = useReducer(usersReducer, initiallUsers);
    const handlerAddUser = (user) =>{
        //console.log(user);
        dispatch({
          type:'addUser',
          payload:user, 
        })
    }

    const handlerRemoveUser = ( id ) => {
        
        dispatch({
            type:'removeUser',
            payload:id,
        })
    }
    return (
        <div className="container my-4">
            <h2>Users App</h2>
            <div className="row">   
                <div className="col">
                    <UserForm
                        initialUserForm = { initialUserForm } 
                        handlerAddUser={ handlerAddUser}
                    />
                </div>
                <div className="col">
                    {users.length === 0 
                        ? <div className="alert alert-warning"> No hay usuarios en le sistema!</div>
                        :<UsersList
                            handlerRemoveUser = { handlerRemoveUser }
                            users={ users }
                        />}
                    
                </div>
            </div>
        </div>
    );
}