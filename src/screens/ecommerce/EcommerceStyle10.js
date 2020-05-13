import React, {useContext, useRef} from 'react';
import {Dimensions, FlatList, Image, Text, View} from "react-native";
import {PageContext} from "../../../App";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import {storageImageUrl} from "../../tools/Helpers";
import HeaderShopping from "../../components/HeaderShopping";
import StarBar from "../../components/StarBar";

const DATA = [
    {id: '1', title: 'Zara Jumpsuit Dress', image: 'ecommerce_10_img_1.jpg', price: '225'},
    {id: '2', title: 'Black Faux Leather', image: 'ecommerce_10_img_2.jpg', price: '225'},
    {id: '3', title: 'Zara Sneakers', image: 'ecommerce_10_img_3.jpg', price: '225'},
    {id: '4', title: 'Velcro Sneakers White', image: 'ecommerce_10_img_4.jpg', price: '225'},
];

const screenWidth = Dimensions.get('window').width;

function EcommerceStyle10() {
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
                <Text style={{color: 'white', paddingVertical: 15, marginLeft: 60}}>Apparel / Women</Text>
            </View>
            <FlatList
                contentContainerStyle={{padding: 5}}
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
    let cardWidth = screenWidth - (cardMargin * 4);

    return (
        <View style={{
            backgroundColor: 'white',
            width: cardWidth,
            margin: cardMargin,
            flexDirection: 'row',
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.3,
            shadowRadius: 3,
            borderRadius: 3,
            elevation: 3,
        }}>
            <View style={{height: 120, width: 120, overflow: 'hidden',}}>
                <Image style={{height: '100%', width: '100%'}}
                       source={{uri: storageImageUrl('ecommerce', data.image)}}/>
            </View>
            <View style={{padding: 15}}>
                <Text style={{fontSize: 17, color: '#263238'}}>{data.title}</Text>
                <Text style={{fontSize: 14, color: '#263238'}}>Dress</Text>
                <StarBar rating={4} size={14} containerStyle={{marginVertical: 6}}/>
                <Text>
                    <Text style={{
                        fontSize: 12,
                        color: '#bdbdbd',
                        textDecorationLine: 'line-through',
                        textDecorationStyle: 'solid'
                    }}>$225</Text>
                    <Text style={{fontSize: 18, fontWeight: 'bold', color: '#ff9800'}}> $125</Text>
                </Text>
            </View>
        </View>
    )
}

export default EcommerceStyle10;