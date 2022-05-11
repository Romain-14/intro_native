import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/userSlice';

const Login = () => {

  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(login())
  }, [])

  return (
    <View>
      <Text>Login</Text>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({})