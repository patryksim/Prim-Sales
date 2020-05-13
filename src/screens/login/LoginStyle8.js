import React, {useContext, useRef} from 'react';
import {Image, ImageBackground, Text, TouchableOpacity, View} from "react-native";
import {PageContext} from "../../../App";
import HeaderThreeButton from "../../components/HeaderThreeButton";
import MaterialButton from "../../components/MaterialButton";
import MaterialInput from "../../components/MaterialInput";
import {storageImageUrl} from "../../tools/Helpers";
import MaterialSnackbar from "../../components/MaterialSnackbar";

let margin = 10;

function LoginStyle8() {
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);
    return (
        <View style={{flex: 1, backgroundColor: '#f1f5f7'}}>
            <ImageBackground source={{uri: storageImageUrl('signup_login', 'login_register_8_960.jpg')}}
                             style={{flex: 1}}>
                <HeaderThreeButton
                    bgColor='#ff5722'
                    isHome={true}
                    navPress={() => pageContext.pageDispatch({page: 'pop'})}
                    searchPress={() => snackbarRef.current.ShowSnackBarFunction("search clicked")}
                    morePress={() => snackbarRef.current.ShowSnackBarFunction("more clicked")}
                />
                <View style={{flex: 1, justifyContent: 'space-around', paddingVertical: 30, alignItems: 'center'}}>
                    <View style={{
                        width: 70,
                        height: 70,
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'white',
                        borderRadius: 50,
                    }}>
                        <Image source={require('../../assets/icon/ic_camera.png')}
                               style={{height: 25, width: 25, resizeMode: 'contain'}}/>
                    </View>
                </View>
                <Text style={{fontSize: 24, color: 'white', alignSelf: 'center', marginBottom: 40}}>Welcome, Guest!</Text>
            </ImageBackground>
            <View style={{
                margin: margin,
                paddingHorizontal: margin,
                paddingBottom: margin,
                backgroundColor: 'white',
                elevation: 3,
                shadowOffset: {width: 0, height: 2},
                shadowOpacity: 0.3
            }}>
                <MaterialInput bgColor='#f1f5f7' placeholder='Username'/>
                <MaterialInput bgColor='#f1f5f7' placeholder='Email' type='email-address'/>
                <MaterialInput bgColor='#f1f5f7' placeholder='Password' isPassword={true}/>
                <MaterialInput bgColor='#f1f5f7' placeholder='Confirm Password'
                               isPassword={true}/>
                <MaterialButton title='Create An Account' style={{backgroundColor: '#ff5722', marginTop: 25}}
                                buttonPress={() => snackbarRef.current.ShowSnackBarFunction("Button Create An Account clicked")}/>
            </View>
            <TouchableOpacity style={{
                flexDirection: 'row',
                marginHorizontal: margin,
                marginTop: 10,
                marginBottom: 20,
                alignItems: 'center',
                justifyContent: 'center',
            }} onPress={() => snackbarRef.current.ShowSnackBarFunction("Login clicked")}>
                <Text style={{fontSize: 14, textAlign: 'center'}}>
                    <Text>Already have account?</Text>
                    <Text style={{fontWeight: 'bold'}}> Sign In</Text>
                </Text>
            </TouchableOpacity>
            <MaterialSnackbar ref={snackbarRef}/>
        </View>
    );
}

export default LoginStyle8;