import React, {useContext, useRef} from 'react';
import {Text, TouchableOpacity, View} from "react-native";
import {PageContext} from "../../../App";
import HeaderThreeButton from "../../components/HeaderThreeButton";
import MaterialButton from "../../components/MaterialButton";
import MaterialInput from "../../components/MaterialInput";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import MaterialCheckBox from "../../components/MaterialCheckBox";
import TabHeader from "../../components/TabHeader";

function LoginStyle14() {
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
            <TabHeader titles={['SIGN UP', 'SIGN IN']} activeIndex={1} onActiveChanged={(i) => onTabChanged(i)}/>
            <View style={{flex: 1}}>
                <View style={{flex: 1, marginHorizontal: 20, justifyContent: 'center'}}>
                    <MaterialInput bgColor='white' placeholder='Username'/>
                    <MaterialInput bgColor='white' placeholder='Password' isPassword={true}/>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginVertical: 20
                    }}>
                        <MaterialCheckBox title='Remember me'/>
                        <TouchableOpacity
                            style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}
                            onPress={() => snackbarRef.current.ShowSnackBarFunction('forgot password clicked')}>
                            <Text style={{fontSize: 14, textAlign: 'center'}}>Forgot Password</Text>
                        </TouchableOpacity>
                    </View>
                    <MaterialButton title='Create An Account' style={{backgroundColor: '#ff5722', marginTop: 25}}
                                    buttonPress={() => snackbarRef.current.ShowSnackBarFunction('create account clicked')}/>
                    <MaterialButton title='Sign Up'
                                    style={{marginTop: 10, backgroundColor: 'white'}}
                                    buttonPress={() => snackbarRef.current.ShowSnackBarFunction('sign up clicked')}/>
                </View>
                <MaterialButton title='Sign In with Facebook' style={{
                    margin: 20,
                    backgroundColor: '#3f569a'
                }}
                                buttonPress={() => snackbarRef.current.ShowSnackBarFunction('Sign In with Facebook clicked')}/>
            </View>
            <MaterialSnackbar ref={snackbarRef}/>
        </View>
    );
}

export default LoginStyle14;