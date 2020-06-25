import React, { useState, useReducer } from 'react';
import { View, Text, StyleSheet } from 'react-native';

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
    })

    const userInputChangeHandler = (inputType, text) =>{
        dispatchInputState({
            type: USER_INPUT_UPDATE,
            inputType: inputType,
            value: text
        })
    }

    return (
        <View>
            <Text>This is the login page</Text>
            <Text>Not a user? Sign up here</Text>
        </View>
    )
}

const styles = StyleSheet.create({

});

export default Login; 