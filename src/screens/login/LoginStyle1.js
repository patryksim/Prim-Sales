import React, {useContext, useRef} from 'react';
import {Image, Text, TouchableOpacity, View} from "react-native";
import {PageContext} from "../../../App";
import HeaderThreeButton from "../../components/HeaderThreeButton";
import MaterialButton from "../../components/MaterialButton";
import MaterialInput from "../../components/MaterialInput";
import MaterialSnackbar from "../../components/MaterialSnackbar";

function LoginStyle1() {
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);
    return (
        <View style={{flex: 1, backgroundColor: '#f1f5f7'}}>
            <HeaderThreeButton
                title='Sign Up'
                navPress={() => pageContext.pageDispatch({page: 'pop'})}
                searchPress={() => snackbarRef.current.ShowSnackBarFunction('search clicked')}
                morePress={() => snackbarRef.current.ShowSnackBarFunction('more clicked')}
                bgColor='#ff5722'
            />
            <View style={{flex: 1, justifyContent: 'space-around'}}>
                <View style={{alignSelf: 'center', justifyContent: 'center'}}>
                    <View style={{
                        width: 86,
                        height: 86,
                        marginTop: 20,
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'black',
                        borderRadius: 50,
                    }}>
                        <Image source={require('../../assets/icon/ic_diamond.png')}
                               style={{height: 50, width: 50, resizeMode: 'contain'}}/>
                    </View>
                </View>
                <View style={{marginHorizontal: 10}}>
                    <MaterialInput bgColor='white' placeholder='Fullname'/>
                    <MaterialInput bgColor='white' placeholder='Username'/>
                    <MaterialInput bgColor='white' placeholder='Email' type='email-address'/>
                    <MaterialInput bgColor='white' placeholder='Password' isPassword={true}/>
                    <MaterialInput bgColor='white' placeholder='Confirm Password' isPassword={true}/>
                    <MaterialButton title='Create An Account'
                                    style={{backgroundColor: '#ff5722', marginTop: 25}}
                                    buttonPress={() => snackbarRef.current.ShowSnackBarFunction('create account clicked')}/>
                    <TouchableOpacity style={{
                        flexDirection: 'row',
                        height: 44,
                        marginVertical: 10,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }} onPress={() => snackbarRef.current.ShowSnackBarFunction('login clicked')}>
                        <Text style={{fontSize: 14, textAlign: 'center'}}>
                            <Text>Already have account?</Text>
                            <Text style={{fontWeight: 'bold'}}> Sign In</Text>
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <MaterialSnackbar ref={snackbarRef}/>
        </View>
    );
}

export default LoginStyle1;