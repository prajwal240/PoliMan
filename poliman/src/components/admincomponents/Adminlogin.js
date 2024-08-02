import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Alert from '../commoncomponents/Alert';
import { Alertcontext } from '../globalstates/Alertmessage';
import { AdminauthenticateContext } from '../globalstates/Adminauthenticate';
import { BASE_URL } from '../baseurl/Base_Url';

export default function Adminlogin() {
    const navigate = useNavigate();
    const [username, setUserName] = useState('');
    const [password, setPssword] = useState('');
    const [submitted, issubmitted] = useState(false);
    const [message, setMessage] = useState({ msg: '', cls: '' });
    const { alertmessage, setalertmessage } = useContext(Alertcontext);
    const { setStatus } = useContext(AdminauthenticateContext);

    const handleLogin = (evt) => {
        evt.preventDefault();
        issubmitted(true);
    };
    useEffect(() => {
        if (submitted) {
            try {
                async function apicall() {
                    const response = await axios.post(`${BASE_URL}/admin/login`, { username: username.trim(), password: password.trim() });
                    if (response.data.message === "Success") {
                        setalertmessage({ adminloginsuccess: true });
                        setStatus(true);
                        navigate("/adminhome");
                    } else {
                        setalertmessage({ adminloginfailure: true });
                        setStatus(false);
                        setMessage({ msg: response.data.message, cls: 'alert-danger' });
                        navigate("/adminlogin");
                    }
                }
                apicall();
                issubmitted(false);
                setUserName('');
                setPssword('');
            }
            catch (err) {
                console.log(err);
            }
        }
    }, [username, password, navigate, submitted, setalertmessage, setMessage, setStatus]);

    return (
        <div>
            {alertmessage.adminloginfailure && <Alert message={message} />}
            <div className="card mx-auto my-4" style={{ width: "22rem" }}>
                <div className="card-body">
                    <h5 className="card-title" style={{ textAlign: 'center' }}>Login</h5>
                    <form onSubmit={handleLogin}>
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">Username</label>
                            <input type="text" className="form-control" id='username' name='username' onChange={(e) => setUserName(e.target.value)} value={username} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="pass" className="form-label">Password</label>
                            <input type="password" className="form-control" id='pass' name='pass' onChange={(e) => setPssword(e.target.value)} value={password} required />
                        </div>
                        <button type="submit" className="btn btn-primary mx-auto" style={{ margin: '0 auto', display: 'block' }}>Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
