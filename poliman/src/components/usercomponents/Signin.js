import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Alertcontext } from '../globalstates/Alertmessage';
import axios from 'axios';
import Alert from '../commoncomponents/Alert';
import { AuthenticationContext } from '../globalstates/Authentication';
import { BASE_URL } from '../baseurl/Base_Url';

export default function Signin() {
    const { alertmessage, setalertmessage } = useContext(Alertcontext);
    const [message, setMessage] = useState({ msg: '', cls: '' });
    const [data, newData] = useState({
        name: '',
        username: '',
        mail: '',
        password: '',
        region: ''
    });
    const [submitted, issubmitted] = useState(false);

    const { setAuthenticate } = useContext(AuthenticationContext);

    const handleChange = (evt) => {
        const { id, value } = evt.target;
        newData({
            ...data,
            [id]: value
        });
    };

    function handleSignin(e) {
        e.preventDefault();
        issubmitted(true);
    }

    const navigate = useNavigate();

    useEffect(() => {
        if (submitted) {
            const getdata = async () => {
                try {
                    const response = await axios.post(`${BASE_URL}/user/signin`, { name: data.name.trim(), username: data.username.trim(), email: data.mail.trim(), password: data.password.trim(), region: data.region.trim() });
                    if (response.data.message === "Success") {
                        setAuthenticate({ status: true });
                        navigate("/userhome");
                        setalertmessage({ signinsuccess: true });
                    } else {
                        navigate("/usersignin");
                        setalertmessage({ signinfailure: true });
                        setMessage({ msg: response.data.message, cls: 'alert-danger' });
                    }
                } catch (err) {
                    console.log(err);
                }
            }
            getdata();

            newData({
                name: '',
                username: '',
                mail: '',
                password: '',
                region: ''
            });
            issubmitted(false);
        }
    }, [submitted, data, navigate, setMessage, setalertmessage, setAuthenticate]
    );

    return (
        <div>
            {alertmessage.signinfailure && <Alert message={message} />}
            <div className="card mx-auto my-4" style={{ width: "22rem" }}>
                <div className="card-body">
                    <h5 className="card-title">SignIn</h5>
                    <form onSubmit={handleSignin}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" className="form-control" id='name' onChange={handleChange} value={data.name} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">Username</label>
                            <input type="text" className="form-control" id='username' onChange={handleChange} value={data.username} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="mail" className="form-label">Email address</label>
                            <input type="email" className="form-control" aria-describedby="emailHelp" id='mail' onChange={handleChange} value={data.mail} required />
                            <div id="mail" className="form-text" required>We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" className="form-control" id='password' onChange={handleChange} value={data.password} required />
                            <div id="password" className="form-text" required>Password must be 8 characters long which contain atleast one uppercase letter , one lowercase letter , one digit and a special symbol.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="region" className="form-label">Village/City</label>
                            <input type="text" className="form-control" id='region' onChange={handleChange} value={data.region} required />
                        </div>
                        <button type="submit" className="btn btn-primary">Register</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
