import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthenticationContext } from '../globalstates/Authentication';
import { Alertcontext } from '../globalstates/Alertmessage';
import Alert from '../commoncomponents/Alert';
import { BASE_URL } from '../baseurl/Base_Url';

export default function Login() {
    const navigate = useNavigate();
    const [username, setUserName] = useState('');
    const [password, setPssword] = useState('');
    const [submitted, issubmitted] = useState(false);
    const [message, setMessage] = useState({ msg: '', cls: '' });

    const { alertmessage, setalertmessage } = useContext(Alertcontext);
    const { setAuthenticate } = useContext(AuthenticationContext);

    const handleLogin = (evt) => {
        evt.preventDefault();
        issubmitted(true);
    };
    useEffect(() => {
        if (submitted) {
            try {
                async function apicall() {
                    const response = await axios.post(`${BASE_URL}/user/login`, { username: username.trim(), password: password.trim() });
                    if (response.data.message === "Success") {
                        setAuthenticate({ status: true });
                        setalertmessage({ loginsuccess: true });
                        navigate("/userhome");
                    } else {
                        navigate("/userlogin");
                        setalertmessage({ loginfailure: true });
                        setMessage({ msg: "Enter Valid Credentials !!", cls: 'alert-danger' });
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
    }, [setMessage, username, password, navigate, submitted, setAuthenticate, setalertmessage, alertmessage]);

    const Register = () => {
        navigate("/usersignin");
    };

    return (
        <div>
            {(alertmessage.loginfailure) && <Alert  message={message} />}
            <div className="card mx-auto my-4" style={{ width: "22rem" }}>
                <div className="card-body">
                    <h5 className="card-title">Login</h5>
                    <form onSubmit={handleLogin}>
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">Username</label>
                            <input type="text" className="form-control" id='username' name='username' onChange={(e) => setUserName(e.target.value)} value={username} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="pass" className="form-label">Password</label>
                            <input type="password" className="form-control" id='pass' name='pass' onChange={(e) => setPssword(e.target.value)} value={password} required />
                        </div>
                        <button type="submit" className="btn btn-primary">Login</button>
                        <button type="submit" onClick={Register} className="btn btn-primary float-end">SignIn</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
