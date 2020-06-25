import React from 'react';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Login from '../screens/Login';
import Feed from '../screens/Feed';
import UserProfile from '../screens/UserProfile';
import RecipeDetailModal from '../screens/RecipeDetailModal';
import AddPost from '../screens/AddPost';
import CameraScreen from '../screens/CameraScreen';

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

const AppNavigator = createStackNavigator({
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
    },
    CameraScreen: {
        screen: CameraScreen
    }
}, {
    mode: 'modal'
})

const RootNavigator = createStackNavigator({
    Login: Login,
    App: AppNavigator
})

export default createAppContainer(RootNavigator);