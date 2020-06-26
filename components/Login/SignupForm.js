import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';

const SignupForm = props =>{
    return(
        <TouchableWithoutFeedback onPress={()=>{
            Keyboard.dismiss();
        }}>
            <View style={styles.loginForm}>
                <Text>
                    Name:
                </Text>
                <TextInput 
                    value={props.nameValue}
                    style={styles.input}
                    required
                    autoCompleteType='off'
                    autoCorrect={false}
                    autoCapitalize='none'
                    onChangeText={(text) =>{
                        props.inputChangeHandler('name', text)
                    }}
                />
                <Text>
                    UserName:
                </Text>
                <TextInput 
                    value={props.userNameValue}
                    style={styles.input}
                    required
                    autoCompleteType='off'
                    autoCorrect={false}
                    autoCapitalize='none'
                    onChangeText={(text) =>{
                        props.inputChangeHandler('userName', text)
                    }}
                />
                <Text>
                    E-mail:
                </Text>
                <TextInput 
                    value={props.emailValue}
                    style={styles.input}
                    keyboardType='email-address'
                    required
                    autoCompleteType='off'
                    autoCorrect={false}
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
                    autoCompleteType='off'
                    autoCorrect={false}
                    autoCapitalize='none'
                    secureTextEntry
                    onChangeText={(text) =>{
                        props.inputChangeHandler('password', text)
                    }}
                />

                <View style={styles.switchToText}>
                    <Text>Already a user? Login </Text> 
                    <Text
                        style={styles.switchLink}
                        onPress={props.switchToHandler}
                    >
                        here
                    </Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    loginForm: {
        width: '80%'
    },
    input: {
        marginBottom: 5,
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

export default SignupForm;