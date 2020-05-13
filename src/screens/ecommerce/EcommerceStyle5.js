import React, {useContext, useRef} from 'react';
import {Dimensions, FlatList, ImageBackground, Text, TouchableOpacity, View} from "react-native";
import {PageContext} from "../../../App";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import {storageImageUrl} from "../../tools/Helpers";
import HeaderShopping from "../../components/HeaderShopping";
import MaterialButton from "../../components/MaterialButton";
import TabHeader from "../../components/TabHeader";

const DATA = [
    {id: '1', category: 'NEW ARRIVAL', preTitle: '',  title: 'Jacket', titlePosition: 'left', image: 'ecommerce_5_img_2.jpg', numItems: '12 items'},
    {id: '2', category: 'BOOTS COLLECTION', preTitle: 'Up To', title: '50% OFF', titlePosition: 'right', image: 'ecommerce_5_img_3.jpg', numItems: '12 items'},
];

const screenWidth = Dimensions.get('window').width;

function EcommerceStyle5() {
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
                ListHeaderComponent={() => <CardHeader snackbarRef={snackbarRef}/>}
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
        <ImageBackground style={{width: screenWidth, height: 210, marginHorizontal: -5, marginTop: -5, marginBottom: 5}}
                         source={{uri: storageImageUrl('ecommerce', 'ecommerce_5_img_1.jpg')}}>
            <View style={{flex: 1, alignItems: 'flex-end', justifyContent: 'center', padding: 20}}>
                <Text style={{color: '#263238'}}>Women Catalog</Text>
                <Text style={{
                    color: '#263238',
                    fontSize: 34,
                    marginTop: 10,
                    marginBottom: 10
                }}>Autumn Look</Text>
                <MaterialButton title='SHOP NOW'
                                style={{width: 140, height: 44, marginTop: 10, backgroundColor: '#ff9800'}}
                                buttonPress={() => snackbarRef.current.ShowSnackBarFunction('Shop now clicked')}/>
            </View>
        </ImageBackground>
    );
}

function CardItem({data}) {
    let cardMargin = 5;
    let cardWidth = screenWidth - (cardMargin * 4);

    return (
        <ImageBackground source={{uri: storageImageUrl('ecommerce', data.image)}}
                         style={{
                             width: cardWidth,
                             height: 200,
                             justifyContent: 'center',
                             alignItems: data.titlePosition === 'right' ? 'flex-end' : 'flex-start',
                             margin: cardMargin,
                             padding: 20,
                             shadowOffset: {width: 0, height: 2},
                             shadowOpacity: 0.3,
                             shadowRadius: 3,
                             borderRadius: 3,
                             elevation: 3,
                         }}>
            <View style={{alignItems: data.titlePosition === 'left' ? 'flex-start' : 'flex-end'}}>
                <Text style={{fontSize: 12, color: '#263238'}}>{data.category}</Text>
                <Text style={{fontSize: 34, color: '#263238', marginTop: 5}}>
                    <Text style={{fontSize: 12}}>{data.preTitle} </Text>
                    <Text>{data.title}</Text>
                </Text>
            </View>
        </ImageBackground>
    )
}

export default EcommerceStyle5;