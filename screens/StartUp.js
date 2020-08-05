import React, { useEffect } from 'react';
import { View, StyleSheet, ActivityIndicator, AsyncStorage } from 'react-native';

import { useDispatch } from 'react-redux';

import * as authActions from '../store/actions/auth';

const StartUp = props => {

    const dispatch = useDispatch();

    useEffect(() =>{
        const tryLogin = async () =>{
            const userLoginData = await AsyncStorage.getItem('userData');
            // if no login data, then not logged in and go to login screen
            if(!userLoginData){
                props.navigation.navigate('Login');
                return;
            }
            
            const userData = JSON.parse(userLoginData);
            const { token, expirationDate } = userData;

            //in actions auth.js, expirationDate is date in ISOString format
            const dateExpiration = new Date(expirationDate);
            if(dateExpiration <= new Date() || !token){
                props.navigation.navigate('Login');
                return; 
            }
            
            dispatch(authActions.authenticate(token));
            props.navigation.navigate('App');
        };

        tryLogin();

    }, [dispatch]);

    return (
        <View style={styles.screen}>
            <ActivityIndicator size='large' />
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default StartUp;