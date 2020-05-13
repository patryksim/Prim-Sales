import React, {useContext, useRef} from 'react';
import {ImageBackground, Text, TouchableOpacity, View} from "react-native";
import {PageContext} from "../../../App";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import {storageImageUrl} from "../../tools/Helpers";
import HeaderShopping from "../../components/HeaderShopping";
import StarBar from "../../components/StarBar";
import SizeSelector from "../../components/SizeSelector";

function EcommerceStyle15() {
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);

    return (
        <ImageBackground source={{uri: storageImageUrl('ecommerce', 'ecommerce_15.jpg')}}
                         style={{flex: 1, backgroundColor: '#f1f5f7'}}>
            <HeaderShopping
                title='Ecommerce'
                isHome={false}
                searchAction={true}
                moreAction={true}
                navPress={() => pageContext.pageDispatch({page: 'pop'})}
                searchPress={() => snackbarRef.current.ShowSnackBarFunction('search clicked')}
                cartPress={() => snackbarRef.current.ShowSnackBarFunction('cart clicked')}
                morePress={() => snackbarRef.current.ShowSnackBarFunction('more clicked')}
                bgColor='#ff9800'
                shadow={false}
            />
            <View style={{flex: 1}}/>
            <ComtentItem/>
            <View style={{flexDirection: 'row', alignItems: 'center', backgroundColor: 'white'}}>
                <View style={{flex: 1, alignItems: 'center'}}>
                    <Text style={{fontSize: 20, color: '#757575'}}>$ 225</Text>
                </View>
                <TouchableOpacity onPress={() => snackbarRef.current.ShowSnackBarFunction('add to cart clicked')}
                                  style={{
                                      flex: 2,
                                      backgroundColor: '#ff9800',
                                      alignItems: 'center',
                                      paddingVertical: 15
                                  }}>
                    <Text style={{fontSize: 14, color: 'white'}}>Add to Cart</Text>
                </TouchableOpacity>
            </View>
            <MaterialSnackbar ref={snackbarRef}/>
        </ImageBackground>
    );
}

function ComtentItem() {
    return (
        <View style={{
            marginHorizontal: 10,
            marginBottom: 10,
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.3,
            shadowRadius: 3,
            borderRadius: 3,
            elevation: 3,
            backgroundColor: 'white'
        }}>
            <View style={{padding: 15}}>
                <Text style={{fontSize: 20, color: '#263238'}}>White Stripped Denim Shirt</Text>
                <Text style={{fontSize: 14, color: '#9e9e9e', marginTop: 5}}>Women, Shirt, Summer</Text>
                <StarBar rating={4} containerStyle={{marginTop: 8}}/>
            </View>
            <View style={{
                padding: 15,
                borderTopWidth: 1,
                borderTopColor: '#eaeef0',
                borderBottomWidth: 1,
                borderBottomColor: '#eaeef0'
            }}>
                <Text style={{fontSize: 14, color: '#9e9e9e', lineHeight: 22, marginTop: 5}}>Weasel the jeeper
                    goodness inconsiderately spelled
                    so ubiquitous amused knitted and altruistic amiable
                    far much toward.</Text>
            </View>
            <SizeSelector style={{marginVertical: 20}}/>
        </View>
    )
}

export default EcommerceStyle15;