import React, { useState, useReducer } from 'react';
import { ScrollView, 
        View, 
        Text, 
        StyleSheet, 
        TextInput, 
        TouchableWithoutFeedback, 
        Button, 
        Keyboard,
        Platform } from 'react-native';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import axios from 'axios'; 

import NewPostInput from '../components/FeedPosts/AddPost/NewPostInput';
import AddPostPicture from '../components/FeedPosts/AddPost/AddPostPicture';
import ExitButton from '../components/RecipeDetail/ExitButton';

const NEW_POST_UPDATE = 'UPDATE'

const postReducer = (state, action) =>{
    if(action.type === NEW_POST_UPDATE) {
        const updatedVals = {
            ...state.inputVals,
            [action.inputType]: action.value
        };

        return {
            inputVals: updatedVals
        }
    }
    return state;
}

const AddPost = props =>{

    const [newPostState, dispatchPostState] = useReducer(postReducer,{
        inputVals: {
            recipeTitle: '',
            description: '',
            prepTime: null,
            cookTime: null,
            recipeIngredients: '',
            recipeInstructions: ''
        }
    })

    const [imgUri, setImgUri] = useState('');

    const inputChangeHandler = (inputType, text) =>{
        dispatchPostState({
            type: NEW_POST_UPDATE,
            value: text,
            inputType: inputType
        })
    };

    const onSelectPicture = (imgUri) =>{
        setImgUri(imgUri)
    }

    const onOpenCameraHandler = () =>{
        props.navigation.navigate({
            routeName: 'CameraScreen',
            params: {
                onSelectPicture: onSelectPicture.bind(this)
            }
        })
    }

    const onSubmitHandler = () =>{

        const formData = new FormData();
        formData.append('title', newPostState.inputVals.recipeTitle);
        formData.append('description', newPostState.inputVals.description);
        formData.append('prepTime', newPostState.inputVals.prepTime);
        formData.append('cookTime', newPostState.inputVals.cookTime);
        formData.append('ingredients', newPostState.inputVals.recipeIngredients);
        formData.append('instructions', newPostState.inputVals.recipeInstructions);
        const fileName = imgUri.split('/').pop();
        formData.append('image', {
            uri: Platform.OS === 'android' ? imgUri: imgUri.replace('file://', ''),
            name: fileName,
            type: 'image/jpg'
        });

        // console.log(imgUri);

        const postRoute = 'http://localhost:8080/posts/post';

        axios({
            method: 'post',
            url: postRoute,
            data: formData,
            headers: {'Content-Type': 'multipart/form-data'}
        })
            .then(res =>{
                if(res.status !== 200 && res.status !== 201){
                    throw new Error('Creating a post failed')
                }
            })
            .catch(err => console.log(err))

        // const config = {
        //     data: formData,
        //     headers: {
        //         'Content-Type': 'multipart/form-data'
        //     }
        // }

        console.log('submitted!')

        // axios.post(postRoute, config)
        //     .then(res =>{
        //         if(res.status !== 200 && res.status !== 201){
        //             throw new Error('Creating a post failed')
        //         }
        //     })
        //     .catch(err => console.log(err))

        props.navigation.goBack()
    };

    return (
        // <ScrollView>
        //     <KeyboardAvoidingView
        //         behavior='position'
        //         // keyboardVerticalOffset={10}
        //         // style={{alignItems: 'center'}}
        //     >
        <KeyboardAwareScrollView>
            <TouchableWithoutFeedback onPress={()=>{
                Keyboard.dismiss();
            }}>
                <View>
                    <View style={styles.form}>
                        <Text style={styles.label}>
                            Recipe Title:
                        </Text>
                        <TextInput 
                            style={styles.input}
                            value={newPostState.inputVals.recipeTitle}
                            onChangeText={inputChangeHandler.bind(this, 'recipeTitle')}
                        />
                        <Text style={styles.label}>
                            Description:
                        </Text>
                        <TextInput 
                            style={styles.input}
                            value={newPostState.inputVals.description}
                            onChangeText={inputChangeHandler.bind(this, 'description')}
                        />
                        <Text style={styles.label}>
                            Prep Time: 
                        </Text>
                        <TextInput 
                            style={styles.input}
                            value={newPostState.inputVals.prepTime}
                            keyboardType='number-pad'
                            onChangeText={inputChangeHandler.bind(this, 'prepTime')}
                        />
                        <Text style={styles.label}>
                            Cook Time: 
                        </Text>
                        <TextInput 
                            style={styles.input}
                            value={newPostState.inputVals.cookTime}
                            keyboardType='number-pad'
                            onChangeText={inputChangeHandler.bind(this, 'cookTime')}
                        />
                        <Text style={styles.label}>
                            Ingredients: 
                        </Text>
                        <TextInput 
                            style={{...styles.input, ...styles.detailsInput}}
                            value={newPostState.inputVals.recipeIngredients}
                            multiline={true}
                            onChangeText={inputChangeHandler.bind(this, 'recipeIngredients')}
                        />
                        <Text style={styles.label}>
                            Instructions: 
                        </Text>
                        <TextInput 
                            style={{...styles.input, ...styles.detailsInput}}
                            value={newPostState.inputVals.recipeInstructions}
                            multiline={true}
                            onChangeText={inputChangeHandler.bind(this, 'recipeInstructions')}
                        />

                        <Text style={styles.label}>
                            Dish Photos: 
                        </Text>
                        <View style={styles.addImg}>
                            <AddPostPicture 
                                imgUri={imgUri}
                                onOpenCamera={onOpenCameraHandler}
                            />
                        </View>

                    </View>
                    
                    <View style={styles.postButtonArea}>
                        <Button 
                            title='POST!'
                            onPress={onSubmitHandler}
                        />
                    </View>
                    
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAwareScrollView>
        //     </KeyboardAvoidingView>
        // </ScrollView>
        
    )

}

AddPost.navigationOptions = ({ navigation }) =>{
    return {
        headerLeft: () => (null),
        headerRight: () => (
            <HeaderButtons HeaderButtonComponent={ExitButton}>
                <Item 
                    title='Close'
                    iconName='close'
                    onPress={() =>{
                        navigation.goBack()
                    }}
                />
            </HeaderButtons>
        )
    }
}

const styles = StyleSheet.create({
    form: {
      margin: 20,
    },
    label: {
        fontSize: 15,
        // marginBottom: 5
    },
    input: {
        // width: '75%',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        marginBottom: 15,
        paddingVertical: 4,
        // paddingHorizontal: 2
    },
    detailsInput: {
        flex: 1,
        textAlignVertical: 'top',
        height: 150
    },
    addImg: {
        height: 200,
        width: '100%',
        borderColor: '#ccc',
        borderWidth: 1
    },
    postButtonArea: {
        marginBottom: 40,
    }
});

export default AddPost;