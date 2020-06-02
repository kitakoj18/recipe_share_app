import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Post from '../components/Post';

const Feed = props =>{

    const onSelectDetailHandler = () => {
        props.navigation.navigate({
            routeName: 'RecipeDetailModal',
            // params: {
            //     selectedId: id
            // }
        })
    }

    return (
        // <View>
        //     <Text>This is going to be the feed!</Text>
        // </View>
        <View style={styles.screen}>
            <Post 
                onSelectDetailHandler={onSelectDetailHandler}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        padding: 10
    }
})

export default Feed;