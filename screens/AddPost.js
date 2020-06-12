import React, { useState, useReducer } from 'react';
import { ScrollView, 
        View, 
        Text, 
        StyleSheet, 
        TextInput, 
        TouchableWithoutFeedback, 
        Button, 
        Keyboard } from 'react-native';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import NewPostInput from '../components/FeedPosts/AddPost/NewPostInput';
import AddPostPicture from '../components/FeedPosts/AddPost/AddPostPicture';

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
                            value={newPostState.inputVals.recipeTitle}
                            onChangeText={inputChangeHandler.bind(this, 'recipeTitle')}
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
        // add back button 
        // headerLeft: () => (null)
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