export const LoginPage = () => {
    return(

    <div className="modal" tabindex="-1">
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
                            name="username"/>
                            <input 
                                className="form-control my-3 w-75"
                                placeholder="Username"
                            name="username"/>
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