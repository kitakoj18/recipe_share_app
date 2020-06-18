import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const Post = props => {
    return (
        <View style={styles.post}>
            <View style={styles.header}>
                <Text>{props.recipeTitle}</Text>
                <Text>Chef {props.chefName}</Text>
            </View>
            <TouchableOpacity
                style={styles.imgContainer}
                onPress={() =>{
                    props.onSelectDetailHandler(props.id)
                }}
            >
                <Image
                    source={{ uri: props.imgUri }}
                    style={styles.img}
                />
            </TouchableOpacity>
            <View style={styles.footer}>
                <Text>{props.description}</Text>
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