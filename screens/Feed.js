import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { useSelector } from 'react-redux';

import axios from 'axios';

import Post from '../components/FeedPosts/Post';
import AddButton from '../components/FeedPosts/AddPost/AddButton';

const Feed = props =>{

    const [uploadedPosts, setUploadedPosts] = useState();

    const { token } = useSelector(state => state.auth)

    useEffect(() =>{

        const config = {
            headers: {
                Authorization: 'Bearer ' + token
            }
        }

        axios.get('http://localhost:8080/posts/get', config)
            .then(response =>{
                const retrievedPosts = response.data.posts;
                setUploadedPosts(retrievedPosts);
            })

    }, [])

    const renderPosts = (result) =>{

        console.log(result.item)

        const id = result.item._id;
        const recipeTitle = result.item.recipeTitle;
        const chefName = result.item.chef.name;
        const description = result.item.description;
        const imgUri = 'http://localhost:8080/' + result.item.imageUrl;
        const prepTime = result.item.prepTime.toString();
        const cookTime = result.item.cookTime.toString();

        return(
            <Post 
                onSelectDetailHandler={onSelectDetailHandler}
                id={id}
                recipeTitle={recipeTitle}
                chefName={chefName}
                imgUri={imgUri}
                description={description}
                prepTime={prepTime}
                cookTime={cookTime}
            />
        )
    }

    const onSelectDetailHandler = (id) => {
        props.navigation.navigate({
            routeName: 'RecipeDetailModal',
            params: {
                selectedId: id
            }
        })
    }

    return (
        // <View>
        //     <Text>This is going to be the feed!</Text>
        // </View>
        <View style={styles.screen}>
            <FlatList
                data={uploadedPosts}
                keyExtractor={result => result._id}
                renderItem={renderPosts}
                showsVerticalScrollIndicator={false}
            />
            {/* <Post 
                onSelectDetailHandler={onSelectDetailHandler}
            /> */}
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