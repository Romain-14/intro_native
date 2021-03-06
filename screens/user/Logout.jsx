import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/userSlice';

const Logout = () => {

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(logout());
    }, [])

    return null
}

export default Logout;
