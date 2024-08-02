import React from 'react';
import { Link } from 'react-router-dom';

export default function Decide() {
    return (
        <div className="card mx-auto my-4" style={{ width: "22rem" }}>
            <div className="card-body">
                <h5 className="card-title my-4" style={{ textAlign: "center" }}>Enter your role</h5>
                <Link to="/adminlogin" className="btn btn-primary my-2">Admin</Link>
                <Link to="/userlogin" className="btn btn-primary float-end my-2">User</Link>
            </div>
        </div>
    )
}
