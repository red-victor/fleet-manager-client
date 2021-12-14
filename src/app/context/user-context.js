import React from "react";
import { useState } from 'react';

const UserContext = React.createContext({
    user: {name: "", email: "", photoUrl: "", token: ""},
    saveUser: user => {},
    signOutUser: () => {}
});

export const UserContextProvider = props => {
    const getUser = () => {
        const userString = localStorage.getItem('user');
        if (userString) return JSON.parse(userString);
        return null
    }
    
    const [user, setUser] = useState(getUser());
    
    const saveUser = userObj => {
        localStorage.setItem('user', JSON.stringify(userObj));
        setUser(userObj);
    }

    const signOutUser = () => {
        localStorage.removeItem('user');
        setUser(null);
    }

    return (
        <UserContext.Provider value={{ user, saveUser, signOutUser }}>
            {props.children}
        </UserContext.Provider>
    )
};

export default UserContext;