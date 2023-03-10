import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import Cookies from "universal-cookie";

const Login = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [loginButtonDisable, setLoginButtonDisable] = useState(false)

    function isEmailValid(email) {
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return pattern.test(email);
    }

    function loginUser(e) {
        e.preventDefault();
        setLoginButtonDisable(true)
        if (!isEmailValid(email)) {
            setMessage("Please enter a valid email address.");
            setLoginButtonDisable(false)

            return;
        }

        if (!password) {
            setMessage("Please fill in all fields.");
            setLoginButtonDisable(false)

            return;
        }

        const configuration = {
            method: "post",
            url: "http://localhost:3001/loginUser",
            data: {
                email,
                password,
            },
        };

        axios(configuration)
            .then((result) => {
                const cookie = new Cookies();
                cookie.set("cinemaToken", result.data.token, { path: "/", },);
                cookie.set("cinemaUserId", result.data.id, { path: "/", },);
                navigate('/myaccount');
            })
            .catch((error) => {
                setMessage(error.response.data.message)
                error = new Error();
                setLoginButtonDisable(false)
        
            });
    }

    return (
        <>
            <div className="container">
                <div className="p-5">
                </div>
                <form>
                    <div className="row justify-content-center text-center">
                        <div className="col-12 col-md-8 col-lg-8 col-xl-6">
                            <div className="row">
                                <div className="col text-center">
                                    <h1>Login</h1>
                                    <p className="text-h3">Welcome back! Please log in to continue. </p>
                                </div>
                            </div>

                            <div className="row align-items-center mt-4">
                                <div className="col">
                                    <input type="email" className="form-control" placeholder="Email" onChange={(event) => { setEmail(event.target.value.toLowerCase()) }} required />
                                </div>
                            </div>
                            <div className="row align-items-center mt-4">
                                <div className="col">
                                    <input type="password" className="form-control" placeholder="Password" onChange={(event) => { setPassword(event.target.value) }} required />
                                </div>

                            </div>
                            <div className="row justify-content-start mt-2">
                                <div className="col">

                                    <button className="btn btn-primary mt-4" disabled={loginButtonDisable} onClick={loginUser}  >Login</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
                {message === "" ? <div className="alert alert-warning text-center my-4">
                    Are you still not registered?  <Link to="/register">Register</Link>
                </div> :
                    <div className="alert alert-danger text-center my-4">
                        {message}
                    </div>}
            </div>
        </>
    );
}

export default Login;