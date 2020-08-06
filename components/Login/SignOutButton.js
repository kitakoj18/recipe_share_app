import React from 'react';
import { useDispatch } from 'react-redux';

import { Octicons } from '@expo/vector-icons';

import * as authActions from '../../store/actions/auth';

const SignOutButton = props =>{

    const dispatch = useDispatch();

    const dispatchLogout = (navigation) =>{
        dispatch(authActions.logout());
        navigation.navigate({
            routeName: 'Login'
        })
    }

    return (
        <Octicons
            name='sign-out'
            size={23}
            onPress={()=>{
                dispatchLogout(props.navigation)
            }}
        />
    )
}

export default SignOutButton;