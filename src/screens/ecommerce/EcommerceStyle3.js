import React, {useContext, useRef} from 'react';
import {Dimensions, FlatList, Image, ImageBackground, Text, TouchableOpacity, View} from "react-native";
import {PageContext} from "../../../App";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import {storageImageUrl} from "../../tools/Helpers";
import HeaderShopping from "../../components/HeaderShopping";
import MaterialButton from "../../components/MaterialButton";

const DATA = [
    {id: '1', title: 'Sky Blue Dress', image: 'ecommerce_3_img_1.jpg', price: '225'},
    {id: '2', title: 'Sky Blue Dress', image: 'ecommerce_3_img_2.jpg', price: '225'},
    {id: '3', title: 'Zara Jumpsuit Dress', image: 'ecommerce_3_img_3.jpg', price: '225'},
    {id: '4', title: 'Black Faux Leather', image: 'ecommerce_3_img_4.jpg', price: '225'},
    {id: '5', title: 'Sky Blue Dress', image: 'ecommerce_3_img_5.jpg', price: '225'},
    {id: '6', title: 'Sky Blue Dress', image: 'ecommerce_3_img_6.jpg', price: '225'},
];

const screenWidth = Dimensions.get('window').width;

function EcommerceStyle3() {
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
            <View style={{flexDirection: 'row', backgroundColor: '#ff9800'}}>
                <Text style={{color: 'white', paddingVertical: 15, marginLeft: 60}}>Catalog / Women</Text>
            </View>
            <FlatList
                contentContainerStyle={{padding: 5}}
                numColumns={2}
                data={DATA}
                renderItem={({item}) => <CardItem data={item}/>}
                keyExtractor={item => item.id}
            />
            <MaterialSnackbar ref={snackbarRef}/>
        </View>
    );
}

function CardItem({data}) {
    let cardMargin = 5;
    let cardWidth = (screenWidth / 2) - (cardMargin * 3);

    return (
        <View style={{
            backgroundColor: 'white',
            width: cardWidth,
            margin: cardMargin,
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.3,
            shadowRadius: 3,
            borderRadius: 3,
            elevation: 3,
        }}>
            <View style={{height: 190, overflow: 'hidden',}}>
                <Image style={{height: '100%', width: '100%'}}
                       source={{uri: storageImageUrl('ecommerce', data.image)}}/>
            </View>
            <View style={{padding: 10}}>
                <Text style={{fontSize: 14, color: '#263238'}}>{data.title}</Text>
                <Text style={{fontSize: 12, color: '#ff9800', marginTop: 5}}>${data.price}</Text>
            </View>
        </View>
    )
}

export default EcommerceStyle3;