import { AsyncStorage } from 'react-native';

import axios from 'axios'; 

export const LOGIN = 'LOGIN';

export const login = (email, password) =>{

    const authRoute = 'http://localhost:8080/auth/login';
    const body = {
        email: email,
        password: password
    }

    return async dispatch => {
        const res = await axios.post(authRoute, body)
        if(res.errorMsg){
            //send alert with error message to user ie if email or password is incorrect
            throw new Error(res.errorMsg);
        }

        const resData = await res.data;
        dispatch({
            type: LOGIN,
            token: resData.token,
            userId: resData.userId
        })

        //save expirationDate into constant
        //expiration length (1H) provided by backend in MS as a string
        //new Date().getTime() gives current time in MS so wrap it in another new Date to timestamp date
        const expirationDate = new Date(new Date().getTime() + parseInt(resData.expiresIn));

        saveUserDataToStorage(resData.token, resData.userId, expirationDate);
    };
};

const saveUserDataToStorage = (token, userId, expirationDate) =>{
    AsyncStorage.setItem(
        'userData',
        JSON.stringify({
            token: token,
            userId: userId,
            expirationDate: expirationDate.toISOString()
        })
    )
}