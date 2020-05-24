import React, {useContext, useRef} from 'react';
import {Dimensions, Image, ScrollView, Text, TouchableOpacity, View} from "react-native";
import {PageContext} from "../../../App";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import {storageImageUrl} from "../../tools/Helpers";
import HeaderShopping from "../../components/HeaderShopping";
import StarBar from "../../components/StarBar";
import FloatingButton from "../../components/FloatingButton";

const screenWidth = (Dimensions.get('window').width);

function EcommerceStyle14() {
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
                <View style={{
                    width: screenWidth,
                    shadowOffset: {width: 0, height: 2},
                    shadowOpacity: 0.3,
                    shadowRadius: 3,
                    borderRadius: 3,
                    elevation: 3,
                    backgroundColor: 'white'
                }}>
                    <Image style={{height: 250, width: screenWidth}}
                           source={{uri: storageImageUrl('ecommerce', 'ecommerce_14.jpg')}}/>
                </View>
                <FloatingButton style={{
                    backgroundColor: 'white',
                    position: 'relative',
                    alignSelf: 'flex-end',
                    marginRight: 25,
                    marginTop: -40
                }}
                                image={require('../../assets/icon/ic_love_white.png')}
                                imageStyle={{tintColor: '#ff9800', width: 20, height: 20}}
                                onPress={() => snackbarRef.current.ShowSnackBarFunction('love clicked')}/>
                <DescriptionItem snackbarRef={snackbarRef}/>
            </ScrollView>
            <ButtonAddToCart onPress={() => snackbarRef.current.ShowSnackBarFunction('add to cart clicked')}/>
            <MaterialSnackbar ref={snackbarRef}/>
        </View>
    );
}

function DescriptionItem({snackbarRef}) {
    return (
        <View>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: 15,
                borderBottomWidth: 1,
                borderBottomColor: '#eaeef0'
            }}>
                <View>
                    <Text style={{fontSize: 20, fontWeight: 'bold', color: '#263238'}}>Velcro White Sneakers</Text>
                    <Text style={{fontSize: 14, color: '#9e9e9e', marginTop: 5}}>Shoes,Sneakers, Summer</Text>
                    <StarBar rating={4} containerStyle={{marginTop: 8}}/>
                </View>
                <Text style={{fontSize: 20, color: '#ff9800'}}>$225</Text>
            </View>
            <View style={{padding: 15}}>
                <Text style={{fontSize: 14, fontWeight: 'bold', color: '#263238', marginBottom: 3}}>DESCRIPTION</Text>
                <Text style={{fontSize: 14, color: '#9e9e9e', lineHeight: 22, marginTop: 5}}>Weasel the jeeper
                    goodness inconsiderately spelled
                    so ubiquitous amused knitted and altruistic amiable
                    far much toward.</Text>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 5}}>
                <ButtonSelector title='SIZE' onPress={() => snackbarRef.current.ShowSnackBarFunction('size clicked')}/>
                <ButtonSelector title='QUANTITY'
                                onPress={() => snackbarRef.current.ShowSnackBarFunction('quantity clicked')}/>
            </View>
        </View>
    )
}

function ButtonSelector({title, onPress}) {
    return (
        <TouchableOpacity onPress={onPress} style={{
            flex: 1,
            flexDirection: 'row',
            margin: 5,
            justifyContent: 'space-between',
            paddingHorizontal: 15,
            paddingVertical: 20,
            backgroundColor: 'white',
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.3,
            shadowRadius: 3,
            borderRadius: 3,
            elevation: 3,
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
            height: 44,
            flexDirection: 'row',
            margin: 10,
            alignItems: 'center',
            justifyContent: 'center',
            elevation: 3,
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.3,
            backgroundColor: '#ff9800',
        }} onPress={onPress}>
            <Image source={require('../../assets/icon/ic_shoppig_cart.png')}
                   style={{height: 36, width: 36, resizeMode: 'contain'}}/>
            <Text style={{color: 'white'}}>Add to Cart - $225</Text>
        </TouchableOpacity>
    );
}

export default EcommerceStyle14;