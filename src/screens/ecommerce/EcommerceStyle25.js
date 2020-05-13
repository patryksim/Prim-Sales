import React, {useContext, useRef, useState} from 'react';
import {Dimensions, ScrollView, Text, TouchableOpacity, View, Image} from "react-native";
import {PageContext} from "../../../App";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import MaterialButton from "../../components/MaterialButton";
import MaterialInput from "../../components/MaterialInput";
import HeaderTwoButton from "../../components/HeaderTwoButton";

const paymentData = [
    {id: '1', image: require('../../assets/icon/paypal_logo.png'), detail: 'arno@gmail.com'},
    {id: '2', image: require('../../assets/icon/gogole_wallet_logo.png')},
    {id: '3', image: require('../../assets/icon/visa_logo.png'), detail: '1923 - 6789 - XXXX'},
];

const screenWidth = (Dimensions.get('window').width);

function EcommerceStyle25() {
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);
    const [shipping, setShipping] = useState(1);

    return (
        <View style={{flex: 1, backgroundColor: '#f1f5f7'}}>
            <HeaderTwoButton
                title='Payment'
                navPress={() => pageContext.pageDispatch({page: 'pop'})}
                morePress={() => snackbarRef.current.ShowSnackBarFunction('more clicked')}
                bgColor='#ff9800'
            />
            <ScrollView>
                <Text style={{fontSize: 12, fontWeight: 'bold', color: '#616161', margin: 10}}>CHOOSE PAYMENT METHOD</Text>
                <View style={{
                    marginHorizontal: 10,
                    backgroundColor: 'white',
                    shadowOffset: {width: 0, height: 2},
                    shadowOpacity: 0.3,
                    shadowRadius: 3,
                    borderRadius: 3,
                    elevation: 3,
                }}>
                    {paymentData.map((dt) =>
                        <ItemPayment key={dt.id}
                                      data={dt}
                                      selected={shipping === dt.id}
                                      onItemPress={() => setShipping(dt.id)}/>)}
                </View>
                <Text style={{fontSize: 12, fontWeight: 'bold', color: '#616161', marginHorizontal: 10, marginTop: 10}}>CARD
                    INFORMATION</Text>
                <View style={{paddingHorizontal: 10}}>
                    <MaterialInput placeholder='Full Name' style={{backgroundColor: 'white'}}/>
                </View>
                <Text style={{fontSize: 12, fontWeight: 'bold', color: '#616161', marginHorizontal: 10, marginTop: 10}}>14-Digits Card Number</Text>
                <View style={{paddingHorizontal: 10}}>
                    <View style={{flexDirection: 'row'}}>
                        <MaterialInput placeholder='1928' style={{flex: 1, marginRight: 5, backgroundColor: 'white'}}/>
                        <MaterialInput placeholder='2895' style={{flex: 1, margin: 5, backgroundColor: 'white'}}/>
                        <MaterialInput placeholder='2895' style={{flex: 1, margin: 5, backgroundColor: 'white'}}/>
                        <MaterialInput placeholder='....' style={{flex: 1, marginLeft: 5, backgroundColor: 'white'}}/>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <MaterialInput placeholder='Exp Date' style={{flex: 1, marginRight: 5, backgroundColor: 'white'}}/>
                        <MaterialInput placeholder='CVV'
                                       style={{flex: 1, marginLeft: 5, backgroundColor: 'white'}}/>
                    </View>
                </View>
            </ScrollView>
            <MaterialButton title='Next'
                            style={{
                                width: screenWidth - 20,
                                alignSelf: 'center',
                                height: 50,
                                marginBottom: 10,
                                marginTop: 10,
                                backgroundColor: '#ff9800'
                            }}
                            buttonPress={() => snackbarRef.current.ShowSnackBarFunction('Next clicked')}/>
            <MaterialSnackbar ref={snackbarRef}/>
        </View>
    );
}

function ItemPayment({data, onItemPress, selected}) {
    return (
        <TouchableOpacity onPress={onItemPress} style={{
            width: '100%',
            flexDirection: 'row',
            padding: 20,
            alignItems: 'center',
            borderTopWidth: 0.5,
            borderTopColor: '#e0e0e0'
        }}>
            <View style={{
                width: 16,
                height: 16,
                borderRadius: 8,
                backgroundColor: '#f1f5f7',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                {selected && (
                    <View style={{width: 10, height: 10, borderRadius: 5, backgroundColor: '#ff9800'}}/>
                )}
            </View>
            <View style={{flex: 1}}>
                <Image source={data.image} style={{width: 100, height: 32, marginLeft: 20}}/>
            </View>
            {data.detail !== undefined && (
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={{fontSize: 14, color: '#616161'}}>{data.detail}</Text>
                    <Image source={require('../../assets/icon/ic_chevron_right.png')}
                           style={{height: 16, width: 16, tintColor: '#777777', resizeMode: 'contain', marginLeft: 10}}/>
                </View>
            )}
        </TouchableOpacity>
    );
}

export default EcommerceStyle25;