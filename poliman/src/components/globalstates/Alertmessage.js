import { useState, createContext } from "react";

const Alertcontext = createContext();

const Alertprovider = ({ children }) => {
    const [alertmessage, setalertmessage] = useState({ loginsuccess: false, loginfailure: false, signinsuccess: false, signinfailure: false, updatesuccess: false, updatefailure: false, adminloginsuccess: false, adminloginfailure: false, politiciandeletesuccess: false, politicianaddsuccess: false, politicianaddfailure: false, userdeletesuccess: false });
    return (
        <Alertcontext.Provider value={{ alertmessage, setalertmessage }}>
            {children}
        </Alertcontext.Provider>
    );
};

export { Alertcontext, Alertprovider };