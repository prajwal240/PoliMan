import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { AuthenticationContext } from '../globalstates/Authentication';
import Alert from '../commoncomponents/Alert';
import { Alertcontext } from '../globalstates/Alertmessage';
import { UserContext } from '../globalstates/Usersearch';

export default function Navbar() {
    const drop = window.location.pathname;
    const { setAuthenticate } = useContext(AuthenticationContext);
    const { alertmessage } = useContext(Alertcontext);
    const [message, setMessage] = useState({ msg: '', cls: '' });
    useEffect(() => {
        if (alertmessage.loginsuccess) {
            setMessage({ msg: 'LoggedIn Successfully !!', cls: 'alert-success' });
        };
        if (alertmessage.signinsuccess) {
            setMessage({ msg: 'SignedIn Successfully !!', cls: 'alert-success' });
        };
        if (alertmessage.updatesuccess) {
            setMessage({ msg: 'Updated Successfully !!', cls: 'alert-success' });
        };
    }, [setMessage, alertmessage]);

    const [info, setInfo] = useState('')
    const { setSearchWord } = useContext(UserContext);
    const navigate = useNavigate();
    const location = useLocation();

    const handleSubmit = (evt) => {
        evt.preventDefault();
        setSearchWord(info.trim());
        navigate("/usersearch");
    };
    useEffect(() => {
        if (location.pathname !== "/usersearch") {
            setSearchWord('');
        };
    }, [location, setSearchWord]);
    return (
        <div>
            <div style={{ paddingBottom: "50px" }}>
                <nav className="navbar navbar-expand-lg navbar-dark bg-success fixed-top">
                    <div className="container-fluid">
                        <span className="navbar-brand">PoliMan</span>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/userhome">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/userwork">Work</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/userabout">About</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle" to={drop} id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">

                                    </Link>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><Link className="dropdown-item" onClick={() => setAuthenticate({ status: false })} to="/userlogin">Logout</Link></li>
                                        <li><Link className="dropdown-item" to="/userupdate">Update Profile</Link></li>
                                    </ul>
                                </li>
                            </ul>
                            <form onSubmit={handleSubmit} className="d-flex">
                                <input className="form-control me-2" type="search" placeholder="Post,Region" aria-label="Search" value={info} onChange={(evt) => setInfo(evt.target.value)} required />
                                <button className="btn btn-outline-dark" type="submit" id='search'>Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>
            {(alertmessage.loginsuccess || alertmessage.signinsuccess || alertmessage.updatesuccess) && <Alert message={message} />}
        </div>
    )
}
