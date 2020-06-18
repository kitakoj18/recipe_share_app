import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import axios from 'axios';

import ExitButton from '../components/RecipeDetail/ExitButton';

const RecipeDetailModal = props =>{

    const [recipeDetails, setRecipeDetails] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{

        const selectedPostId = props.navigation.getParam('selectedId');
        const getPostPath = 'http://localhost:8080/posts/get/' + selectedPostId;

        axios.get(getPostPath)
            .then(response =>{
                const selectedRecipe = response.data.post;
                setRecipeDetails(selectedRecipe);
                setIsLoading(false);
            })
    }, [])

    if(!isLoading){

        const imgUri = 'http://localhost:8080/' + recipeDetails.imageUrl;

        return (
            <View style={styles.screen}>
                <Text>{recipeDetails.recipeTitle}</Text>
                <View style={styles.imgContainer}>
                    <Image
                        source={{uri: imgUri}}
                        style={styles.img}
                    />
                </View>
                <Text>Description: {recipeDetails.description}</Text>
                <Text>Prep Time: {recipeDetails.prepTime} minutes</Text>
                <Text>Cook Time: {recipeDetails.cookTime} minutes</Text>
                <Text>Ingredients: {recipeDetails.ingredients}</Text>
                <Text>Instructions: {recipeDetails.instructions}</Text>
    
            </View>
        )
    }

    return (
        <View>
            <Text>...Loading...</Text>
        </View>
    )

}

RecipeDetailModal.navigationOptions = ({ navigation }) =>{
    return {
        headerTitle: 'Recipe Details',
        headerLeft: () => (null),
        headerRight: () => (
            <HeaderButtons HeaderButtonComponent={ExitButton}>
                <Item 
                    title='Close'
                    iconName='close'
                    onPress={() =>{
                        navigation.goBack()
                    }}
                />
            </HeaderButtons>
        )
    }
}

const styles = StyleSheet.create({
    screen: {
        padding: 10,
        height: '100%',
        width: '100%'
    },
    imgContainer: {
        height: '50%',
        width: '100%'
    },
    img: {
        height: '100%',
        width: '100%'
    }
})

export default RecipeDetailModal;