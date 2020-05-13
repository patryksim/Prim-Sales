import React, {useContext, useRef, useState} from 'react';
import {Dimensions, Image, Text, TouchableOpacity, View, ScrollView} from "react-native";
import {PageContext} from "../../../App";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import {storageImageUrl} from "../../tools/Helpers";
import HeaderShopping from "../../components/HeaderShopping";
import MaterialButton from "../../components/MaterialButton";
import SizeSelector from "../../components/SizeSelector";

const screenWidth = Dimensions.get('window').width;

function EcommerceStyle11() {
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);

    return (
        <View style={{flex: 1, backgroundColor: '#f1f5f7'}}>
            <HeaderShopping
                title='Ecommerce'
                isHome={false}
                navPress={() => pageContext.pageDispatch({page: 'pop'})}
                cartPress={() => snackbarRef.current.ShowSnackBarFunction('cart clicked')}
                bgColor='#ff9800'
                shadow={false}
            />
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: 20,
                backgroundColor: 'white',
            }}>
                <Text style={{fontSize: 14, fontWeight: 'bold', color: '#263238'}}>Black Faux Leather Dress</Text>
                <Text style={{fontSize: 20, color: '#ff9800'}}>$225</Text>
            </View>
            <ScrollView>
                <MainItem/>
                <SizeSelectorItem/>
            </ScrollView>
            <View style={{flexDirection: 'row', paddingHorizontal: 10, marginBottom: 10}}>
                <MaterialButton title='Add to Wishlist'
                                style={{flex: 1, marginRight: 5, backgroundColor: 'white'}}
                                buttonPress={() => snackbarRef.current.ShowSnackBarFunction('buy now clicked')}/>
                <ButtonAddToCart onPress={() => snackbarRef.current.ShowSnackBarFunction('add to cart clicked')}/>
            </View>
            <MaterialSnackbar ref={snackbarRef}/>
        </View>
    );
}

function MainItem() {
    const [expanded, setExpanded] = useState(true);
    let cardMargin = 10;
    let cardWidth = screenWidth - 20;

    return (
        <View style={{
            width: cardWidth,
            margin: cardMargin,
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.3,
            shadowRadius: 3,
            borderRadius: 3,
            elevation: 3,
            backgroundColor: 'white'
        }}>
            <Image style={{height: 300, width: cardWidth}}
                   source={{uri: storageImageUrl('ecommerce', 'ecommerce_11.jpg')}}/>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: 15,
                borderBottomWidth: 0.5,
                borderBottomColor: '#e0e0e0',
                marginBottom: 10
            }}>
                <Text style={{fontSize: 14, fontWeight: 'bold', color: '#263238', marginBottom: 3}}>DESCRIPTION</Text>
                <TouchableOpacity onPress={() => setExpanded(!expanded)}>
                    <Image source={require('../../assets/icon/ic_chevron_right.png')}
                           style={{
                               height: 12,
                               width: 12,
                               tintColor: '#777777',
                               resizeMode: 'contain',
                               transform: [{rotate: '90deg'}]
                           }}/>
                </TouchableOpacity>
            </View>
            {expanded && (
                <Text style={{fontSize: 14, color: '#9e9e9e', marginHorizontal: 15, marginBottom: 15, lineHeight: 22}}>Weasel the jeeper
                    goodness inconsiderately spelled
                    so ubiquitous amused knitted and altruistic amiable
                    far much toward.</Text>
            )}
        </View>
    )
}

function SizeSelectorItem() {
    return (
        <View style={{
            width: screenWidth - 20,
            marginBottom: 10,
            marginHorizontal: 10,
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.3,
            shadowRadius: 3,
            borderRadius: 3,
            elevation: 3,
            backgroundColor: 'white'
        }}>
            <View style={{padding: 15, borderBottomWidth: 0.5, borderBottomColor: '#e0e0e0', marginBottom: 10}}>
                <Text style={{fontSize: 14, fontWeight: 'bold', color: '#263238', marginBottom: 3}}>SIZE</Text>
            </View>
            <SizeSelector style={{marginTop: 10, marginBottom: 20}}/>
        </View>
    );
}

function ButtonAddToCart({onPress}) {
    return (
        <TouchableOpacity style={{
            flex: 1,
            height: 44,
            flexDirection: 'row',
            marginLeft: 5,
            alignItems: 'center',
            justifyContent: 'center',
            elevation: 3,
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.3,
            backgroundColor: '#ff9800',
        }} onPress={onPress}>
            <Image source={require('../../assets/icon/ic_shoppig_cart.png')}
                   style={{height: 36, width: 36, resizeMode: 'contain'}}/>
            <Text style={{color: 'white'}}>Add to Cart</Text>
        </TouchableOpacity>
    );
}

export default EcommerceStyle11;