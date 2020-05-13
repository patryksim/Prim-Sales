import React, {useContext, useRef} from 'react';
import {Image, Text, TouchableOpacity, View} from "react-native";
import {PageContext} from "../../../App";
import HeaderThreeButton from "../../components/HeaderThreeButton";
import MaterialButton from "../../components/MaterialButton";
import MaterialInput from "../../components/MaterialInput";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import MaterialCheckBox from "../../components/MaterialCheckBox";

let margin = 20;

function LoginStyle11() {
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);
    return (
        <View style={{flex: 1, backgroundColor: '#f1f5f7'}}>
            <HeaderThreeButton
                title='Sign In'
                navPress={() => pageContext.pageDispatch({page: 'pop'})}
                searchPress={() => snackbarRef.current.ShowSnackBarFunction('search clicked')}
                morePress={() => snackbarRef.current.ShowSnackBarFunction('more clicked')}
                bgColor='#ff5722'
            />
            <View style={{flex: 1}}>
                <View style={{flex: 1, marginHorizontal: margin, justifyContent: 'space-around'}}>
                    <View style={{
                        width: 86,
                        height: 86,
                        marginTop: 30,
                        alignSelf: 'center',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'black',
                        borderRadius: 50,
                    }}>
                        <Image source={require('../../assets/icon/ic_diamond.png')}
                               style={{height: 50, width: 50, resizeMode: 'contain'}}/>
                    </View>
                    <View>
                        <MaterialInput bgColor='white' placeholder='Username'/>
                        <MaterialInput bgColor='white' placeholder='Password' isPassword={true}/>
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
                                        buttonPress={() => snackbarRef.current.ShowSnackBarFunction('Sign in clicked')}/>
                        <MaterialButton title='Sign Up' style={{backgroundColor: 'white', marginTop: 15}}
                                        buttonPress={() => snackbarRef.current.ShowSnackBarFunction('Sign Up clicked')}/>
                    </View>
                </View>
                <MaterialButton title='Sign In with Facebook' style={{
                    marginHorizontal: margin,
                    marginBottom: margin,
                    backgroundColor: '#3f569a'
                }}
                                buttonPress={() => snackbarRef.current.ShowSnackBarFunction('Sign In with Facebook clicked')}/>
            </View>
            <MaterialSnackbar ref={snackbarRef}/>
        </View>
    );
}

export default LoginStyle11;