import React, {useContext, useRef} from 'react';
import {Dimensions, Text, TouchableOpacity, View} from "react-native";
import {PageContext} from "../../../App";
import MaterialButton from "../../components/MaterialButton";
import MaterialInput from "../../components/MaterialInput";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import HeaderOneButton from "../../components/HeaderOneButton";

function LoginStyle25() {
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);
    return (
        <View style={{flex: 1, backgroundColor: '#f1f5f7'}}>
            <HeaderOneButton bgColor='#ff5722' navPress={() => pageContext.pageDispatch({page: 'pop'})} title='Verify your Account'/>
            <View style={{margin: 20}}>
                <Text style={{marginTop: 85, fontSize: 20, alignSelf: 'center'}}>Please enter your phone number</Text>
                <Text style={{fontSize: 14 , color: '#9e9e9e', textAlign: 'center', marginVertical: 10}}>Weasel the jeeper goodness inconsiderately spelled so ubiquitous amused knitted and altruistic.</Text>
                <View style={{paddingBottom: 100}}>
                    <View style={{flexDirection: 'row', alignItems: 'center',  backgroundColor: 'white'}}>
                        <TouchableOpacity
                            style={{marginHorizontal: 10}}
                            onPress={() => snackbarRef.current.ShowSnackBarFunction('select area code clicked')}>
                            <Text style={{fontSize: 14, textAlign: 'center'}}>+12</Text>
                        </TouchableOpacity>
                        <MaterialInput margin={0} bgColor='transparent' placeholder='Phone Number' type='phone-pad'/>
                    </View>
                    <MaterialButton title='Verify Phone Number' style={{backgroundColor: '#ff5722', marginTop: 25}}
                                    buttonPress={() => snackbarRef.current.ShowSnackBarFunction('Verify phone number clicked')}/>
                </View>
            </View>
            <MaterialSnackbar ref={snackbarRef}/>
        </View>
    );
}

export default LoginStyle25;