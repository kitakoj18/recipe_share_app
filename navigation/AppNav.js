import React from 'react';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Feed from '../screens/Feed';
import UserProfile from '../screens/UserProfile';
import RecipeDetailModal from '../screens/RecipeDetailModal';
import AddPost from '../screens/AddPost';

const FeedNavigator = createStackNavigator({
    Feed: {
        screen: Feed
    }
})

const UserNavigator = createStackNavigator({
    UserProfile: {
        screen: UserProfile
    }
})

const BottomNavigator = createBottomTabNavigator({
    Feed: {
        screen: FeedNavigator
    },
    UserProfile: {
        screen: UserNavigator
    }
})

const RootNavigator = createStackNavigator({
    Main: {
        screen: BottomNavigator,
        navigationOptions: {
            headerShown: false
        }
    },
    RecipeDetailModal: {
        screen: RecipeDetailModal
    },
    AddPost: {
        screen: AddPost
    }
}, {
    mode: 'modal'
})

export default createAppContainer(RootNavigator);