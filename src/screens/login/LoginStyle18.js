import React, {useContext, useRef} from 'react';
import {Image, ImageBackground, Text, TouchableOpacity, View} from "react-native";
import {PageContext} from "../../../App";
import HeaderThreeButton from "../../components/HeaderThreeButton";
import MaterialButton from "../../components/MaterialButton";
import MaterialInput from "../../components/MaterialInput";
import {storageImageUrl} from "../../tools/Helpers";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import MaterialCheckBox from "../../components/MaterialCheckBox";

let margin = 10;

function LoginStyle18() {
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);
    return (
        <View style={{flex: 1, backgroundColor: '#f1f5f7'}}>
            <ImageBackground source={{uri: storageImageUrl('signup_login', 'login_register_18_960.jpg')}}
                             style={{flex: 1, alignItems: 'center'}}>
                <HeaderThreeButton
                    bgColor='#ff5722'
                    isHome={true}
                    navPress={() => pageContext.pageDispatch({page: 'pop'})}
                    searchPress={() => snackbarRef.current.ShowSnackBarFunction("search clicked")}
                    morePress={() => snackbarRef.current.ShowSnackBarFunction("more clicked")}
                />
                <View style={{flex: 1, justifyContent: 'center', paddingTop: 50}}>
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
                <Text style={{fontSize: 24, color: 'white', paddingVertical: 30}}>Welcome Back, Guest!</Text>
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
                <MaterialInput bgColor='#f1f5f7' placeholder='Password' isPassword={true}/>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 20,
                    marginBottom: 0,
                }}>
                    <MaterialCheckBox title='Remember me'/>
                    <TouchableOpacity
                        style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}
                        onPress={() => snackbarRef.current.ShowSnackBarFunction('forgot password clicked')}>
                        <Text style={{fontSize: 14, textAlign: 'center'}}>Forgot Password</Text>
                    </TouchableOpacity>
                </View>
                <MaterialButton title='Sign In' style={{backgroundColor: '#ff5722', marginTop: 25}}
                                buttonPress={() => snackbarRef.current.ShowSnackBarFunction("Sign In clicked")}/>
                <MaterialButton title='Sign In with Facebook'
                                style={{backgroundColor: '#3f569a', marginTop: margin}}
                                buttonPress={() => snackbarRef.current.ShowSnackBarFunction("Sign In with Facebook clicked")}/>
            </View>
            <TouchableOpacity style={{
                flexDirection: 'row',
                marginHorizontal: margin,
                marginTop: 10,
                marginBottom: 20,
                alignItems: 'center',
                justifyContent: 'center',
            }} onPress={() => snackbarRef.current.ShowSnackBarFunction("Sign Up clicked")}>
                <Text style={{fontSize: 14, textAlign: 'center'}}>
                    <Text>Don't have an account?</Text>
                    <Text style={{fontWeight: 'bold'}}> Sign Up</Text>
                </Text>
            </TouchableOpacity>
            <MaterialSnackbar ref={snackbarRef}/>
        </View>
    );
}

export default LoginStyle18;