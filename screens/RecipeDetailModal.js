import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import ExitButton from '../components/RecipeDetail/ExitButton';

const RecipeDetailModal = props =>{
    return (
        <View>
            <Text>These are the recipe details!</Text>
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

})

export default RecipeDetailModal;