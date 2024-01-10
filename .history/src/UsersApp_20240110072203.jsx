import { LoginPage } from "./auth/pages/LoginPage";
import { Navigate, Route, Routes } from "react-router-dom";
import { UserRoutes } from "./routes/userRoutes";
import { useContext } from "react";
import { AuthContext } from "./auth/context/AuthContext";



export const UsersApp = () =>{
   
    const {login} = useContext(AuthContext);

    return (
        <Routes>
            {
                login.isAuth
                ? (
                    <Route path='/*' element={<UserRoutes
                        login={login} 
                        handleLogout={handleLogout} />} /> 

                )
                : <>
                    <Route path='/login'
                           element={<LoginPage handlerLogin={handlerLogin}/>} />
                    <Route path='/*' element={<Navigate to="/login"/> } />
                  </>
                        

            }
        </Routes>
    );
}