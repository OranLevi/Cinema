import { useState } from "react";

const SideBarMyAccount = (props) => {

    const [selectedMenu, setSelectedMenu] = useState("MyDetails")

    const updateSelectedMenu = (menu) => {
        props.updateSelectedMenu(menu)
        setSelectedMenu(menu)
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMyaccount" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse py-2" id="navbarMyaccount">
                        <div className="d-flex flex-column flex-shrink-0 bg-light menu-my-account" style={{ minWidth: "100%", }}>

                            <ul className="nav nav-pills nav-flush flex-column mb-auto mb-2 text-center">
                                <li className="nav-item">

                                    <a className={`nav-link py-3  border-bottom ${selectedMenu === "MyDetails" ? 'active' : null}`} href="/#" onClick={(event) => { event.preventDefault(); updateSelectedMenu("MyDetails") }}>
                                        <small>My Details</small>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className={`nav-link py-3  border-bottom ${selectedMenu === "WatchList" ? 'active' : null}`} href="/#" onClick={(event) => { event.preventDefault(); updateSelectedMenu("WatchList") }}>
                                        <small>My WatchList</small>
                                    </a>

                                </li>
                                <li className="nav-item">
                                    <a className={`nav-link py-3  border-bottom ${selectedMenu === "Signout" ? 'active' : null}`} href="/#" onClick={(event) => { event.preventDefault(); props.updateSelectedMenu("Signout") }}>
                                        <small>Sign out</small>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default SideBarMyAccount;