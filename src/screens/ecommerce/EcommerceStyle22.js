import React, {useContext, useRef, useState} from 'react';
import {Dimensions, ScrollView, Image, Text, View, TouchableOpacity} from "react-native";
import {PageContext} from "../../../App";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import HeaderShopping from "../../components/HeaderShopping";
import SwipeMenuRight from "../../components/SwipeMenuRight";
import {storageImageUrl} from "../../tools/Helpers";
import FloatingButton from "../../components/FloatingButton";
import MaterialButton from "../../components/MaterialButton";
import MaterialInput from "../../components/MaterialInput";

const cartItems = [
    {id: '1', image: 'ecommerce_10_img_1.jpg', title: 'Zara Jumpsuit Dress', qty: 2, price: '$ 125'},
    {id: '2', image: 'ecommerce_10_img_2.jpg', title: 'Blue Sky Dress', qty: 1, price: '$ 125'},
];

const screenWidth = (Dimensions.get('window').width);

function EcommerceStyle22() {
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);

    const onPressItemMenu = (item, action) => {
        snackbarRef.current.ShowSnackBarFunction(item.title + ' ' + action)
    };

    return (
        <View style={{flex: 1, backgroundColor: '#f1f5f7'}}>
            <HeaderShopping
                title='Shopping Cart'
                navPress={() => pageContext.pageDispatch({page: 'pop'})}
                cartPress={() => snackbarRef.current.ShowSnackBarFunction('cart clicked')}
                bgColor='#ff9800'
                shadow={false}
                numItems={3}
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
                    {cartItems.map((dt) => <ItemCart key={dt.id} data={dt} onPressItemMenu={onPressItemMenu}/>)}
                </View>
            </ScrollView>
            <View style={{
                backgroundColor: 'white',
                shadowOffset: {width: 0, height: 2},
                shadowOpacity: 0.3,
                shadowRadius: 3,
                borderRadius: 3,
                elevation: 3,
            }}>
                <View style={{
                    width: '100%',
                    flexDirection: 'row',
                    paddingVertical: 10,
                    paddingHorizontal: 20,
                    justifyContent: 'space-between'
                }}>
                    <MaterialInput style={{flex: 1, marginRight: 20}} bgColor='#f1f5f7' margin={0} placeholder='Enter promo code here'/>
                    <FloatingButton size={45} style={{backgroundColor: '#448aff', position: 'relative'}}
                                    image={require('../../assets/icon/ic_check.png')}
                                    imageStyle={{width: 22, height: 22, tintColor: 'white'}}
                                    onPress={() => {
                                    }}/>
                </View>
                <ItemResume title='SubTotal' price='$ 250'/>
                <ItemResume title='Total Price' price='$ 250'/>
            </View>
            <MaterialButton title='Proceed to Checkout'
                            style={{
                                width: screenWidth - 20,
                                alignSelf: 'center',
                                height: 50,
                                marginBottom: 10,
                                marginTop: 10,
                                backgroundColor: '#ff9800'
                            }}
                            buttonPress={() => snackbarRef.current.ShowSnackBarFunction('Apply filter clicked')}/>
            <MaterialSnackbar ref={snackbarRef}/>
        </View>
    );
}

function ItemCart({data, onPressItemMenu}) {
    const itemRef = useRef(null);
    return (
        <View>
            <SwipeMenuRight
                ref={itemRef}
                menuWidth={80}
                style={{backgroundColor: 'transparent', elevation: 10}}
                renderMenuComponent={() => <ItemMenu onPressItemMenu={onPressItemMenu} data={data} itemRef={itemRef}/>}
                renderPage={() => <ItemData data={data}/>}
            />
        </View>
    );
}

function ItemMenu({onPressItemMenu, data, itemRef}) {

    const onPressMenu = (action) => {
        itemRef.current.navigateMenu();
        onPressItemMenu(data, action);
    };

    return (
        <View style={{width: 80, flex: 1, alignItems: 'center', justifyContent: 'space-around', backgroundColor: '#f1f5f7'}}>
            <TouchableOpacity onPress={() => onPressMenu('edit')}>
                <Image source={require('../../assets/icon/ic_edit2.png')}
                       style={{width: 20, height: 20, tintColor: 'gray'}}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onPressMenu('delete')}>
                <Image source={require('../../assets/icon/ic_close.png')}
                       style={{width: 20, height: 20, tintColor: 'gray'}}/>
            </TouchableOpacity>
        </View>
    );
}

function ItemData({data}) {
    const [item, setItem] = useState(data.qty);

    return (
        <View style={{width: screenWidth, flexDirection: 'row', backgroundColor: 'white', borderTopWidth: 0.5, borderTopColor: '#e0e0e0'}}>
            <View style={{height: 120, width: 120, overflow: 'hidden',}}>
                <Image style={{height: '100%', width: '100%'}}
                       source={{uri: storageImageUrl('ecommerce', data.image)}}/>
            </View>
            <View style={{flex: 1, padding: 15}}>
                <Text style={{fontSize: 17, color: '#263238'}}>{data.title}</Text>
                <Text style={{fontSize: 14, color: '#616161'}}>Size M</Text>
                <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
                    <FloatingButton size={34} style={{backgroundColor: '#ff9800', position: 'relative'}}
                                    image={require('../../assets/icon/ic_minus.png')}
                                    imageStyle={{tintColor: 'white', width: 20, height: 20}}
                                    onPress={() => setItem(item - 1)}/>
                    <Text style={{width: 50, textAlign: 'center', fontSize: 14, color: '#bdbdbd'}}>{item}</Text>
                    <FloatingButton size={34} style={{backgroundColor: '#ff9800', position: 'relative'}}
                                    image={require('../../assets/icon/ic_plus.png')}
                                    imageStyle={{tintColor: 'white', width: 20, height: 20}}
                                    onPress={() => setItem(item + 1)}/>

                </View>
                <Text style={{fontSize: 17, color: '#ff9800', position: 'absolute', bottom: 20, right: 15}}>{data.price}</Text>
            </View>
        </View>
    );
}

function ItemResume({title, price}) {
    return (
        <View style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 20,
            alignItems: 'center',
            borderTopWidth: 0.5,
            borderTopColor: '#e0e0e0'
        }}>
            <Text style={{fontSize: 14, fontWeight: 'bold', color: '#263238'}}>{title} :</Text>
            <Text style={{fontSize: 20, color: '#ff9800'}}>{price}</Text>
        </View>
    );
}

export default EcommerceStyle22;