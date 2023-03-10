
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

const SignOut = () => {
    const cookies = new Cookies();
    const navigate = useNavigate();

    useEffect(() => {
        cookies.remove('cinemaToken');
        alert("You've logged out")
        navigate("/");

    }, []);

    return (
        <>

        </>);
}

export default SignOut;