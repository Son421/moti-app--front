import { useState, useEffect } from 'react';
import constants from '../components/constants';

function useAuth() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userInfo, setUserInfo] = useState<any>();

    useEffect(() => {
        upgrToken();
    }, []);

    const upgrToken = () => {
        console.log('trying to fetch customer data')
        const token = localStorage.getItem('token');
        if (token) {
            fetchUserInfo(token);
        }
    }

    const fetchUserInfo = async (token: any) => {
        try {
            const response = await fetch(`${constants.url}/user`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            });

            if (!response.ok) {
                throw new Error('Failed to fetch user info');
            }

            const data = await response.json();
            setUserInfo(data);
            setIsAuthenticated(true);
        } catch (error: any) {
            console.error(error.message);
            setIsAuthenticated(false);
        }
    };

    const logout = () => {
        localStorage.removeItem('token');
        setIsAuthenticated(false);
        setUserInfo(null);
    };

    const upgrade = () => {
        setIsAuthenticated(true);
    }

    return { isAuthenticated, userInfo, logout, upgrToken, upgrade};
}

export default useAuth;