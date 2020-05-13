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

function LoginStyle19() {
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
            <ImageBackground source={{uri: storageImageUrl('signup_login', 'login_register_19_960.jpg')}}
                             style={{flex: 1, backgroundColor: '#f1f5f7', paddingBottom: 50}}>
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', paddingTop: 50}}>
                    <View style={{
                        width: 86,
                        height: 86,
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'black',
                        borderRadius: 50,
                    }}>
                        <Image source={require('../../assets/icon/ic_diamond.png')}
                               style={{height: 50, width: 50, resizeMode: 'contain'}}/>
                    </View>
                </View>
                <Text style={{fontSize: 24, color: 'white', paddingTop: 30, alignSelf: 'center'}}>Welcome, Guest!</Text>
                <TouchableOpacity style={{
                    flexDirection: 'row',
                    marginHorizontal: margin,
                    marginBottom: 20,
                    alignItems: 'center',
                    justifyContent: 'center',
                }} onPress={() => snackbarRef.current.ShowSnackBarFunction("Sign Up clicked")}>
                    <Text style={{fontSize: 14, color: 'white', textAlign: 'center'}}>
                        <Text>Dont have an account?</Text>
                        <Text style={{fontWeight: 'bold', color: '#ff5722'}}> Sign Up</Text>
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
                <MaterialInput bgColor='#f1f5f7' placeholder='Password' isPassword={true}/>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 20,
                    marginBottom: 50,
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
            </View>
            <MaterialButton title='Sign Up with Facebook' style={{
                marginHorizontal: margin * 2,
                marginTop: margin,
                marginBottom: 20,
                backgroundColor: '#3f569a'
            }}
                            buttonPress={() => snackbarRef.current.ShowSnackBarFunction("Button Sign Up with Facebook clicked")}/>
            <MaterialSnackbar ref={snackbarRef}/>
        </View>
    );
}

export default LoginStyle19;