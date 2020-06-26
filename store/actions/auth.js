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

        const resData = res.data;
        dispatch({
            type: LOGIN,
            token: resData.token,
            userId: resData.userId
        })
    };
};