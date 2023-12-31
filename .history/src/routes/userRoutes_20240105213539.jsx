import { Navigate, Route, Routes } from "react-router-dom"
import { UsersPage } from "../pages/UsersPage"
import { Navbar } from "../components/layout/Navbar"
import { RegisterPage } from "../pages/RegisterPage"

export const UserRoutes = ({login, handleLogout}) =>{
    return(
        <>
            <Navbar  login ={login} handleLogout={handleLogout} />
            <Routes>
                <Route path="users" element={<UsersPage/>}/>
                <Route path="users/register" element={<RegisterPage 
                    handlerAddUser ={handlerAddUser}
                    initialUserForm ={initialUserForm}/>}/>
                <Route path="/" element={<Navigate to="/users"/>}/>
            </Routes>
        
        </>
    )
}