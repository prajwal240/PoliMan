import React, { useContext, useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Alert from '../commoncomponents/Alert';
import { Alertcontext } from '../globalstates/Alertmessage';
import { AdminauthenticateContext } from '../globalstates/Adminauthenticate';
import { AdmindataContext } from '../globalstates/Adminget';

export default function Adminnavbar() {
  const [message, setMessage] = useState({ msg: '', cls: '' });
  const { alertmessage } = useContext(Alertcontext);
  useEffect(() => {
    if (alertmessage.adminloginsuccess) {
      setMessage({ msg: 'LoggedIn Successfully', cls: 'alert-success' });
    };
    if (alertmessage.politiciandeletesuccess) {
      setMessage({ msg: 'Record Deleted Successfully !!', cls: 'alert-success' });
    };
    if (alertmessage.userdeletesuccess) {
      setMessage({ msg: 'Record Deleted Successfully !!', cls: 'alert-success' });
    };
    if (alertmessage.politicianaddsuccess) {
      setMessage({ msg: 'Data Added Successfully !!', cls: 'alert-success' });
    };
  }, [alertmessage]);

  const [info, setInfo] = useState('');
  const { setSearchmessage } = useContext(AdmindataContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setSearchmessage(info.trim());
    navigate("/adminsearch");
  };

  useEffect(() => {
    if (location.pathname !== "/adminsearch") {
      setSearchmessage('');
    };
  }, [location, setSearchmessage]);

  const { setStatus } = useContext(AdminauthenticateContext);

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
                  <Link className="nav-link active" aria-current="page" to="/adminhome">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/adminusers">Users</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/adminpoliticians">Politicians</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" onClick={(evt) => { evt.preventDefault(); setStatus(false) }} to="/">Logout</Link>
                </li>
              </ul>
              <form onSubmit={handleSubmit} className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Post,Region" aria-label="Search" onChange={(evt) => { setInfo(evt.target.value) }} value={info} required />
                <button className="btn btn-outline-dark" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>
      </div>
      {(alertmessage.politicianaddsuccess || alertmessage.adminloginsuccess || alertmessage.politiciandeletesuccess || alertmessage.userdeletesuccess) && <Alert message={message} />}
    </div>
  )
}
