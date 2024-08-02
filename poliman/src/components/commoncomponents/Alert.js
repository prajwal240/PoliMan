import React, { useContext } from 'react';
import { Alertcontext } from '../globalstates/Alertmessage';

export default function Alert(props) {
    const { alertmessage, setalertmessage } = useContext(Alertcontext);

    if (!alertmessage.loginsuccess || !alertmessage.loginfailure || !alertmessage.signinsuccess || !alertmessage.signinfailure || !alertmessage.updatesuccess || !alertmessage.updatefailure || !alertmessage.adminloginsuccess || !alertmessage.adminloginfailure || !alertmessage.politiciandeletesuccess || !alertmessage.politicianaddsuccess || !alertmessage.politicianaddfailure || !alertmessage.userdeletesuccess) {
        setTimeout(() => {
            setalertmessage({ loginsuccess: false, loginfailure: false, signinsuccess: false, signinfailure: false, updatesuccess: false, updatefailure: false, adminloginsuccess: false, adminloginfailure: false, politiciandeletesuccess: false, politicianaddsuccess: false, politicianaddfailure: false, userdeletesuccess: false })
        }, 1500);
    };

    return (
        <div className={`alert ${props.message.cls}`} role="alert">
            {props.message.msg}
        </div>
    );
}
