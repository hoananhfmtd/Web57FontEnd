import './login.css'
import React from 'react';

function Login() {
    const [username, setUsername] = React.useState('');
    const [password, setpassword] = React.useState('');
    const onChangeUsername = e => {
        const value = e.target.value;
        setUsername(value)
    }
    const onChangePassword = e => {
        const value = e.target.value;
        setpassword(value)
    }

    const submitForm = (e) => {
        e.preventDefault();
        console.log(username);
        console.log(password);
    }
    return (
        <div className="container">
        <div className="d-flex justify-content-center h-100">
            <div className="card">
                <div className="card-header">
                    <h3>Sign In</h3>
                    
                </div>
                <div className="card-body">
                    <form onSubmit={submitForm}>
                        <div className="input-group form-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><i className="fas fa-user"></i></span>
                            </div>
                            <input value={username} onChange={onChangeUsername} type="text" className="form-control" placeholder="username"></input>
                            
                        </div>
                        <div className="input-group form-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><i className="fas fa-key"></i></span>
                            </div>
                            <input type="password" value={password} onChange={onChangePassword} className="form-control" placeholder="password"></input>
                        </div>
                       
                        <div className="form-group">
                            <button type="submit"  className="btn float-right login_btn"><a>Login</a></button>
                        </div>
                    </form>
                </div>
                <div className="card-footer">
                    <div className="d-flex justify-content-center links">
                        Don't have an account?<a href="#">Sign Up</a>
                    </div>
                    <div className="d-flex justify-content-center">
                        <a href="#">Forgot your password?</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Login;