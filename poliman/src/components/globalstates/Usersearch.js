import { createContext, useState } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [searchWord, setSearchWord] = useState('');
    return (
        <UserContext.Provider value={{ searchWord, setSearchWord }}>
            {children}
        </UserContext.Provider>
    );
};

export { UserContext, UserProvider };