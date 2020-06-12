import React from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';

const AddPostPicture = props =>{

    return (
        props.imgUri ? 
            <Image
                source={{ uri: props.imgUri }}
                style={styles.area}
            /> :
            <View style={styles.area}>
                <Text>Add Picture</Text>
                <Button 
                    title="Choose Picture"
                    onPress = {props.onOpenCamera}
                />
            </View>
    )
}

const styles = StyleSheet.create({
    area: {
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default AddPostPicture;
