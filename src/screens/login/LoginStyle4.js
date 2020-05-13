import React, {useContext, useRef} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from "react-native";
import {PageContext} from "../../../App";
import HeaderThreeButton from "../../components/HeaderThreeButton";
import MaterialButton from "../../components/MaterialButton";
import MaterialInput from "../../components/MaterialInput";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import TabHeader from "../../components/TabHeader";

function LoginStyle4() {
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);

    const onTabChanged = (index) => {

    };

    return (
        <View style={{flex: 1, backgroundColor: '#f1f5f7'}}>
            <HeaderThreeButton
                title='Welcome'
                navPress={() => pageContext.pageDispatch({page: 'pop'})}
                searchPress={() => snackbarRef.current.ShowSnackBarFunction('search clicked')}
                morePress={() => snackbarRef.current.ShowSnackBarFunction('more clicked')}
                bgColor='#ff5722'
                shadow={false}
            />
            <TabHeader titles={['SIGN UP', 'SIGN IN']} onActiveChanged={(i) => onTabChanged(i)}/>
            <ScrollView>
                <View style={{marginHorizontal: 20, paddingTop: 50}}>
                    <MaterialInput bgColor='white' placeholder='Fullname'/>
                    <MaterialInput bgColor='white' placeholder='Username'/>
                    <MaterialInput bgColor='white' placeholder='Email' type='email-address'/>
                    <MaterialInput bgColor='white' placeholder='Password' isPassword={true}/>
                    <MaterialInput bgColor='white' placeholder='Confirm Password' isPassword={true}/>
                    <MaterialButton title='Create An Account' style={{backgroundColor: '#ff5722', marginTop: 25}}
                                    buttonPress={() => snackbarRef.current.ShowSnackBarFunction('create account clicked')}/>
                    <MaterialButton title='Sign Up with Facebook'
                                    style={{marginTop: 10, backgroundColor: '#3f569a'}}
                                    buttonPress={() => snackbarRef.current.ShowSnackBarFunction('sign with facebook clicked')}/>
                    <TouchableOpacity style={{
                        marginTop: 40,
                        marginBottom: 20,
                        paddingHorizontal: 30,
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }} onPress={() => snackbarRef.current.ShowSnackBarFunction('term of service clicked')}>
                        <Text style={{fontSize: 14, textAlign: 'center'}}>
                            <Text>By clicking Create An Account, you agree to our </Text>
                            <Text style={{fontWeight: 'bold'}}>Term of Services.</Text>
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            <MaterialSnackbar ref={snackbarRef}/>
        </View>
    );
}

export default LoginStyle4;