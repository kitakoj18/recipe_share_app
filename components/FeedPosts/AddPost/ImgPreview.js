import React from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';

const ImgPreview = props =>{
    return(
        <View style={styles.screen}>
            <Image
                source={{ uri: props.imgUri }}
                style={styles.img}
            />
            <View style={styles.selectionArea}>
                <Button
                    title='Select Picture'
                    onPress={() => {props.onSelectPicture(props.imgUri)}}
                />
                <Button
                    title='Take Another Picture'
                    onPress={() => {props.onRejectPicture()}}
                />
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1
    },
    img: {
        height: '50%',
        width: '100%'
    },
    selectionArea: {
        height: '50%',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    }
})

export default ImgPreview; 