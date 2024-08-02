import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Alertcontext } from '../globalstates/Alertmessage';
import Alert from '../commoncomponents/Alert';
import { BASE_URL } from '../baseurl/Base_Url';

export default function Update() {
    const { alertmessage, setalertmessage } = useContext(Alertcontext);
    const [message, setMessage] = useState({ msg: '', cls: '' });
    const [data, setData] = useState({
        name: '',
        username: '',
        mail: '',
        password: '',
        region: ''
    });
    const [update, updated] = useState(false);
    const navigate = useNavigate();

    let i = 0;

    useEffect(() => {
        if (i === 0) {
            async function handleapicall() {
                try {
                    const response = await axios.get(`${BASE_URL}/user/update`);
                    setData({
                        name: response.data.name,
                        username: response.data.username,
                        mail: response.data.email,
                        password: response.data.password,
                        region: response.data.region
                    });
                } catch (err) {
                    console.log(err);
                };
            };
            handleapicall();
            i++;
        };
    }, [i]);

    function handleUpdate(evt) {
        evt.preventDefault();
        updated(true);
    };

    function handleChange(evt) {
        const { id, value } = evt.target;
        setData({
            ...data,
            [id]: value
        });
    };

    useEffect(() => {
        if (update) {
            const apicall = async () => {
                try {
                    const response = await axios.post(`${BASE_URL}/user/update`, { name: data.name.trim(), username: data.username.trim(), email: data.mail.trim(), password: data.password.trim(), region: data.region.trim() });
                    if (response.data.message === "Success") {
                        setalertmessage({ updatesuccess: true });
                        navigate("/userhome");

                    } else {
                        setalertmessage({ updatefailure: true });
                        setMessage({ msg: response.data.message, cls: 'alert-danger' });
                        navigate("/userupdate")
                    };
                } catch (err) {
                    console.log(err);
                };
            };
            apicall();
            updated(false);
        };
    }, [data, update, navigate, setalertmessage]);

    return (
        <div>
            {alertmessage.updatefailure && <Alert message={message} />}
            <div className="card mx-auto my-4" style={{ width: "22rem" }}>
                <div className="card-body">
                    <h5 className="card-title">SignIn</h5>
                    <form onSubmit={handleUpdate}>
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
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" className="form-control" id='password' onChange={handleChange} value={data.password} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="region" className="form-label">Village/City</label>
                            <input type="text" className="form-control" id='region' onChange={handleChange} value={data.region} required />
                        </div>
                        <button type="submit" className="btn btn-primary" style={{ margin: '0 auto', display: 'block' }}>Update</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
