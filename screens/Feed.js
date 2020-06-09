import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import Post from '../components/FeedPosts/Post';
import AddButton from '../components/FeedPosts/AddPost/AddButton';

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

Feed.navigationOptions = ({ navigation }) =>{
    return {
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
        padding: 10
    }
})

export default Feed;