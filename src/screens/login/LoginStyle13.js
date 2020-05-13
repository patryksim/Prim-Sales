import React, {useContext, useRef} from 'react';
import {ImageBackground, Text, TouchableOpacity, View} from "react-native";
import {PageContext} from "../../../App";
import HeaderThreeButton from "../../components/HeaderThreeButton";
import MaterialButton from "../../components/MaterialButton";
import MaterialInput from "../../components/MaterialInput";
import {storageImageUrl} from "../../tools/Helpers";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import MaterialCheckBox from "../../components/MaterialCheckBox";

function LoginStyle13() {
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);
    return (
        <ImageBackground source={{uri: storageImageUrl('signup_login', 'login_register_13_960.jpg')}}  style={{flex: 1, backgroundColor: 'black'}}>
            <HeaderThreeButton
                title='Sign In'
                navPress={() => pageContext.pageDispatch({page: 'pop'})}
                searchPress={() => snackbarRef.current.ShowSnackBarFunction('search clicked')}
                morePress={() => snackbarRef.current.ShowSnackBarFunction('more clicked')}
            />
            <View style={{flex: 1, justifyContent: 'center'}}>
                <View style={{marginHorizontal: 20}}>
                    <MaterialInput theme='dark' borderWidth={1} placeholder='Username'/>
                    <MaterialInput theme='dark' borderWidth={1} placeholder='Password' isPassword={true}/>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginVertical: 20
                    }}>
                        <MaterialCheckBox title='Remember me' color='white'/>
                        <TouchableOpacity
                            style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}
                            onPress={() => snackbarRef.current.ShowSnackBarFunction('forgot password clicked')}>
                            <Text style={{fontSize: 14, textAlign: 'center', color: 'white'}}>Forgot Password</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <MaterialButton title='Sign In' style={{height: 50, backgroundColor: '#ff5722'}}
                            buttonPress={() => snackbarRef.current.ShowSnackBarFunction('Sign In clicked')}/>
            <MaterialSnackbar ref={snackbarRef}/>
        </ImageBackground>
    );
}

export default LoginStyle13;