import React, {useContext, useRef} from 'react';
import {Image, ImageBackground, Text, TouchableOpacity, View} from "react-native";
import {PageContext} from "../../../App";
import HeaderThreeButton from "../../components/HeaderThreeButton";
import MaterialButton from "../../components/MaterialButton";
import MaterialInput from "../../components/MaterialInput";
import {storageImageUrl} from "../../tools/Helpers";
import MaterialSnackbar from "../../components/MaterialSnackbar";

let margin = 10;

function LoginStyle2() {
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);
    return (
        <ImageBackground source={{uri: storageImageUrl('signup_login', 'login_register_2_960.jpg')}}
                         style={{flex: 1, backgroundColor: 'gray'}}>
            <HeaderThreeButton
                title='Sign Up'
                navPress={() => pageContext.pageDispatch({page: 'pop'})}
                searchPress={() => snackbarRef.current.ShowSnackBarFunction('search clicked')}
                morePress={() => snackbarRef.current.ShowSnackBarFunction('more clicked')}
            />
            <View style={{flex: 1, marginHorizontal: 10, justifyContent: 'flex-end', paddingBottom: margin}}>
                <View style={{padding: margin, backgroundColor: 'white'}}>
                    <View style={{
                        width: 86,
                        height: 86,
                        alignSelf: 'center',
                        marginTop: -60,
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'black',
                        borderRadius: 50,
                    }}>
                        <Image source={require('../../assets/icon/ic_diamond.png')}
                               style={{height: 50, width: 50, resizeMode: 'contain'}}/>
                    </View>
                    <MaterialInput bgColor='#f1f5f7' placeholder='Fullname'/>
                    <MaterialInput bgColor='#f1f5f7' placeholder='Username'/>
                    <MaterialInput bgColor='#f1f5f7' placeholder='Email' type='email-address'/>
                    <MaterialInput bgColor='#f1f5f7' placeholder='Password' isPassword={true}/>
                    <MaterialInput bgColor='#f1f5f7' placeholder='Confirm Password'
                                   isPassword={true}/>
                    <TouchableOpacity style={{
                        flexDirection: 'row',
                        height: 44,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }} onPress={() => snackbarRef.current.ShowSnackBarFunction('login clicked')}>
                        <Text style={{fontSize: 14, textAlign: 'center'}}>
                            <Text>Already have account?</Text>
                            <Text style={{fontWeight: 'bold'}}> Sign In</Text>
                        </Text>
                    </TouchableOpacity>
                </View>
                <MaterialButton title='Create An Account'
                                style={{backgroundColor: '#ff5722', marginTop: margin}}
                                buttonPress={() => snackbarRef.current.ShowSnackBarFunction('create account clicked')}/>
            </View>
            <MaterialSnackbar ref={snackbarRef}/>
        </ImageBackground>
    );
}

export default LoginStyle2;