import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

const UserHeader = props =>{
    return (
        <View style={styles.header}>
            <View style={styles.imageContainer}>
                <Image
                    source={{ uri: "https://spoonacular.com/recipeImages/534573-312x231.jpg" }}
                    style={styles.profileImg}
                />
            </View>
            <View style={styles.screenNameContainer}>
                <Text>kitakoj18</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 50,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    imageContainer: {
        height: '100%',
        width: 50,
        borderRadius: 40,
        overflow: 'hidden'
    },
    profileImg: {
        height: '100%',
        width: '100%'
    },
    screenNameContainer: {
        justifyContent: 'flex-end'
    }
})

export default UserHeader;