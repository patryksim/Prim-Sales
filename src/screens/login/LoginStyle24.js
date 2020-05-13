import React, {useContext, useRef} from 'react';
import {Text, View} from "react-native";
import {PageContext} from "../../../App";
import MaterialButton from "../../components/MaterialButton";
import MaterialInput from "../../components/MaterialInput";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import HeaderOneButton from "../../components/HeaderOneButton";

function LoginStyle24() {
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);
    return (
        <View style={{flex: 1, backgroundColor: '#f1f5f7'}}>
            <HeaderOneButton bgColor='#ff5722' navPress={() => pageContext.pageDispatch({page: 'pop'})} title='Forgot Password'/>
            <View style={{margin: 20}}>
                <Text style={{marginTop: 85, fontSize: 20, alignSelf: 'center'}}>Reset your Password</Text>
                <Text style={{fontSize: 14 , color: '#9e9e9e', textAlign: 'center', marginVertical: 10}}>Weasel the jeeper goodness inconsiderately spelled so ubiquitous amused knitted and altruistic amiable far much toward.</Text>
                <View style={{paddingBottom: 100}}>
                    <MaterialInput bgColor='white' placeholder='Email' type='email-address'/>
                    <MaterialButton title='Reset Passsword' style={{backgroundColor: '#ff5722', marginTop: 25}}
                                    buttonPress={() => snackbarRef.current.ShowSnackBarFunction('Reset Password clicked')}/>
                </View>
            </View>
            <MaterialSnackbar ref={snackbarRef}/>
        </View>
    );
}

export default LoginStyle24;