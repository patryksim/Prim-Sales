import React, {useContext, useRef} from 'react';
import {Dimensions, Image, Text, View} from "react-native";
import {PageContext} from "../../../App";
import MaterialButton from "../../components/MaterialButton";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import HeaderOneButton from "../../components/HeaderOneButton";

function LoginStyle22() {
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);
    return (
        <View style={{flex: 1, backgroundColor: '#f1f5f7'}}>
            <HeaderOneButton bgColor='#ff5722' navPress={() => pageContext.pageDispatch({page: 'pop'})} isHome={true}/>
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <View style={{
                    width: 86,
                    height: 86,
                    marginVertical: 30,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'black',
                    borderRadius: 50,
                }}>
                    <Image source={require('../../assets/icon/ic_diamond.png')}
                           style={{height: 50, width: 50, resizeMode: 'contain'}}/>
                </View>
                <Text style={{fontSize: 20, marginBottom: 10}}>Welcome, Guest!</Text>
                <Text style={{fontSize: 14, color: '#9e9e9e', textAlign: 'center'}}>Weasel the jeeper goodness inconsiderately spelled so ubiquitous amused knitted and altruistic amiable far much toward.</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
                <MaterialButton title='Sign Up' style={{width: '50%', height: 50, backgroundColor: 'white'}}
                                buttonPress={() => snackbarRef.current.ShowSnackBarFunction('Sign Up clicked')}/>
                <MaterialButton title='Sign In' style={{width: '50%', height: 50, backgroundColor: '#ff5722'}}
                                buttonPress={() => snackbarRef.current.ShowSnackBarFunction('Sign In clicked')}/>
            </View>
            <MaterialSnackbar ref={snackbarRef}/>
        </View>
    );
}

export default LoginStyle22;