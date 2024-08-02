import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../baseurl/Base_Url';

export default function Work() {
  const [info, setInfo] = useState(null);
  const [available, setAvailable] = useState(false);
  let i = 0;
  useEffect(() => {
    if (i === 0) {
      const handleapicall = async () => {
        try {
          const response = await axios.get(`${BASE_URL}/user/obtain`);
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
  return (
    <div>
      {available ? <table className="table">
        <thead>
          <tr>
            <th scope="col">Sr.No.</th>
            <th scope="col">Name</th>
            <th scope="col">Post</th>
            <th scope="col">Region</th>
            <th scope="col">Work</th>
          </tr>
        </thead>
        <tbody>
          {info.map((element, index) => {
            return (
              <tr key={element.work}>
                <th scope="row">{index + 1}</th>
                <td>{element.name}</td>
                <td>{element.post}</td>
                <td>{element.region}</td>
                <td>{element.work}</td>
              </tr>)
          })}
        </tbody>
      </table> : <div className='my-3' style={{ margin: "0 auto", textAlign: "center" }}><h3>No Data of your Region</h3></div>}
    </div>
  )
}
