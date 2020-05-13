import React, {useContext, useRef, useState} from 'react';
import {Dimensions, Image, Text, TouchableOpacity, View, ScrollView} from "react-native";
import {PageContext} from "../../../App";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import {storageImageUrl} from "../../tools/Helpers";
import HeaderShopping from "../../components/HeaderShopping";
import MaterialButton from "../../components/MaterialButton";
import SizeSelector from "../../components/SizeSelector";
import PageSwiper from "../../components/PageSwiper";

const screenWidth = (Dimensions.get('window').width);
const pageItemWidth = screenWidth - 60;
const containerHeight = 400;
const pageItemHeight = 370;

function EcommerceStyle13() {
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
            <ScrollView>
                <PageSwiper
                    containerStyle={{height: containerHeight}}
                    data={[{id: '1'}, {id: '2'}, {id: '3'}, {id: '4'}]}
                    itemWidth={pageItemWidth}
                    itemHeight={pageItemHeight}
                    renderItem={(data, isActive, page) => <ImageItem/>}
                />
                <DescriptionItem snackbarRef={snackbarRef}/>
            </ScrollView>
            <View style={{flexDirection: 'row', paddingHorizontal: 10, marginBottom: 10}}>
                <MaterialButton title='Add to Wishlist'
                                style={{flex: 1, marginRight: 5, backgroundColor: 'white'}}
                                buttonPress={() => snackbarRef.current.ShowSnackBarFunction('add to wishlist clicked')}/>
                <ButtonAddToCart onPress={() => snackbarRef.current.ShowSnackBarFunction('add to cart clicked')}/>
            </View>
            <MaterialSnackbar ref={snackbarRef}/>
        </View>
    );
}

function ImageItem() {
    return (
        <View style={{
            width: pageItemWidth,
            height: containerHeight,
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <View style={{
                width: pageItemWidth - 20,
                height: pageItemHeight,
                backgroundColor: 'white',
                alignItems: 'center',
                justifyContent: 'space-around',
                borderRadius: 3,
                elevation: 3,
                shadowOffset: {width: 0, height: 2},
                shadowOpacity: 0.3,
                shadowRadius: 3,
            }}>
                <Image style={{height: '100%', width: '100%', resizeMode: 'cover'}}
                       source={{uri: storageImageUrl('ecommerce', 'ecommerce_13.jpg')}}/>
            </View>
        </View>
    );
}

function DescriptionItem({snackbarRef}) {
    let cardMargin = 10;
    let cardWidth = screenWidth - 20;

    return (
        <View style={{
            width: cardWidth,
            marginHorizontal: cardMargin,
            marginBottom: cardMargin,
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.3,
            shadowRadius: 3,
            borderRadius: 3,
            elevation: 3,
            backgroundColor: 'white'
        }}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 15}}>
                <View>
                    <Text style={{fontSize: 20, fontWeight: 'bold', color: '#263238'}}>Sky Blue Dress</Text>
                    <Text style={{fontSize: 14, color: '#9e9e9e', marginTop: 5}}>Women, Dress, Summer</Text>
                </View>
                <Text style={{fontSize: 20, color: '#ff9800'}}>$225</Text>
            </View>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                borderTopWidth: 1,
                borderTopColor: '#eaeef0',
                borderBottomWidth: 1,
                borderBottomColor: '#eaeef0'
            }}>
                <ButtonSelector title='SIZE' onPress={() => snackbarRef.current.ShowSnackBarFunction('size clicked')}/>
                <View style={{width: 1, height: '100%', backgroundColor: '#eaeef0'}}/>
                <ButtonSelector title='QUANTITY'
                                onPress={() => snackbarRef.current.ShowSnackBarFunction('quantity clicked')}/>
            </View>
            <View style={{padding: 15}}>
                <Text style={{fontSize: 14, fontWeight: 'bold', color: '#263238', marginBottom: 3}}>DESCRIPTION</Text>
                <Text style={{fontSize: 14, color: '#9e9e9e', lineHeight: 22,marginTop: 5}}>Weasel the jeeper
                    goodness inconsiderately spelled
                    so ubiquitous amused knitted and altruistic amiable
                    far much toward.</Text>
            </View>
        </View>
    )
}

function ButtonSelector({title, onPress}) {
    return (
        <TouchableOpacity onPress={onPress} style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 15,
            paddingVertical: 20
        }}>
            <Text style={{fontSize: 14, fontWeight: 'bold', color: '#616161'}}>{title}</Text>
            <Image source={require('../../assets/icon/ic_chevron_right.png')}
                   style={{height: 16, width: 12, tintColor: '#bdbdbd', resizeMode: 'contain'}}/>
        </TouchableOpacity>
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

export default EcommerceStyle13;