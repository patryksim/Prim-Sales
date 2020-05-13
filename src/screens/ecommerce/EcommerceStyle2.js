import React, {useContext, useRef} from 'react';
import {Dimensions, FlatList, ImageBackground, Text, TouchableOpacity, View} from "react-native";
import {PageContext} from "../../../App";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import {storageImageUrl} from "../../tools/Helpers";
import HeaderShopping from "../../components/HeaderShopping";
import TabHeader from "../../components/TabHeader";

const DATA = [
    {id: '1', title: 'Round Neck Dress', titlePosition: 'right', image: 'ecommerce_2_img_1.jpg', numItems: '12 items'},
    {id: '2', title: 'Retro Printed Dress', titlePosition: 'left', image: 'ecommerce_2_img_2.jpg', numItems: '12 items'},
    {id: '3', title: 'Seamed Plain Dress', titlePosition: 'right', image: 'ecommerce_2_img_3.jpg', numItems: '12 items'},
    {id: '4', title: 'Retro Printed Dress', titlePosition: 'left', image: 'ecommerce_2_img_2.jpg', numItems: '12 items'},
];

const screenWidth = Dimensions.get('window').width;

function EcommerceStyle2() {
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
            <View>
                <Text style={{fontSize: 14, fontWeight: 'bold', color: '#263238'}}>{data.title}</Text>
                <Text style={{fontSize: 12, color: '#263238', marginTop: 10}}>{data.numItems}</Text>
            </View>
        </ImageBackground>
    )
}

export default EcommerceStyle2;