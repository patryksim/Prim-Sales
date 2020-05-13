import React, {useContext, useRef} from 'react';
import {ImageBackground, Text, TouchableOpacity, View} from "react-native";
import {PageContext} from "../../../App";
import HeaderOneButton from "../../components/HeaderOneButton";
import MaterialButton from "../../components/MaterialButton";
import MaterialInput from "../../components/MaterialInput";
import {storageImageUrl} from "../../tools/Helpers";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import MaterialCheckBox from "../../components/MaterialCheckBox";

function LoginStyle16() {
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);
    return (
        <View style={{flex: 1, backgroundColor: '#f1f5f7'}}>
            <ImageBackground source={{uri: storageImageUrl('signup_login', 'login_register_16_960.jpg')}}
                             style={{flex: 1, justifyContent: 'space-between'}}>
                <HeaderOneButton navPress={() => pageContext.pageDispatch({page: 'pop'})}/>
                <View style={{width: '100%', justifyContent: 'flex-end', alignItems: 'center'}}>
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
            <View style={{marginHorizontal: 20, paddingTop: 40}}>
                <MaterialInput bgColor='white' placeholder='Username'/>
                <MaterialInput bgColor='white' placeholder='Password' isPassword={true}/>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 20,
                    marginBottom: 10,
                }}>
                    <MaterialCheckBox title='Remember me'/>
                    <TouchableOpacity
                        style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}
                        onPress={() => snackbarRef.current.ShowSnackBarFunction('forgot password clicked')}>
                        <Text style={{fontSize: 14, textAlign: 'center'}}>Forgot Password</Text>
                    </TouchableOpacity>
                </View>
                <MaterialButton title='Sign In' style={{marginTop: 10, backgroundColor: '#ff5722'}}
                                buttonPress={() => snackbarRef.current.ShowSnackBarFunction('Sign In clicked')}/>
                <MaterialButton title='Sign Up'
                                style={{marginTop: 10, backgroundColor: 'transparent'}}
                                buttonPress={() => snackbarRef.current.ShowSnackBarFunction('sign up clicked')}/>
            </View>
            <MaterialButton title='Sign In with Facebook' style={{
                margin: 20,
                backgroundColor: '#3f569a'
            }}
                            buttonPress={() => snackbarRef.current.ShowSnackBarFunction('Sign In with Facebook clicked')}/>
            <MaterialSnackbar ref={snackbarRef}/>
        </View>
    );
}

export default LoginStyle16;