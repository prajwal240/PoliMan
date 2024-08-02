import React, { useEffect, useState, useContext } from 'react';
import { UserContext } from '../globalstates/Usersearch';
import axios from 'axios';
import { BASE_URL } from '../baseurl/Base_Url';

export default function Search() {
  const [info, setInfo] = useState(null);
  const [available, setAvailable] = useState(false);
  const { searchWord } = useContext(UserContext);

  let i = 0;
  useEffect(() => {
    if (i === 0) {
      const handleapicall = async () => {
        try {
          const [word1, word2] = searchWord.split(",");
          const response = await axios.post(`${BASE_URL}/user/search`, { word1, word2 });
          if (response.data.message !== "Failed") {
            setInfo(response.data);
            setAvailable(true);
          } else {
            setAvailable(false);
          };
        } catch (error) {
          console.log(error)
        };
      };
      handleapicall();
      i++;
    };
  }, [i, setInfo, setAvailable, searchWord]);
  
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
          {info && info.map((element, index) => {
            return (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{element.name}</td>
                <td>{element.post}</td>
                <td>{element.region}</td>
                <td>{element.work}</td>
              </tr>)
          })}
        </tbody>
      </table> : <div className='my-3' style={{margin:"0 auto",textAlign:"center"}}><h3>No Data Found</h3></div>}
    </div>
  )
}
