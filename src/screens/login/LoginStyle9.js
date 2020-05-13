import React, {useContext, useRef} from 'react';
import {Image, ImageBackground, Text, TouchableOpacity, View} from "react-native";
import {PageContext} from "../../../App";
import HeaderThreeButton from "../../components/HeaderThreeButton";
import MaterialButton from "../../components/MaterialButton";
import MaterialInput from "../../components/MaterialInput";
import {storageImageUrl} from "../../tools/Helpers";
import MaterialSnackbar from "../../components/MaterialSnackbar";

let margin = 10;

function LoginStyle9() {
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);
    return (
        <View style={{flex: 1, backgroundColor: '#f1f5f7'}}>
            <HeaderThreeButton
                bgColor='#ff5722'
                isHome={true}
                navPress={() => pageContext.pageDispatch({page: 'pop'})}
                searchPress={() => snackbarRef.current.ShowSnackBarFunction("search clicked")}
                morePress={() => snackbarRef.current.ShowSnackBarFunction("more clicked")}
            />
            <ImageBackground source={{uri: storageImageUrl('signup_login', 'login_register_8_960.jpg')}}
                             style={{flex: 1, backgroundColor: '#f1f5f7', alignItems: 'center', paddingBottom: 50}}>
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
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
                <Text style={{fontSize: 24, color: 'white'}}>Welcome, Guest!</Text>
                <TouchableOpacity style={{
                    flexDirection: 'row',
                    marginHorizontal: margin,
                    marginBottom: 10,
                    alignItems: 'center',
                    justifyContent: 'center',
                }} onPress={() => snackbarRef.current.ShowSnackBarFunction("Login clicked")}>
                    <Text style={{fontSize: 14, color: 'white', textAlign: 'center'}}>
                        <Text>Already have account?</Text>
                        <Text style={{fontWeight: 'bold', color: '#ff5722'}}> Sign In</Text>
                    </Text>
                </TouchableOpacity>
            </ImageBackground>
            <View style={{
                marginTop: -40,
                marginHorizontal: margin,
                paddingHorizontal: margin,
                paddingBottom: margin,
                backgroundColor: 'white',
                borderRadius: 3,
                elevation: 3,
                shadowOffset: {width: 0, height: 2},
                shadowOpacity: 0.3,
                shadowRadius: 3
            }}>
                <MaterialInput bgColor='#f1f5f7' placeholder='Username'/>
                <MaterialInput bgColor='#f1f5f7' placeholder='Email' type='email-address'/>
                <MaterialInput bgColor='#f1f5f7' placeholder='Password' isPassword={true}/>
                <MaterialInput bgColor='#f1f5f7' placeholder='Confirm Password'
                               isPassword={true}/>
                <MaterialButton title='Create An Account' style={{backgroundColor: '#ff5722', marginTop: 25}}
                                buttonPress={() => snackbarRef.current.ShowSnackBarFunction("Button Create An Account clicked")}/>
            </View>
            <MaterialButton title='Sign Up with Facebook' style={{
                marginHorizontal: margin * 2,
                marginVertical: 20,
                backgroundColor: '#3f569a'
            }}
                            buttonPress={() => snackbarRef.current.ShowSnackBarFunction("Button Sign Up with Facebook clicked")}/>
            <MaterialSnackbar ref={snackbarRef}/>
        </View>
    );
}

export default LoginStyle9;