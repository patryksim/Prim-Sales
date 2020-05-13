import React, {useContext, useRef} from 'react';
import {Dimensions, Image, ImageBackground, Text, View} from "react-native";
import {PageContext} from "../../../App";
import MaterialButton from "../../components/MaterialButton";
import {storageImageUrl} from "../../tools/Helpers";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import HeaderOneButton from "../../components/HeaderOneButton";

const screenHeight = Dimensions.get('window').height;

function LoginStyle23() {
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);
    return (
        <ImageBackground source={{uri: storageImageUrl('signup_login', 'login_register_23_960.jpg')}}
                         imageStyle={{height: screenHeight * 0.45}}
                         style={{flex: 1, backgroundColor: '#f1f5f7'}}>
            <HeaderOneButton navPress={() => pageContext.pageDispatch({page: 'pop'})} isHome={true}/>
            <View style={{flex: 1, marginTop: (screenHeight * 0.45) - 130}}>
                <View style={{
                    width: 86,
                    height: 86,
                    alignSelf: 'center',
                    marginVertical: 30,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'black',
                    borderRadius: 50,
                }}>
                    <Image source={require('../../assets/icon/ic_diamond.png')}
                           style={{height: 50, width: 50, resizeMode: 'contain'}}/>
                </View>
                <Text style={{fontSize: 20, marginBottom: 10, alignSelf: 'center'}}>Welcome, Guest!</Text>
                <Text style={{fontSize: 14, color: '#9e9e9e', textAlign: 'center'}}>Weasel the jeeper goodness
                    inconsiderately spelled so ubiquitous amused knitted and altruistic amiable far much toward.</Text>
            </View>
            <View style={{margin: 20}}>
                <MaterialButton title='Sign In' style={{height: 50, backgroundColor: '#ff5722'}}
                                buttonPress={() => snackbarRef.current.ShowSnackBarFunction('Sign In clicked')}/>
                <MaterialButton title='Sign Up' style={{height: 50, backgroundColor: 'transparent'}}
                                buttonPress={() => snackbarRef.current.ShowSnackBarFunction('Sign Up clicked')}/>
            </View>
            <MaterialSnackbar ref={snackbarRef}/>
        </ImageBackground>
    );
}

export default LoginStyle23;