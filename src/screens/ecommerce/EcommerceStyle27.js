import React, {useContext, useRef} from 'react';
import {Dimensions, Text, View} from "react-native";
import {PageContext} from "../../../App";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import MaterialButton from "../../components/MaterialButton";
import FloatingButton from "../../components/FloatingButton";

const screenWidth = (Dimensions.get('window').width);

function EcommerceStyle27() {
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);

    return (
        <View style={{flex: 1, backgroundColor: '#f1f5f7'}}>
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <FloatingButton size={106} style={{backgroundColor: '#448aff', position: 'relative'}}
                                image={require('../../assets/icon/ic_check.png')}
                                imageStyle={{width: 50, height: 50, tintColor: 'white'}}
                                onPress={() => {
                                }}/>
                <Text style={{fontSize: 20, color: '#263238', marginTop: 30}}>Your Order is Successfull</Text>
                <Text style={{fontSize: 14, color: '#9e9e9e', textAlign: 'center', marginHorizontal: 50, marginTop: 5}}>Your
                    items will be processed as soon as possible.</Text>
            </View>
            <MaterialButton title='OK'
                            style={{
                                width: screenWidth - 20,
                                alignSelf: 'center',
                                height: 50,
                                marginBottom: 10,
                                marginTop: 10,
                                backgroundColor: '#ff9800'
                            }}
                            buttonPress={() => pageContext.pageDispatch({page: 'pop'})}/>
            <MaterialSnackbar ref={snackbarRef}/>
        </View>
    );
}

export default EcommerceStyle27;