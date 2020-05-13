import React, {useContext, useRef} from 'react';
import {Image, Text, TouchableOpacity, View} from "react-native";
import {PageContext} from "../../../App";
import HeaderThreeButton from "../../components/HeaderThreeButton";
import MaterialButton from "../../components/MaterialButton";
import MaterialInput from "../../components/MaterialInput";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import MaterialCheckBox from "../../components/MaterialCheckBox";
import TabHeader from "../../components/TabHeader";

let margin = 10;

function LoginStyle17() {
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
            <View style={{flex: 1, justifyContent: 'space-around'}}>
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
                <View style={{
                    margin: margin,
                    paddingHorizontal: margin,
                    paddingBottom: margin,
                    backgroundColor: 'white',
                    elevation: 3,
                    shadowOffset: {width: 0, height: 2},
                    shadowOpacity: 0.3
                }}>
                    <MaterialInput bgColor='#f1f5f7' placeholder='Username'/>
                    <MaterialInput bgColor='#f1f5f7' placeholder='Password' isPassword={true}/>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginTop: 20,
                        marginBottom: 40,
                    }}>
                        <MaterialCheckBox title='Remember me'/>
                        <TouchableOpacity
                            style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}
                            onPress={() => snackbarRef.current.ShowSnackBarFunction('forgot password clicked')}>
                            <Text style={{fontSize: 14, textAlign: 'center'}}>Forgot Password</Text>
                        </TouchableOpacity>
                    </View>
                    <MaterialButton title='Sign In' style={{backgroundColor: '#ff5722', marginTop: 25}}
                                    buttonPress={() => snackbarRef.current.ShowSnackBarFunction('Sign In clicked')}/>
                </View>
            </View>
            <MaterialSnackbar ref={snackbarRef}/>
        </View>
    );
}

export default LoginStyle17;