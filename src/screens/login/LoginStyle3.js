import React, {useContext, useRef} from 'react';
import {ImageBackground, Text, TouchableOpacity, View} from "react-native";
import {PageContext} from "../../../App";
import HeaderThreeButton from "../../components/HeaderThreeButton";
import MaterialButton from "../../components/MaterialButton";
import MaterialInput from "../../components/MaterialInput";
import {storageImageUrl} from "../../tools/Helpers";
import MaterialSnackbar from "../../components/MaterialSnackbar";

function LoginStyle3() {
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);
    return (
        <ImageBackground source={{uri: storageImageUrl('signup_login', 'login_register_3_960.jpg')}}  style={{flex: 1, backgroundColor: 'black'}}>
            <HeaderThreeButton
                title='Sign Up'
                navPress={() => pageContext.pageDispatch({page: 'pop'})}
                searchPress={() => snackbarRef.current.ShowSnackBarFunction('search clicked')}
                morePress={() => snackbarRef.current.ShowSnackBarFunction('more clicked')}
            />
            <View style={{flex: 1, justifyContent: 'center'}}>
                <View style={{marginHorizontal: 20}}>
                    <MaterialInput theme='dark' borderWidth={1} placeholder='Fullname'/>
                    <MaterialInput theme='dark' borderWidth={1} placeholder='Username'/>
                    <MaterialInput theme='dark' borderWidth={1} placeholder='Email' type='email-address'/>
                    <MaterialInput theme='dark' borderWidth={1} placeholder='Password' isPassword={true}/>
                    <MaterialInput theme='dark' borderWidth={1} placeholder='Confirm Password' isPassword={true}/>
                    <TouchableOpacity style={{
                        flexDirection: 'row',
                        height: 44,
                        marginTop: 10,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }} onPress={() => snackbarRef.current.ShowSnackBarFunction('login clicked')}>
                        <Text style={{fontSize: 14, textAlign: 'center'}}>
                            <Text style={{color: 'white'}}>Already have account?</Text>
                            <Text style={{fontWeight: 'bold', color: '#ff5722'}}> Sign In</Text>
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <MaterialButton title='Create An Account' style={{height: 50, backgroundColor: '#ff5722'}}
                            buttonPress={() => snackbarRef.current.ShowSnackBarFunction('create account clicked')}/>
            <MaterialSnackbar ref={snackbarRef}/>
        </ImageBackground>
    );
}

export default LoginStyle3;