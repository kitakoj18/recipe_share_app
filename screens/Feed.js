import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Post from '../components/Post';

const Feed = props =>{
    return (
        // <View>
        //     <Text>This is going to be the feed!</Text>
        // </View>
        <View style={styles.screen}>
            <Post />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        padding: 10
    }
})

export default Feed;