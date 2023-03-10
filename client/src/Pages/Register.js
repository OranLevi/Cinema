import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import Cookies from "universal-cookie";

const Register = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [registerButtonDisable, setRegisterButtonDisable] = useState(false)

    const navigate = useNavigate();

    function isEmailValid(email) {
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return pattern.test(email);
    }

    function createUser(e) {
        e.preventDefault();
        setRegisterButtonDisable(true)
        if (!firstName || !lastName || !password) { setMessage("Please fill in all fields."); setRegisterButtonDisable(false); return; }

        if (!isEmailValid(email)) { setMessage("Please enter a valid email address."); setRegisterButtonDisable(false); return; }

        const configuration = {
            method: "post",
            url: "http://localhost:3001/createUser",
            data: {
                email,
                password,
                firstName,
                lastName
            },
        };

        axios(configuration)
            .then((result) => {
                const cookie = new Cookies();
                cookie.set("cinemaToken", result.data.token, { path: "/", });
                cookie.set("cinemaUserId", result.data.id, { path: "/", },);
                navigate('/myaccount');
            })
            .catch((error) => {
                setMessage(error.response.data.message)
                error = new Error();
                setRegisterButtonDisable(false)
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
                                    <h1>Register</h1>
                                    <p className="text-h3">Ready to become a member? Let's register now! </p>
                                </div>
                            </div>
                            <div className="row align-items-center mt-4">
                                <div className="col">
                                    <input type="text" className="form-control" placeholder="First Name" onChange={(event) => { setFirstName(event.target.value) }} required />
                                </div>
                                <div className="col">
                                    <input type="text" className="form-control" placeholder="Last Name" onChange={(event) => { setLastName(event.target.value) }} required />
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

                                    <button className="btn btn-primary mt-4" disabled={registerButtonDisable} onClick={createUser} >Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
                {message === "" ? <div className="alert alert-success text-center my-4">
                    Are you already registered? <Link to="/login">Login</Link>
                </div>
                    : <div className="alert alert-danger text-center my-4">
                        {message}
                    </div>}
            </div>

        </>
    );
}

export default Register;