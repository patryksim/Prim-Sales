import React, {useContext, useRef} from 'react';
import {Dimensions, FlatList, Image, ImageBackground, Text, View} from "react-native";
import {PageContext} from "../../../App";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import {storageImageUrl} from "../../tools/Helpers";
import HeaderShopping from "../../components/HeaderShopping";
import MaterialButton from "../../components/MaterialButton";
import StarBar from "../../components/StarBar";

const DATA = [
    {id: '1', title: 'Zara Jumpsuit Dress', image: 'ecommerce_8_img_2.jpg', price: '225'},
    {id: '2', title: 'Black Faux Leather', image: 'ecommerce_8_img_3.jpg', price: '225'},
    {id: '3', title: 'Zara Jumpsuit Dress', image: 'ecommerce_8_img_4.jpg', price: '225'},
    {id: '4', title: 'Black Faux Leather', image: 'ecommerce_8_img_5.jpg', price: '225'},
];

const screenWidth = Dimensions.get('window').width;

function EcommerceStyle8() {
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);

    return (
        <View style={{flex: 1, backgroundColor: '#f1f5f7'}}>
            <HeaderShopping
                title='New Arrivals'
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
                <Text style={{fontSize: 14, color: '#616161'}}>Women Dress</Text>
                <Text style={{fontSize: 12, color: '#bdbdbd'}}>24 Items</Text>
            </View>
            <FlatList
                contentContainerStyle={{padding: 5}}
                ListHeaderComponent={() => <CardHeader snackbarRef={snackbarRef}/>}
                numColumns={2}
                data={DATA}
                renderItem={({item}) => <CardItem data={item}/>}
                keyExtractor={item => item.id}
            />
            <MaterialSnackbar ref={snackbarRef}/>
        </View>
    );
}

function CardHeader({snackbarRef}) {

    return (
        <ImageBackground style={{
            width: screenWidth - 20, height: 210,
            margin: 5,
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.3,
            shadowRadius: 3,
            borderRadius: 3,
            elevation: 3,
        }}
                         source={{uri: storageImageUrl('ecommerce', 'ecommerce_8_img_1.jpg')}}>
            <View style={{flex: 1, alignItems: 'flex-end', justifyContent: 'center', padding: 20}}>
                <Text style={{color: '#263238'}}>NEW ARRRIVAL</Text>
                <Text style={{
                    color: '#263238',
                    fontSize: 34,
                    marginTop: 10,
                    marginBottom: 10
                }}>Autumn Dress</Text>
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
                <StarBar rating={4}/>
                <Text style={{fontSize: 12, color: '#ff9800'}}>${data.price}</Text>
            </View>
        </View>
    )
}

export default EcommerceStyle8;