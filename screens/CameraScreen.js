import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { Camera } from 'expo-camera';
import * as Permissions from 'expo-permissions';

import ImgPreview from '../components/FeedPosts/AddPost/ImgPreview';

class CameraScreen extends Component {
    
    constructor(props){
        super(props)

        this.state = {
            hasCameraPermission: null,
            cameraType: Camera.Constants.Type.back,
            img: null
        }
    }

    async componentDidMount() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({hasCameraPermission: status === 'granted'});
    }

    async takePicture(){
        if(this.cameraRef){
            const takenImg = await this.cameraRef.takePictureAsync();
            this.setState({img: takenImg});
        }
    }

    selectPictureHandler(imgUri){
        const selectPicture = this.props.navigation.getParam('onSelectPicture')
        selectPicture(imgUri)
        this.props.navigation.goBack();
    }

    rejectPictureHandler(){
        this.setState({img: null})
    }

    render(){

        const { hasCameraPermission, img } = this.state;

        if(hasCameraPermission === null){
            return <View/>
        }
        if(hasCameraPermission === false){
            return(
                <View>
                    <Text>Does not have access to camera. Go to phone settings to change</Text>
                </View>
            )
        }
        if(img){

            console.log(img)
            return(
                <ImgPreview
                    imgUri={img.uri}
                    onSelectPicture={this.selectPictureHandler.bind(this)}
                    onRejectPicture={this.rejectPictureHandler.bind(this)}
                />
            )
        }
        return(
            <View style={styles.screen}>
                <Camera
                    style={styles.openCamera}
                    type={this.state.type}
                    ref={ref => {this.cameraRef=ref}}
                />

                <View style={styles.buttonArea}>
                    <TouchableOpacity
                        style={styles.takePictureButton}
                        onPress={this.takePicture.bind(this)}
                    >
                        <View style={styles.innerPictureButton}></View>
                    </TouchableOpacity>
                </View>
            </View>
        )

    }
}

CameraScreen.navigationOptions = {
    headerBackTitle: 'Cancel',
    headerTitle: 'Camera'
}

const styles = StyleSheet.create({
    screen: {
        flex: 1
    },
    openCamera: {
        height: '50%',
        width: '100%',
        alignItems: 'center'
    },
    buttonArea: {
        height: '50%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#606060'
    },
    takePictureButton: {
        height: 60,
        width: 60,
        borderRadius: 30,
        backgroundColor: '#ccc',
        justifyContent: 'center',
        alignItems: 'center'
    },
    innerPictureButton: {
        height: 40,
        width: 40,
        borderRadius: 20,
        backgroundColor: 'white'
    }
})

export default CameraScreen; 