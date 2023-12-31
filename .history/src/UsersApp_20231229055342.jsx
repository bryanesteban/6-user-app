import { useReducer, useState } from "react";
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
    id:0,
    username:'',
    password:'',
    email:'',
}

export const UsersApp = () =>{
    
    const [users,dispatch] = useReducer(usersReducer, initiallUsers);
    const [userSelected, setUserSelected] = useState(initialUserForm);

    const handlerAddUser = (user) =>{
        //console.log(user);
        
        let type ;
        if(user.id === 0){
            type = 'addUser'
        }else{
            type = 'updateUser'
        }
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

    const handlerUserSelectedForm = (user) => {
        //console.log(user);
        setUserSelected({...user})

    }

    return (
        <div className="container my-4">
            <h2>Users App</h2>
            <div className="row">   
                <div className="col">
                    <UserForm
                        initialUserForm = { initialUserForm } 
                        userSelected = {userSelected}
                        handlerAddUser={ handlerAddUser}
                    />
                </div>
                <div className="col">
                    {users.length === 0 
                        ? <div className="alert alert-warning"> No hay usuarios en le sistema!</div>
                        :<UsersList
                            handlerUserSelectedForm={handlerUserSelectedForm}
                            handlerRemoveUser = { handlerRemoveUser }
                            users={ users }
                        />}
                    
                </div>
            </div>
        </div>
    );
}