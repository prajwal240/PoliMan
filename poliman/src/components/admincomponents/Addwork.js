import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Alertcontext } from '../globalstates/Alertmessage';
import Alert from '../commoncomponents/Alert';
import { BASE_URL } from '../baseurl/Base_Url';

export default function Addwork() {
    const navigate = useNavigate();
    const [info, setInfo] = useState({
        name: '',
        post: '',
        region: '',
        work: ''
    });
    const [submit, submitted] = useState(false);

    const { alertmessage, setalertmessage } = useContext(Alertcontext);
    const [message, setMessage] = useState({ msg: '', cls: '' });

    const handleChange = (evt) => {
        const { id, value } = evt.target;
        setInfo({
            ...info,
            [id]: value
        });
    };

    const handleAdd = (evt) => {
        evt.preventDefault();
        setInfo({
            name: info.name.trim().toUpperCase(),
            post: info.post.trim().toUpperCase(),
            region: info.region.trim().toUpperCase(),
            work: info.work.trim().toUpperCase()
        })
        submitted(true);
    };

    useEffect(() => {
        if (submit) {
            const handleApicall = async () => {
                try {
                    const response = await axios.post(`${BASE_URL}/work/add`, info);
                    if (response.data.message === "Success") {
                        setalertmessage({ politicianaddsuccess: true });
                        navigate("/adminhome");
                    } else {
                        setalertmessage({ politicianaddfailure: true });
                        setMessage({ msg: 'Check the data !!', cls: 'alert-danger' });
                    };
                } catch (error) {
                    console.log(error);
                };
            };
            handleApicall();
            submitted(false);
        }
    }, [submit, submitted, setalertmessage, setMessage, info, navigate]);

    return (
        <div>
            {alertmessage.politicianaddfailure && <Alert message={message} />}
            <div className="card mx-auto my-4" style={{ width: "22rem" }}>
                <div className="card-body">
                    <h5 className="card-title">AddWork</h5>
                    <form onSubmit={handleAdd}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" className="form-control" id='name' onChange={handleChange} value={info.name} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="post" className="form-label">Post</label>
                            <input type="text" className="form-control" id='post' onChange={handleChange} value={info.post} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="region" className="form-label">Region</label>
                            <input type="text" className="form-control" id='region' onChange={handleChange} value={info.region} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="work" className="form-label">Work</label>
                            <input type="text" className="form-control" id='work' onChange={handleChange} value={info.work} required />
                        </div>
                        <button type="submit" className="btn btn-primary">Register</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
