import React, {useContext, useRef} from 'react';
import {Dimensions, Image, Text, View} from "react-native";
import {PageContext} from "../../../App";
import MaterialButton from "../../components/MaterialButton";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import SwipeBackView from "../../components/SwipeBack";

let margin = 10;
let itemWidthContainer = (Dimensions.get('window').width) - (2 * margin);
let itemWidth = itemWidthContainer - (2 * margin);

function LoginStyle21() {
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);
    return (
        <SwipeBackView style={{flex: 1, backgroundColor: '#f1f5f7'}} onSwipeBack={() => pageContext.pageDispatch({page: 'pop'})}>
            <View style={{flex: 1}}>
                <View style={{
                    flex: 1,
                    margin: margin,
                    paddingHorizontal: margin,
                    paddingBottom: margin,
                    justifyContent: 'flex-end',
                    backgroundColor: 'white',
                    elevation: 3,
                    shadowOffset: {width: 0, height: 2},
                    shadowOpacity: 0.3
                }}>
                    <View style={{
                        width: 86,
                        height: 86,
                        alignSelf: 'center',
                        marginBottom: 60,
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'black',
                        borderRadius: 50,
                    }}>
                        <Image source={require('../../assets/icon/ic_diamond.png')}
                               style={{height: 50, width: 50, resizeMode: 'contain'}}/>
                    </View>
                    <MaterialButton title='Sign In' style={{backgroundColor: '#ff5722'}}
                                    buttonPress={() => snackbarRef.current.ShowSnackBarFunction('Sign In clicked')}/>
                </View>
                <View style={{
                    flex: 1,
                    marginHorizontal: margin,
                    marginBottom: margin,
                    paddingHorizontal: margin,
                    paddingBottom: margin,
                    justifyContent: 'flex-end',
                    backgroundColor: 'white',
                    elevation: 3,
                    shadowOffset: {width: 0, height: 2},
                    shadowOpacity: 0.3
                }}>
                    <View style={{
                        width: 86,
                        height: 86,
                        alignSelf: 'center',
                        marginBottom: 40,
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#eeeeee',
                        borderRadius: 50,
                    }}>
                        <Image source={require('../../assets/icon/ic_account.png')}
                               style={{height: 84, width: 84, resizeMode: 'contain'}}/>
                    </View>
                    <Text style={{fontSize: 14, alignSelf: 'center', marginBottom: 10}}>Don't have an account?</Text>
                    <MaterialButton title='Sign Up' style={{backgroundColor: '#ff5722'}}
                                    buttonPress={() => snackbarRef.current.ShowSnackBarFunction('Sign Up clicked')}/>
                </View>
            </View>
            <MaterialSnackbar ref={snackbarRef}/>
        </SwipeBackView>
    );
}

export default LoginStyle21;