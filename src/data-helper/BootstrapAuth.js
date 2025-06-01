import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import EncryptedStorage from 'react-native-encrypted-storage';
import { setCredentials, setLoading } from '../redux-storage/AuthSlice';

const BootstrapAuth = ({ children }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        const loadSession = async () => {
            try {
                const session = await EncryptedStorage.getItem('user_session');
                if (session) {
                    const user = JSON.parse(session);
                    dispatch(setCredentials({ user, token: null }));
                } else {
                    dispatch(setLoading(false));
                }
            } catch (error) {
                dispatch(setLoading(false));
            }
        };

        loadSession();
    }, [dispatch]);

    return children;
};

export default BootstrapAuth;
