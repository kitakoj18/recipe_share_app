import React, { useState, useReducer, useCallback } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import LoginForm from '../components/Login/LoginForm';
import SignupForm from '../components/Login/SignupForm';

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
        const switchType = !showLogin
        setShowLogin(switchType)
    }

    return (
        <View style={styles.screen}>

            <Text style={styles.logoText}>FoodFetish</Text>

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
            
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        // flex: 1,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logoText: {
        marginVertical: 40
    }
});

export default Login; 