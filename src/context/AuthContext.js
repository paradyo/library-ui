import React, { createContext, useState, useEffect } from 'react';
import ApiBase from '../utilities/api/ApiBase';
import { links } from '../utilities/api/links';
import { notification } from 'antd';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [token, setToken] = useState(null);

    // Check if the token exists in Local Storage on component mount
    useEffect(() => {
        const storedToken = localStorage.getItem('authToken');
        if (storedToken) {
            setToken(storedToken);
            setIsAuthenticated(true);
        }
    }, []);

    // Update Local Storage whenever the token or isAuthenticated changes
    useEffect(() => {
        if (token) {
            localStorage.setItem('authToken', token);
        } else {
            localStorage.removeItem('authToken');
        }
    }, [token]);

    const openNotificationWithIcon = (type, message, description) => {
        notification.open({
            message: message,
            description: description,
            type: type
        });
    };

    const login = async (username, password) => {
        let baToken = 'Basic ' + window.btoa(username + ':' + password)
        let isLoginSuccess = false
        await ApiBase.Get({
            place: 'AuthContext - BasicAuth',
            url: links.authenticate,
            authorization: baToken,
            body: {},
            successFunction: (res) => {
                setIsAuthenticated(true);
                setToken(baToken)
                isLoginSuccess = true
            },
            errorFunction: (res) => {
                openNotificationWithIcon('error', 'Authentication Error!', res.message)
                isLoginSuccess = false
                logout()
            },
            exceptionFunction: (res) => {
                console.log('resExc: ', res)
                openNotificationWithIcon('error', 'Server Error!', 'Sorry, we are working on it.')
                isLoginSuccess = false
                logout()
                //TODO: exception "HomePage - GetBooks"
            }
        });
        return isLoginSuccess
    };

    const logout = () => {
        setIsAuthenticated(false);
        setToken(null)
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout, token }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };
