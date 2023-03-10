import { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import axios from 'axios';
import Cookies from "universal-cookie";
import SideBarMyAccount from '../components/SideBarMyAccount';
import WatchList from './WatchList';
import MyDetails from '../components/MyDetails';
import Login from './Login';
import Signout from './Signout';

const cookies = new Cookies();

const MyAccount = () => {

    const location = useLocation();

    const [userData, setUserData] = useState();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const token = cookies.get('cinemaToken');
        setIsLoggedIn(!!token);
    }, [location]);

    useEffect(() => {
        const cookie = new Cookies();
        const getCookie = cookie.get('cinemaUserId')
        axios.get(`http://localhost:3001/profile/${getCookie}`).then((response) => {
            setUserData(response.data[0])
        })
    }, [])

    const LoggedIn = () => {

        const [selectedMenu, setSelectedMenu] = useState("MyDetails");

        const updateSelectedMenu = (menu) => {
            setSelectedMenu(menu);
        };

        return (
            <>
                <div className="container-fluid mt-2">
                    <div className="row">
                        <div className="col-lg-2">
                            {selectedMenu !== "Signout" && <SideBarMyAccount updateSelectedMenu={updateSelectedMenu} />}
                        </div>
                        <div className="col-lg-10 mt-2">
                            {selectedMenu === "MyDetails" && <MyDetails userDeatils={userData} />}
                            {selectedMenu === "WatchList" && <WatchList userDeatils={userData} />}
                            {selectedMenu === "Signout" && <Signout />}
                        </div>
                    </div>
                </div>
            </>
        );
    }

    return (
        <>
            {isLoggedIn ? (
                <LoggedIn />
            ) : (
                <Login />
            )}
        </>
    );
};


export default MyAccount;