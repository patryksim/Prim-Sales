import React, {useContext, useRef} from 'react';
import {Dimensions, Image, Text, View} from "react-native";
import {PageContext} from "../../../App";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import MaterialButton from "../../components/MaterialButton";
import HeaderOneButton from "../../components/HeaderOneButton";

const screenWidth = (Dimensions.get('window').width);

function EcommerceStyle28() {
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);

    return (
        <View style={{flex: 1, backgroundColor: '#f1f5f7'}}>
            <HeaderOneButton title='Coupon Code' bgColor='#ff9800'
                             navPress={() => pageContext.pageDispatch({page: 'pop'})}/>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{fontSize: 20, color: '#263238', marginTop: 30}}>Use your Coupon Code</Text>
                <Text style={{fontSize: 14, color: '#9e9e9e', textAlign: 'center', marginHorizontal: 50, marginTop: 5}}>Enter
                    your code in promo code to get 50%
                    on products with Promo label.</Text>
            </View>
            <View style={{
                marginTop: 40,
                marginHorizontal: 10,
                backgroundColor: 'white',
                alignItems: 'center',
                padding: 40,
                shadowOffset: {width: 0, height: 2},
                shadowOpacity: 0.3,
                shadowRadius: 3,
                borderRadius: 3,
                elevation: 3,
            }}>
                <Image source={require('../../assets/icon/ic_coupon_.png')}
                       style={{height: 50, width: 50, resizeMode: 'contain'}}/>
                <Text style={{fontSize: 14, color: '#9e9e9e', marginTop: 30}}>Your Coupon Code:</Text>
                <Text style={{fontSize: 24, fontWeight: 'bold', color: '#263238', marginTop: 15}}>KX630ZD</Text>
            </View>
            <MaterialButton title='Use Code'
                            style={{
                                width: screenWidth - 20,
                                alignSelf: 'center',
                                height: 50,
                                marginBottom: 10,
                                marginTop: 10,
                                backgroundColor: '#ff9800'
                            }}
                            buttonPress={() => snackbarRef.current.ShowSnackBarFunction('Use Code clicked')}/>
            <MaterialSnackbar ref={snackbarRef}/>
        </View>
    );
}

export default EcommerceStyle28;