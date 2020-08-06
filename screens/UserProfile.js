import React from 'react';
import { View, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import UserHeader from '../components/UserProfile/UserHeader';
import AddButton from '../components/FeedPosts/AddPost/AddButton';
import SignOutButton from '../components/Login/SignOutButton';

const UserProfile = props =>{

    return (
        <View style={styles.screen}>
            {/* <Text>This is going to be the user's profile!</Text> */}
            <UserHeader />
        </View>
    )
}

UserProfile.navigationOptions = ({ navigation }) =>{
    
    return {
        headerLeft: () =>(
            <View style={styles.signOutArea}>
                <SignOutButton/>
            </View>
        ),
        headerRight: () =>(
            <HeaderButtons HeaderButtonComponent={AddButton}>
                <Item 
                    title='Add Post'
                    iconName='plus'
                    onPress={() =>{
                        navigation.navigate({
                            routeName: 'AddPost'
                        })
                    }}
                />
            </HeaderButtons>
        )
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        width: '100%',
        padding: 10
    },
    signOutArea: {
        marginLeft: 15
    }
})

export default UserProfile;