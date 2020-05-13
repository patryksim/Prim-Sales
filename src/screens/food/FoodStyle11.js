import React, {useContext, useRef} from 'react';
import {Dimensions, FlatList, Image, ImageBackground, Text, TouchableOpacity, View} from "react-native";
import {PageContext} from "../../../App";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import {storageImageUrl} from "../../tools/Helpers";
import TabHeader from "../../components/TabHeader";

const DATA = [
    {id: '1', isOpen: true, image: 'food_3_img_1.jpg', title: 'Social Brunch Cafe', distance: '1.25 KM'},
    {id: '2', isOpen: false, image: 'food_3_img_2.jpg', title: 'Fish N Chips .Co', distance: '3.04 KM'},
    {id: '3', isOpen: true, image: 'food_3_img_3.jpg', title: 'Organic Salad', distance: '1.25 KM'},
    {id: '4', isOpen: false, image: 'food_3_img_1.jpg', title: 'Social Brunch Cafe', distance: '3.04 KM'},
    {id: '5', isOpen: false, image: 'food_3_img_2.jpg', title: 'Fish N Chips .Co', distance: '1.25 KM'},
];

const screenWidth = Dimensions.get('window').width;

function FoodStyle11() {
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);

    const onTabChanged = (index) => {

    };

    return (
        <View style={{flex: 1, backgroundColor: '#f1f5f7'}}>
            <HeaderFood
                title='Food App'
                navPress={() => pageContext.pageDispatch({page: 'pop'})}
                cartPress={() => snackbarRef.current.ShowSnackBarFunction('shopping cart clicked')}
            />
            <TabHeader titles={['MAIN COURSE', 'SNACKS', 'DISHES']} bgColor='#ff3d00' activeIndex={0}
                       onActiveChanged={(i) => onTabChanged(i)}/>
            <FlatList
                contentContainerStyle={{padding: 5}}
                data={DATA}
                renderItem={({item}) => <ItemData data={item}/>}
                keyExtractor={item => item.id}
            />
            <MaterialSnackbar ref={snackbarRef}/>
        </View>
    );
}

function HeaderFood ({navPress, title, cartPress}) {

    return (
        <View style={{
            height: 56,
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 10,
            backgroundColor: '#ff3d00',
        }}>
            <TouchableOpacity onPress={navPress} style={{padding: 10}}>
                <Image source={require('../../assets/icon/ic_home.png')} style={{height: 16, width: 18, resizeMode: 'contain'}}/>
            </TouchableOpacity>
            <Text style={{flex: 1, paddingHorizontal: 10, fontSize: 20, color: 'white'}}>{title}</Text>
            <TouchableOpacity onPress={cartPress} style={{padding: 5}}>
                <Image source={require('../../assets/icon/ic_shoppig_cart.png')} style={{height: 36, width: 36, resizeMode: 'contain'}}/>
            </TouchableOpacity>
        </View>
    );
}

function ItemData({data}) {
    let isOpenLabel = data.isOpen ? 'OPEN' : 'CLOSE';
    return (
        <View style={{padding: 5}}>
            <ImageBackground source={{uri: storageImageUrl('food', data.image)}}
                             style={{
                                 width: screenWidth - 20,
                                 height: 190,
                                 padding: 20,
                                 justifyContent: 'flex-end',
                                 overflow: 'hidden',
                                 borderRadius: 3,
                                 shadowRadius: 3,
                                 elevation: 3,
                                 shadowOffset: {width: 0, height: 2},
                                 shadowOpacity: 0.3,
                             }}>
                <Text style={{fontSize: 14, color: 'white'}}>Japanese Food Recipe</Text>
                <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white', marginTop: 4}}>{data.title}</Text>
                <View style={{flexDirection: 'row', marginTop: 5, alignItems: 'center', justifyContent: 'space-between'}}>
                    <View style={{backgroundColor: data.isOpen ? '#00c853' : '#ff3d00', paddingHorizontal: 15, paddingVertical: 4, borderRadius: 15}}>
                        <Text style={{fontSize: 12, fontWeight: 'bold', color: 'white', marginLeft: 5}}>{isOpenLabel}</Text>
                    </View>
                    <Text style={{fontSize: 12, fontWeight: 'bold', color: 'white', marginLeft: 5}}>{data.distance}</Text>
                </View>
            </ImageBackground>
        </View>
    );
}

export default FoodStyle11;