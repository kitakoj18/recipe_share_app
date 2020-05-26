import React from 'react';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Feed from '../screens/Feed';
import UserProfile from '../screens/UserProfile';

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

const RootNavigator = createBottomTabNavigator({
    Feed: {
        screen: FeedNavigator
    },
    UserProfile: {
        screen: UserNavigator
    }
})

export default createAppContainer(RootNavigator);