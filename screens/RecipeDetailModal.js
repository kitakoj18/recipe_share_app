import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const RecipeDetailModal = props =>{
    return (
        <View>
            <Text>These are the recipe details!</Text>
        </View>
    )
}

RecipeDetailModal.navigationOptions = ({
    headerTitle: 'Recipe Details'
})

const styles = StyleSheet.create({

})

export default RecipeDetailModal;