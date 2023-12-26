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
                    users.map( user => (
                        <tr>
                            <td>{ user.id }</td>
                            <td>{ user.username }</td>
                            <td>{ user.email }</td>
                            <td>
                                <button type="button"
                                className="btn btn-secondary btn-small">
                                    
                                </button>
                            </td>
                            <td>
                                
                                <button>

                                </button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>

        </table>
       
    )
}