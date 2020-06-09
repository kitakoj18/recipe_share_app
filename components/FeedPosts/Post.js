import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const Post = props => {
    return (
        <View style={styles.post}>
            <View style={styles.header}>
                <Text>Carbonara</Text>
                <Text>kitakoj18</Text>
            </View>
            <TouchableOpacity
                style={styles.imgContainer}
                onPress={() =>{
                    props.onSelectDetailHandler()
                }}
            >
                <Image
                    source={{ uri: "https://spoonacular.com/recipeImages/534573-312x231.jpg" }}
                    style={styles.img}
                />
            </TouchableOpacity>
            <View style={styles.footer}>
                <Text>This is a picture of a pie!</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    post: {
        height: 500,
        width: '100%'
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    imgContainer: {
        height: '50%',
        width: '100%'
    },
    img: {
        height: '100%',
        width: '100%'
    },
    footer: {

    }
})

export default Post;