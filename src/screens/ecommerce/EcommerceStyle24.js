import React, {useContext, useRef, useState} from 'react';
import {Dimensions, ScrollView, Text, TouchableOpacity, View} from "react-native";
import {PageContext} from "../../../App";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import MaterialButton from "../../components/MaterialButton";
import MaterialInput from "../../components/MaterialInput";
import HeaderTwoButton from "../../components/HeaderTwoButton";

const shippingData = [
    {id: '1', title: 'Classic Delivery (10 days)', price: '$10'},
    {id: '2', title: 'Express Delivery (5 days)', price: '$20'},
    {id: '3', title: 'Premium Delivery (3 days)', price: '$30'},
];

const screenWidth = (Dimensions.get('window').width);

function EcommerceStyle24() {
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);
    const [shipping, setShipping] = useState('1');

    return (
        <View style={{flex: 1, backgroundColor: '#f1f5f7'}}>
            <HeaderTwoButton
                title='Shipping'
                navPress={() => pageContext.pageDispatch({page: 'pop'})}
                morePress={() => snackbarRef.current.ShowSnackBarFunction('more clicked')}
                bgColor='#ff9800'
            />
            <ScrollView>
                <Text style={{fontSize: 12, fontWeight: 'bold', color: '#616161', marginHorizontal: 10, marginTop: 10}}>SHIPPING
                    INFORMATION</Text>
                <View style={{paddingHorizontal: 10}}>
                    <View style={{flexDirection: 'row'}}>
                        <MaterialInput placeholder='Firt Name'
                                       style={{flex: 1, marginRight: 5, backgroundColor: 'white'}}/>
                        <MaterialInput placeholder='Firt Name'
                                       style={{flex: 1, marginLeft: 5, backgroundColor: 'white'}}/>
                    </View>
                    <MaterialInput placeholder='Address Line 1' style={{backgroundColor: 'white'}}/>
                    <MaterialInput placeholder='Address Line 2' style={{backgroundColor: 'white'}}/>
                    <View style={{flexDirection: 'row'}}>
                        <MaterialInput placeholder='City' style={{flex: 1, marginRight: 5, backgroundColor: 'white'}}/>
                        <MaterialInput placeholder='Zip Code'
                                       style={{flex: 1, marginLeft: 5, backgroundColor: 'white'}}/>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <MaterialInput placeholder='State' style={{flex: 1, marginRight: 5, backgroundColor: 'white'}}/>
                        <MaterialInput placeholder='Country'
                                       style={{flex: 1, marginLeft: 5, backgroundColor: 'white'}}/>
                    </View>
                </View>
                <Text style={{fontSize: 12, fontWeight: 'bold', color: '#616161', margin: 10}}>SHIPPING COST</Text>
                <View style={{
                    marginHorizontal: 10,
                    backgroundColor: 'white',
                    shadowOffset: {width: 0, height: 2},
                    shadowOpacity: 0.3,
                    shadowRadius: 3,
                    borderRadius: 3,
                    elevation: 3,
                }}>
                    {shippingData.map((dt) =>
                        <ItemShipping key={dt.id}
                                      data={dt}
                                      selected={shipping === dt.id}
                                      onItemPress={() => setShipping(dt.id)}/>)}
                </View>
                <View style={{
                    marginTop: 10,
                    marginHorizontal: 10,
                    backgroundColor: 'white',
                    shadowOffset: {width: 0, height: 2},
                    shadowOpacity: 0.3,
                    shadowRadius: 3,
                    borderRadius: 3,
                    elevation: 3,
                }}>
                    <ItemResume title='SubTotal' price='$ 225' oldPrice='$250'/>
                    <ItemResume title='Shipping Cost' price='$ 10'/>
                    <ItemResume title='Total Price' price='$ 235'/>
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

function ItemShipping({data, onItemPress, selected}) {
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
            <Text style={{fontSize: 14, color: '#263238', flex: 1, marginLeft: 20}}>{data.title} :</Text>
            <Text style={{fontSize: 14, fontWeight: 'bold', color: '#263238'}}>{data.price}</Text>
        </TouchableOpacity>
    );
}

function ItemResume({title, oldPrice, price}) {
    return (
        <View style={{
            width: '100%',
            flexDirection: 'row',
            padding: 20,
            alignItems: 'flex-end',
            borderTopWidth: 0.5,
            borderTopColor: '#e0e0e0'
        }}>
            <Text style={{fontSize: 14, fontWeight: 'bold', color: '#263238', flex: 1}}>{title} :</Text>
            {oldPrice && (
                <Text style={{
                    fontSize: 12,
                    color: '#bdbdbd',
                    textDecorationLine: 'line-through',
                    textDecorationStyle: 'solid',
                    marginRight: 5,
                }}>{oldPrice}</Text>
            )}
            <Text style={{fontSize: 20, color: '#ff9800'}}>{price}</Text>
        </View>
    );
}

export default EcommerceStyle24;