import { Navigate, Route, Routes } from "react-router-dom"
import { UsersPage } from "../pages/UsersPage"
import { Navbar } from "../components/layout/Navbar"
import { RegisterPage } from "../pages/RegisterPage"

export const UserRoutes = ({login, handleLogout}) =>{
    
    const {
        users,
        userSelected,
        initialUserForm,
        visibleForm,
        handlerAddUser,
        handlerRemoveUser,
        handlerUserSelectedForm,
        handlerOpenForm,
        handlerCloseForm
    } = useUsers();
    
    
    return(
        <>
            <Navbar  login ={login} handleLogout={handleLogout} />
            <Routes>
                <Route path="users" element={<UsersPage
                    users={users}
                    userSelected={userSelected}
                    initialUserForm={initialUserForm}
                    visibleForm={visibleForm}
                    handlerAddUser={handlerAddUser}
                    handlerRemoveUser={handlerRemoveUser}
                    handlerUserSelectedForm={handlerUserSelectedForm}
                    handlerOpenForm={handlerOpenForm}
                    handlerCloseForm ={handlerCloseForm}
                />}/>
                <Route path="users/register" element={<RegisterPage 
                                                        handlerAddUser ={handlerAddUser}
                                                        initialUserForm ={initialUserForm}/>}/>
                <Route path="/" element={<Navigate to="/users"/>}/>
            </Routes>
        
        </>
    )
}