import React, {useContext, useRef} from 'react';
import {Image, ImageBackground, Text, TouchableOpacity, View} from "react-native";
import {PageContext} from "../../../App";
import HeaderOneButton from "../../components/HeaderOneButton";
import MaterialButton from "../../components/MaterialButton";
import MaterialInput from "../../components/MaterialInput";
import {storageImageUrl} from "../../tools/Helpers";
import MaterialSnackbar from "../../components/MaterialSnackbar";

let margin = 10;

function LoginStyle5() {
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);
    return (
        <ImageBackground source={{uri: storageImageUrl('signup_login', 'login_register_2_960.jpg')}} style={{flex: 1, backgroundColor: 'gray'}}>
            <HeaderOneButton navPress={() => pageContext.pageDispatch({page: 'pop'})} />
            <View style={{flex: 1, justifyContent: 'flex-end'}}>
                <View style={{flex: 1, justifyContent: 'center'}}>
                    <View style={{
                        width: 86,
                        height: 86,
                        alignSelf: 'center',
                        marginBottom: 20,
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'black',
                        borderRadius: 50,
                    }}>
                        <Image source={require('../../assets/icon/ic_diamond.png')}
                               style={{height: 50, width: 50, resizeMode: 'contain'}}/>
                    </View>
                </View>
                <View style={{margin: margin, padding: margin, backgroundColor: 'white'}}>
                    <View style={{flexDirection: 'row', marginHorizontal: -margin, marginTop: -margin, marginBottom: 15}}>
                        <TouchableOpacity style={{
                            width: '50%',
                            alignItems: 'center',
                        }}>
                            <Text style={{color: 'black', paddingVertical: 15}}>SIGN UP</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{width: '50%', alignItems: 'center', backgroundColor: '#f1f5f7'}}>
                            <Text style={{color: 'gray', paddingVertical: 15}}>SIGN IN</Text>
                        </TouchableOpacity>
                    </View>
                    <MaterialInput bgColor='#f1f5f7' placeholder='Fullname'/>
                    <MaterialInput bgColor='#f1f5f7' placeholder='Username'/>
                    <MaterialInput bgColor='#f1f5f7' placeholder='Email' type='email-address'/>
                    <MaterialInput bgColor='#f1f5f7' placeholder='Password' isPassword={true}/>
                    <MaterialInput bgColor='#f1f5f7' placeholder='Confirm Password'
                                   isPassword={true}/>
                    <MaterialButton title='Create An Account' style={{backgroundColor: '#ff5722', marginTop: 25}}
                                    buttonPress={() => snackbarRef.current.ShowSnackBarFunction('create account clicked')}/>
                    <MaterialButton title='Sign Up with Facebook'
                                    style={{marginTop: 10, backgroundColor: '#3f569a'}}
                                    buttonPress={() => snackbarRef.current.ShowSnackBarFunction('sign with facebook clicked')}/>
                </View>
            </View>
            <MaterialSnackbar ref={snackbarRef}/>
        </ImageBackground>
    );
}

export default LoginStyle5;