import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { NavigationActions } from 'react-navigation';

import RootNavigator from './AppNav';

const NavigationContainer = props =>{

    const navRef = useRef();
    const isAuthorized = useSelector(state => !!state.auth.token);
    useEffect(() =>{
        if(!isAuthorized){
            // use ref to get access to navigation functionality with the help of RootNavigator component
            navRef.current.dispatch(NavigationActions.navigate({
                routeName: 'Login'
            }))
        }
    }, [isAuthorized]);

    // establish connection between nav ref constant and this element that is rendered
    return <RootNavigator ref={navRef}/>
};

export default NavigationContainer;