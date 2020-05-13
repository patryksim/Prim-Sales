import React, {useContext, useRef} from 'react';
import {Image, ImageBackground, Text, TouchableOpacity, View} from "react-native";
import {PageContext} from "../../../App";
import HeaderOneButton from "../../components/HeaderOneButton";
import MaterialButton from "../../components/MaterialButton";
import MaterialInput from "../../components/MaterialInput";
import {storageImageUrl} from "../../tools/Helpers";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import MaterialCheckBox from "../../components/MaterialCheckBox";

let margin = 10;

function LoginStyle15() {
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);
    return (
        <ImageBackground source={{uri: storageImageUrl('signup_login', 'login_register_15_960.jpg')}}
                         style={{flex: 1, backgroundColor: 'gray'}}>
            <HeaderOneButton navPress={() => pageContext.pageDispatch({page: 'pop'})}/>
            <View style={{flex: 1, alignItems: 'center'}}>
                <View style={{flex: 1, justifyContent: 'center', paddingBottom: 30}}>
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
                <View style={{margin: margin, padding: margin, backgroundColor: 'white'}}>
                    <View style={{
                        flexDirection: 'row',
                        marginHorizontal: -margin,
                        marginTop: -margin,
                        marginBottom: 15
                    }}>
                        <TouchableOpacity style={{width: '50%', alignItems: 'center', backgroundColor: '#f1f5f7'}}>
                            <Text style={{color: 'gray', paddingVertical: 15}}>SIGN UP</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            width: '50%',
                            alignItems: 'center',
                        }}>
                            <Text style={{color: 'black', paddingVertical: 15}}>SIGN IN</Text>
                        </TouchableOpacity>
                    </View>
                    <MaterialInput bgColor='#f1f5f7' placeholder='Username'/>
                    <MaterialInput bgColor='#f1f5f7' placeholder='Password' isPassword={true}/>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginTop: margin
                    }}>
                        <MaterialCheckBox title='Remember me'/>
                        <TouchableOpacity
                            style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}
                            onPress={() => snackbarRef.current.ShowSnackBarFunction('forgot password clicked')}>
                            <Text style={{fontSize: 14, textAlign: 'center'}}>Forgot Password</Text>
                        </TouchableOpacity>
                    </View>
                    <MaterialButton title='Sign In' style={{backgroundColor: '#ff5722', marginTop: 25}}
                                    buttonPress={() => snackbarRef.current.ShowSnackBarFunction('Sign In clicked')}/>
                    <MaterialButton title='Sign Up'
                                    style={{marginTop: 10, backgroundColor: 'white'}}
                                    buttonPress={() => snackbarRef.current.ShowSnackBarFunction('sign up clicked')}/>
                    <View style={{
                        height: 1,
                        backgroundColor: '#dddddd',
                        marginTop: 50,
                        marginBottom: 35,
                        marginHorizontal: -(2 * margin)
                    }}/>
                    <View style={{
                        width: 50,
                        height: 50,
                        alignSelf: 'center',
                        alignItems: 'center',
                        marginTop: -62,
                        marginBottom: 10,
                        backgroundColor: 'white',
                        justifyContent: 'center',
                        borderColor: '#dddddd',
                        borderWidth: 1,
                        borderRadius: 25,
                    }}>
                        <Text style={{color: '#dddddd', paddingVertical: 15}}>Or</Text>
                    </View>
                    <MaterialButton title='Sign Up with Facebook'
                                    style={{marginTop: 10, backgroundColor: '#3f569a'}}
                                    buttonPress={() => snackbarRef.current.ShowSnackBarFunction('sign with facebook clicked')}/>
                </View>
            </View>
            <MaterialSnackbar ref={snackbarRef}/>
        </ImageBackground>
    );
}

export default LoginStyle15;