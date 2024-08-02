import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Alertcontext } from '../globalstates/Alertmessage';
import { BASE_URL } from '../baseurl/Base_Url';

export default function Users() {
  const navigate = useNavigate();

  const [info, setInfo] = useState(null);
  const [available, setAvailable] = useState(false);
  let i = 0;
  useEffect(() => {
    if (i === 0) {
      const handleapicall = async () => {
        try {
          const response = await axios.get(`${BASE_URL}/work/obtainusers`);
          if (response.data.length !== 0) {
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
  }, [i, setInfo, setAvailable]);

  const [remove, setRemove] = useState(false);
  const [postInfo, setPostInfo] = useState({ email: '' });
  const { setalertmessage } = useContext(Alertcontext);

  const handleDelete = (evt, email) => {
    evt.preventDefault();
    setPostInfo({ email: email });
    setRemove(true);
  };

  useEffect(() => {
    if (remove) {
      const handleApi = async () => {
        try {
          const response = await axios.post(`${BASE_URL}/work/removeusers`, { email: postInfo.email });
          if (response.data.message === "Success") {
            setalertmessage({ userdeletesuccess: true });
            navigate("/adminhome");
          };
        } catch (error) {
          console.log(error)
        };
      };
      setRemove(false);
      handleApi();
    };
  }, [remove, setRemove, navigate, postInfo, setalertmessage]);

  return (
    <div>
      {available ? <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Sr.No.</th>
              <th scope="col">Name</th>
              <th scope="col">Username</th>
              <th scope="col">Email</th>
              <th scope="col">Region</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {info.map((element, index) => {
              return (
                <tr key={element.email}>
                  <th scope="row">{index + 1}</th>
                  <td>{element.name}</td>
                  <td>{element.username}</td>
                  <td>{element.email}</td>
                  <td>{element.region}</td>
                  <td><button onClick={(evt) => handleDelete(evt, element.email)} className='btn btn-primary'>Delete</button></td>
                </tr>)
            })}
          </tbody>
        </table>
      </div> : <div className='my-3' style={{ margin: "0 auto", textAlign: "center" }}><h3>No Data Found</h3></div>}
    </div>
  )
}

