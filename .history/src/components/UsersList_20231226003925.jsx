import { UserRow } from "./UserRow"

export const UsersList = ({ users =[] }) =>{

    return (
        <table className="table table-hover table-striped">
            <thead>
                <tr>
                   <th>#</th> 
                   <th>username</th> 
                   <th>email</th> 
                   <th>update</th> 
                   <th>remove</th> 
                </tr>
            </thead>
            <tbody>
                {
                    users.map( {id, username, email} => (
                        <UserRow 
                            key={user.id} 
                            id ={user.id} 
                            username={user.username} 
                            email ={user.email} 
                        />
                    ))
                }
            </tbody>

        </table>
       
    )
}