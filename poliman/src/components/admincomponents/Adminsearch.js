import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Alertcontext } from '../globalstates/Alertmessage';
import { AdmindataContext } from '../globalstates/Adminget';
import { BASE_URL } from '../baseurl/Base_Url';

export default function Adminsearch() {
    const navigate = useNavigate();

    const [info, setInfo] = useState(null);
    const [available, setAvailable] = useState(false);

    const { searchmessage } = useContext(AdmindataContext);

    let i = 0;
    useEffect(() => {
        if (i === 0) {
            const handleapicall = async () => {
                try {
                    const [word1, word2] = searchmessage.split(",");
                    const response = await axios.post("http://localhost:8001/work/search", { word1, word2 });
                    if (response.data.message !== "Failed") {
                        setAvailable(true);
                        setInfo(response.data);
                    } else {
                        setAvailable(false);
                    }
                } catch (error) {
                    console.log(error)
                };
            };
            handleapicall();
            i++;
        };
    }, [i, setInfo, setAvailable, searchmessage]);

    const [remove, setRemove] = useState(false);
    const [postInfo, setPostInfo] = useState({ work: '' });
    const { setalertmessage } = useContext(Alertcontext);

    const handleDelete = (evt, work) => {
        evt.preventDefault();
        setPostInfo({ work: work });
        setRemove(true);
    };

    useEffect(() => {
        if (remove) {
            const handleApi = async () => {
                try {
                    const response = await axios.post(`${BASE_URL}/work/removework`, { work: postInfo.work });
                    if (response.data.message === "Success") {
                        setalertmessage({ politiciandeletesuccess: true });
                        navigate("/adminhome");
                    };
                } catch (error) {
                    console.log(error)
                };
            };
            setRemove(false);
            handleApi();
        };
    }, [remove, setRemove, navigate, setalertmessage, postInfo]);

    return (
        <div>
            {available ? <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Sr.No.</th>
                            <th scope="col">Name</th>
                            <th scope="col">Post</th>
                            <th scope="col">Region</th>
                            <th scope="col">Work</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {info && info.map((element, index) => {
                            return (
                                <tr key={element.work}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{element.name}</td>
                                    <td>{element.post}</td>
                                    <td>{element.region}</td>
                                    <td>{element.work}</td>
                                    <td><button onClick={(evt) => handleDelete(evt, element.work)} className='btn btn-primary'>Delete</button></td>
                                </tr>)
                        })}
                    </tbody>
                </table>
                <div onClick={(evt) => { evt.preventDefault(); navigate("/adminpoliticians/add") }} className='my-2 mx-auto d-block text-center'><button className='btn btn-primary'>Add</button></div>
            </div> : <div className='my-3' style={{ margin: "0 auto", textAlign: "center" }}><h3>No Data Found</h3></div>}
        </div>
    )
}
