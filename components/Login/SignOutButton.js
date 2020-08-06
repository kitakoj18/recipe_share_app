import React from 'react';
import { useDispatch } from 'react-redux';

import { Octicons } from '@expo/vector-icons';

import * as authActions from '../../store/actions/auth';

const SignOutButton = props =>{

    const dispatch = useDispatch();

    const dispatchLogout = () =>{
        dispatch(authActions.logout());
        // do not need to navigate to login because the dispatch will cause token to be reset,
        // which will cause the useEffect() function in NavigationContainer to trigger
        // and there, the user will be redirected to login page
        // navigation.navigate({
        //     routeName: 'Login'
        // })
    }

    return (
        <Octicons
            name='sign-out'
            size={23}
            onPress={dispatchLogout}
        />
    )
}

export default SignOutButton;