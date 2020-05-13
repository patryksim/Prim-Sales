import React, {useContext, useRef} from 'react';
import {Image, ImageBackground, Text, TouchableOpacity, View} from "react-native";
import {PageContext} from "../../../App";
import HeaderOneButton from "../../components/HeaderOneButton";
import MaterialButton from "../../components/MaterialButton";
import MaterialInput from "../../components/MaterialInput";
import {storageImageUrl} from "../../tools/Helpers";
import MaterialSnackbar from "../../components/MaterialSnackbar";

function LoginStyle6() {
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);
    return (
        <View style={{flex: 1, backgroundColor: '#f1f5f7'}}>
            <ImageBackground source={{uri: storageImageUrl('signup_login', 'login_register_6_960.jpg')}}
                             style={{flex: 1}}>
                <HeaderOneButton navPress={() => pageContext.pageDispatch({page: 'pop'})}/>
                <View style={{flex: 1, justifyContent: 'flex-end', alignItems: 'center'}}>
                    <View style={{flex: 1, justifyContent: 'center'}}>
                        <View style={{
                            width: 70,
                            height: 70,
                            marginBottom: 20,
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: 'white',
                            borderRadius: 50,
                        }}>
                            <Image source={require('../../assets/icon/ic_camera.png')}
                                   style={{height: 25, width: 25, resizeMode: 'contain'}}/>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <TouchableOpacity style={{width: '50%', alignItems: 'center'}}>
                            <Text style={{fontSize: 20, color: 'white', paddingVertical: 15}}>Sign Up</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{width: '50%', alignItems: 'center'}}>
                            <Text style={{fontSize: 20, color: 'white', paddingVertical: 15}}>Sign In</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
            <View style={{padding: 20}}>
                <MaterialInput bgColor='white' placeholder='Fullname'/>
                <MaterialInput bgColor='white' placeholder='Username'/>
                <MaterialInput bgColor='white' placeholder='Email' type='email-address'/>
                <MaterialInput bgColor='white' placeholder='Password' isPassword={true}/>
                <MaterialInput bgColor='white' placeholder='Confirm Password' isPassword={true}/>
                <MaterialButton title='Create An Account'
                                style={{marginTop: 10, backgroundColor: '#ff5722'}}
                                buttonPress={() => snackbarRef.current.ShowSnackBarFunction('create account clicked')}/>
                <TouchableOpacity style={{
                    flexDirection: 'row',
                    marginTop: 15,
                    alignItems: 'center',
                    justifyContent: 'center',
                }} onPress={() => snackbarRef.current.ShowSnackBarFunction('term of service clicked')}>
                    <Text style={{fontSize: 14, textAlign: 'center'}}>
                        <Text>By clicking Create An Account, you agree to our </Text>
                        <Text style={{fontWeight: 'bold'}}>Term of Services.</Text>
                    </Text>
                </TouchableOpacity>
            </View>
            <MaterialSnackbar ref={snackbarRef}/>
        </View>
    );
}

export default LoginStyle6;