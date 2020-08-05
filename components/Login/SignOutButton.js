import React from 'react';
import { HeaderButton } from 'react-navigation-header-buttons';
import { Octicons } from '@expo/vector-icons';

const SignOutButton = props =>{
    return (
        <HeaderButton
            {...props}
            IconComponent={Octicons}
            iconSize={23}
        />
    )
}

export default SignOutButton;