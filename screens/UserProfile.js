import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import UserHeader from '../components/UserProfile/UserHeader';

const UserProfile = props =>{
    return (
        <View style={styles.screen}>
            {/* <Text>This is going to be the user's profile!</Text> */}
            <UserHeader />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        width: '100%',
        padding: 10
    }
})

export default UserProfile;