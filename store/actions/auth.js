import { AsyncStorage } from 'react-native';

import axios from 'axios'; 

export const AUTHENTICATE = 'AUTHENTICATE';
export const LOGOUT = 'LOGOUT';

export const authenticate = (token) =>{
    return {type: AUTHENTICATE, token: token};
};

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
            //or that email does not exist
            throw new Error(res.errorMsg);
        }

        const resData = await res.data;
        dispatch(authenticate(resData.token));

        //save expirationDate into constant
        //expiration length (1H) provided by backend in MS as a string
        //new Date().getTime() gives current time in MS so wrap it in another new Date to timestamp date
        const expirationDate = new Date(new Date().getTime() + parseInt(resData.expiresIn));

        saveUserDataToStorage(resData.token, expirationDate);
    };
};

export const logout = () =>{
    return {type: LOGOUT};
}

const saveUserDataToStorage = (token, expirationDate) =>{
    AsyncStorage.setItem(
        'userData',
        JSON.stringify({
            token: token,
            expirationDate: expirationDate.toISOString()
        })
    )
}