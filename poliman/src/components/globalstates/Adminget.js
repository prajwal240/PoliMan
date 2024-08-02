import {  createContext, useState } from "react";

const AdmindataContext = createContext();

const AdmindataProvider = ({ children }) => {
    const [searchmessage, setSearchmessage] = useState('');
    return (
        <AdmindataContext.Provider value={{ searchmessage, setSearchmessage }}>
            {children}
        </AdmindataContext.Provider>
    );
};

export { AdmindataContext, AdmindataProvider };