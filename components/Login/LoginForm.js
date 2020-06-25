import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const LoginForm = props =>{
    return (
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

            <Text>Not a user? Sign up here</Text> 
        </View>
    )
};

const styles = StyleSheet.create({
    loginForm: {
        width: '100%'
    },
    input: {
        paddingHorizontal: 2,
        paddingVertical: 5,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1
    }
});

export default LoginForm;