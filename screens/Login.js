import React, { useState, useEffect, useReducer, useCallback } from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import axios from 'axios'; 

import LoginForm from '../components/Login/LoginForm';
import SignupForm from '../components/Login/SignupForm';
import * as authActions from '../store/actions/auth';

const USER_INPUT_UPDATE = 'LOGIN_UPDATE';

const userInputReducer = (state, action) =>{
    if(action.type === USER_INPUT_UPDATE){
        const updatedVals = {
            ...state.inputVals,
            [action.inputType]: action.value
        };
        return {
            inputVals: updatedVals
        }
    }

    return state;
}

const Login = props =>{

    const [showLogin, setShowLogin] = useState(true);
    const [error, setError] = useState();

    const [inputState, dispatchInputState] = useReducer(userInputReducer, {
        inputVals: {
            email: '',
            password: '',
            name: '',
            userName: ''
        }
    });

    const userInputChangeHandler = useCallback((inputType, text) =>{
            dispatchInputState({
                type: USER_INPUT_UPDATE,
                inputType: inputType,
                value: text
            })
        },
        [dispatchInputState]
    );

    const switchToHandler = () =>{
        // const switchType = !showLogin
        setShowLogin(!showLogin);
    }

    // alert user if there's an error
    useEffect(() =>{
        if(error){
            Alert.alert(error, [{text: 'Try Again'}]);
        }
    }, [error])

    const onLoginHandler = async () =>{
        
        setError(null);
        const action = authActions.login(inputState.inputVals.email, inputState.inputVals.password);
        try{
            await dispatch(action);
            props.navigation.navigate('App');
        }
        catch(err){
            const errorMsg = err.response.data.message;
            setError(errorMsg);
        }
    }

    const onSignUpHandler = () =>{

        setError(null);
        const authRoute = 'http://localhost:8080/auth/signup';
        // const authRoute = '104.32.92.60:8080/auth/signup';
        const body = {
            email: inputState.inputVals.email, 
            password: inputState.inputVals.password,
            name: inputState.inputVals.name,
            userName: inputState.inputVals.userName
        }

        axios.put(authRoute, body)
            .then(res =>{
                setShowLogin(!showLogin);
            })
            .catch(err =>{
                const errorMsg = err.response.data.message;
                setError(errorMsg);
            })
    }

    return (
        <KeyboardAwareScrollView>
            <View style={styles.screen}>

                <View style={styles.logo}>
                    <Text style={styles.logoText}>FoodFetish</Text>
                </View>

                {showLogin ? 
                    <LoginForm
                        emailValue={inputState.inputVals.email}
                        pwValue={inputState.inputVals.password}
                        inputChangeHandler={userInputChangeHandler}
                        switchToHandler={switchToHandler}
                    /> :
                    <SignupForm 
                        nameValue={inputState.inputVals.name}
                        userNameValue={inputState.inputVals.userName}
                        emailValue={inputState.inputVals.email}
                        pwValue={inputState.inputVals.password}
                        inputChangeHandler={userInputChangeHandler}
                        switchToHandler={switchToHandler}
                    />   
                }
                
                <View style={styles.button}>
                    <Button 
                        title={showLogin ? 'Login' : 'Signup!'}
                        onPress={showLogin ? onLoginHandler : onSignUpHandler}
                    />
                </View>
            </View>
        </KeyboardAwareScrollView>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        // alignItems: 'center'
    },
    logoText: {
        marginVertical: 40
    },
    button: {
        marginTop: 20
    }
});

export default Login; 