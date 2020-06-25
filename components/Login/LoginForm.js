import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableWithoutFeedback } from 'react-native';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const LoginForm = props =>{
    return (
        <KeyboardAwareScrollView>
            <TouchableWithoutFeedback onPress={()=>{
                Keyboard.dismiss();
            }}>
                <View style={styles.loginForm}>
                    <Text>
                        E-mail:
                    </Text>
                    <TextInput 
                        value={props.emailValue}
                        style={styles.input}
                        keyboardType='email-address'
                        required
                        autoCapitalize='none'
                        onChangeText={(text) =>{
                            props.inputChangeHandler('email', text)
                        }}
                    />
                    <Text>
                        Password:
                    </Text>
                    <TextInput 
                        value={props.pwValue}
                        style={styles.input}
                        required
                        autoCapitalize='none'
                        secureTextEntry
                        onChangeText={(text) =>{
                            props.inputChangeHandler('password', text)
                        }}
                    />

                    <View style={styles.switchToText}>
                        <Text>Not a user? Sign up </Text> 
                        <Text
                            style={styles.switchLink}
                            onPress={props.switchToHandler}
                        >
                            here
                        </Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAwareScrollView>
    )
};

const styles = StyleSheet.create({
    loginForm: {
        width: '100%'
    },
    input: {
        marginBottom: 10,
        paddingHorizontal: 2,
        paddingVertical: 5,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1
    },
    switchToText: {
        flexDirection: 'row'
    },
    switchLink:{
        color: 'blue',
        textDecorationLine: 'underline'
    }
});

export default LoginForm;