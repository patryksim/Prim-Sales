import React, {useContext, useRef} from 'react';
import {Dimensions, ImageBackground, Text, View} from "react-native";
import HeaderOneButton from "../../components/HeaderOneButton";
import MaterialButton from "../../components/MaterialButton";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import {PageContext} from "../../../App";
import {storageImageUrl} from "../../tools/Helpers";

const containerHeight = (Dimensions.get('window').height) - 310;

function WalkthroughStyle2() {
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);
    return (
        <ImageBackground source={{uri: storageImageUrl('walkthrough', 'walkthrough_2_960.jpg')}}
                         imageStyle={{height: containerHeight}} style={{flex: 1, backgroundColor: '#f1f5f7'}}>
            <HeaderOneButton title='Welcome' titleStyle={{textAlign: 'center', paddingRight: 50}}
                             navPress={() => pageContext.pageDispatch({page: 'pop'})} isHome={true}/>
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'flex-end', paddingBottom: 60}}>
                <Text style={{fontSize: 20, marginBottom: 10}}>Overview</Text>
                <Text style={{fontSize: 14, color: '#9e9e9e', textAlign: 'center', paddingHorizontal: 20}}>Making friends is easy as waving
                    your hand back and forth with ease.</Text>
            </View>
            <View style={{flexDirection: 'row', padding: 10}}>
                <MaterialButton title='SIGN UP' style={{flex: 1, height: 50, backgroundColor: 'white', marginRight: 10}}
                                buttonPress={() => snackbarRef.current.ShowSnackBarFunction('Sign Up clicked')}/>
                <MaterialButton title='SIGN IN' style={{flex: 1, height: 50, backgroundColor: '#e91e63'}}
                                buttonPress={() => snackbarRef.current.ShowSnackBarFunction('Sign In clicked')}/>
            </View>
            <MaterialSnackbar ref={snackbarRef}/>
        </ImageBackground>
    );
}

export default WalkthroughStyle2;