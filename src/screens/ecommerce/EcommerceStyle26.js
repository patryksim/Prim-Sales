import React, {useContext, useRef} from 'react';
import {Dimensions, TouchableOpacity, Image, ScrollView, Text, View} from "react-native";
import {PageContext} from "../../../App";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import {storageImageUrl} from "../../tools/Helpers";
import MaterialButton from "../../components/MaterialButton";
import HeaderTwoButton from "../../components/HeaderTwoButton";

const cartItems = [
    {id: '1', image: 'ecommerce_10_img_1.jpg', title: 'Zara Jumpsuit Dress', qty: 1, price: '$ 125'},
    {id: '2', image: 'ecommerce_10_img_2.jpg', title: 'Blue Sky Dress', qty: 2, price: '$ 125'},
];

const screenWidth = (Dimensions.get('window').width);

function EcommerceStyle26() {
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);

    return (
        <View style={{flex: 1, backgroundColor: '#f1f5f7'}}>
            <HeaderTwoButton
                title='Order Confirmation'
                navPress={() => pageContext.pageDispatch({page: 'pop'})}
                morePress={() => snackbarRef.current.ShowSnackBarFunction('more clicked')}
                bgColor='#ff9800'
            />
            <ScrollView>
                <View style={{
                    backgroundColor: 'white',
                    shadowOffset: {width: 0, height: 2},
                    shadowOpacity: 0.3,
                    shadowRadius: 3,
                    borderRadius: 3,
                    elevation: 3,
                }}>
                    {cartItems.map((dt) => <ItemData key={dt.id} data={dt}/>)}
                </View>
                <View style={{
                    margin: 10,
                    backgroundColor: 'white',
                    shadowOffset: {width: 0, height: 2},
                    shadowOpacity: 0.3,
                    shadowRadius: 3,
                    borderRadius: 3,
                    elevation: 3,
                }}>
                    <View style={{flexDirection: 'row', padding: 15, justifyContent: 'space-between'}}>
                        <Text style={{fontSize: 12, fontWeight: 'bold', color: '#616161'}}>SHIPPING ADDRESS</Text>
                        <EditButton onPress={() => snackbarRef.current.ShowSnackBarFunction('edit address clicked')}/>
                    </View>
                    <Text style={{fontSize: 14, color: '#9e9e9e', marginLeft: 15}}>Madelaine Arno</Text>
                    <Text style={{fontSize: 14, color: '#9e9e9e', marginLeft: 15, marginTop: 5}}>6259 Monroe
                        Street</Text>
                    <Text style={{fontSize: 14, color: '#9e9e9e', marginLeft: 15, marginTop: 5, marginBottom: 15}}>Bakersfield,
                        CA 93306</Text>
                    <View style={{width: '100%', height: 0.5, backgroundColor: '#e0e0e0'}}/>
                    <View style={{flexDirection: 'row', padding: 15, justifyContent: 'space-between'}}>
                        <Text style={{fontSize: 12, fontWeight: 'bold', color: '#616161'}}>PAYMENT</Text>
                        <EditButton onPress={() => snackbarRef.current.ShowSnackBarFunction('edit payment clicked')}/>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        paddingHorizontal: 15,
                        paddingBottom: 15,
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}>
                        <Image source={require('../../assets/icon/visa_logo.png')}
                               style={{height: 42, width: 100, resizeMode: 'contain'}}/>
                        <Text style={{fontSize: 14, color: '#616161'}}>1923 - 6789 - XXXX</Text>
                    </View>
                </View>
                <View style={{
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
            <MaterialButton title='Finish Order'
                            style={{
                                width: screenWidth - 20,
                                alignSelf: 'center',
                                height: 50,
                                marginBottom: 10,
                                marginTop: 10,
                                backgroundColor: '#ff9800'
                            }}
                            buttonPress={() => snackbarRef.current.ShowSnackBarFunction('Finish Order')}/>
            <MaterialSnackbar ref={snackbarRef}/>
        </View>
    );
}

function ItemData({data}) {
    return (
        <View style={{
            width: screenWidth,
            flexDirection: 'row',
            backgroundColor: 'white',
            borderTopWidth: 0.5,
            borderTopColor: '#e0e0e0'
        }}>
            <View style={{height: 120, width: 120, overflow: 'hidden',}}>
                <Image style={{height: '100%', width: '100%'}}
                       source={{uri: storageImageUrl('ecommerce', data.image)}}/>
            </View>
            <View style={{flex: 1, padding: 15}}>
                <Text style={{fontSize: 17, color: '#263238'}}>{data.title}</Text>
                <Text style={{fontSize: 14, color: '#616161'}}>Size M</Text>
                <Text style={{fontSize: 14, color: '#616161', marginTop: 5}}>Quantity : {data.qty}</Text>
                <Text style={{fontSize: 17, color: '#ff9800', marginTop: 5}}>{data.price}</Text>
            </View>
        </View>
    );
}

function EditButton({onPress}) {
    return (
        <TouchableOpacity onPress={onPress}>
            <Image source={require('../../assets/icon/ic_edit2.png')}
                   style={{height: 16, width: 16, tintColor: '#757575', resizeMode: 'contain'}}/>
        </TouchableOpacity>

    );
}

function ItemResume({title, oldPrice, price}) {
    return (
        <View style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
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

export default EcommerceStyle26;