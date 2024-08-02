import { createContext, useState } from "react";

const AdminauthenticateContext = createContext();

const AdminauthenticateProvider = ({ children }) => {
    const [status, setStatus] = useState(false);
    return (
        <AdminauthenticateContext.Provider value={{ status, setStatus }}>
            {children}
        </AdminauthenticateContext.Provider>
    );
};

export { AdminauthenticateContext, AdminauthenticateProvider };