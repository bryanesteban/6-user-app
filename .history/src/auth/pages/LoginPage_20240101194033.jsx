import { useState } from "react";


const initialLoginForm = {
    username:'',
    password: '',
}
export const LoginPage = () => {
    
    const [loginForm, setLoginForm] = useState(initialLoginForm);
    const { username, password} = loginForm;

    const onInputChange = () =>{
        
    }

    return(
    <div className="modal" style={ {display:"block"}} tabIndex="-1">
        <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Login Page</h5>
                    </div>
                    <form>

                        <div className="modal-body">
                            <input 
                                className="form-control my-3 w-75"
                                placeholder="Username"
                                name="username"
                                value={username}
                                onChange={ onInputChange }/>
                            <input 
                                className="form-control my-3 w-75"
                                placeholder="Password"
                                type="password"
                                name="password"
                                value={password}
                                onChange={ onInputChange }/>
                        </div>
                        <div className="modal-footer">
                            <button  
                                className="btn btn-primary"
                                type="submit">
                                Login
                            </button>
                        </div>
                    </form>
                </div>
        </div>
    </div>

    );
}