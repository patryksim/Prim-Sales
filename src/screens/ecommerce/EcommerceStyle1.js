import React, {useContext, useRef} from 'react';
import {Dimensions, FlatList, Image, ImageBackground, Text, TouchableOpacity, View} from "react-native";
import {PageContext} from "../../../App";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import {storageImageUrl} from "../../tools/Helpers";
import HeaderShopping from "../../components/HeaderShopping";
import MaterialButton from "../../components/MaterialButton";
import TabHeader from "../../components/TabHeader";

const DATA = [
    {id: '1', title: 'Sky Blue Dress', image: 'ecommerce_1_img_post_1.jpg', price: '225'},
    {id: '2', title: 'Sky Blue Dress', image: 'ecommerce_1_img_post_2.jpg', price: '225'},
    {id: '3', title: 'Sky Blue Dress', image: 'ecommerce_1_img_post_3.jpg', price: '225'},
    {id: '4', title: 'Sky Blue Dress', image: 'ecommerce_1_img_post_4.jpg', price: '225'},
];

const screenWidth = Dimensions.get('window').width;

function EcommerceStyle1() {
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);

    const onTabChanged = (index) => {

    };

    return (
        <View style={{flex: 1, backgroundColor: '#f1f5f7'}}>
            <HeaderShopping
                title='Ecommerce'
                isHome={true}
                navPress={() => pageContext.pageDispatch({page: 'pop'})}
                cartPress={() => snackbarRef.current.ShowSnackBarFunction('cart clicked')}
                bgColor='#ff9800'
                shadow={false}
            />
            <TabHeader titles={['PROMO', 'WOMEN', 'MEN', 'KIDS']} bgColor='#ff9800' activeIndex={1}
                       onActiveChanged={(i) => onTabChanged(i)}/>
            <FlatList
                contentContainerStyle={{padding: 5}}
                numColumns={2}
                data={DATA}
                ListHeaderComponent={() => <CardHeader snackbarRef={snackbarRef}/>}
                renderItem={({item}) => <CardItem data={item}/>}
                keyExtractor={item => item.id}
            />
            <MaterialSnackbar ref={snackbarRef}/>
        </View>
    );
}

function CardHeader({snackbarRef}) {

    return (
        <ImageBackground style={{width: screenWidth, height: 210, marginHorizontal: -5, marginTop: -5, marginBottom: 5}}
                         source={{uri: storageImageUrl('ecommerce', 'ecommerce_1.jpg')}}>
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.4)'}}>
                <Text style={{fontSize: 12, color: 'white'}}>2020 COLLECTION</Text>
                <Text style={{
                    color: 'white',
                    fontSize: 20,
                    fontWeight: 'bold',
                    letterSpacing: 4,
                    marginTop: 10,
                    marginBottom: 10
                }}>ZARA WOMEN DRESS</Text>
                <MaterialButton title='SHOP NOW'
                                style={{width: 140, height: 44, marginTop: 10, backgroundColor: '#ff9800'}}
                                buttonPress={() => snackbarRef.current.ShowSnackBarFunction('Shop now clicked')}/>
            </View>
        </ImageBackground>
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

export default EcommerceStyle1;