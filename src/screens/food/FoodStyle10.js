import React, {useContext, useRef} from 'react';
import {Dimensions, FlatList, Image, Text, TouchableOpacity, View} from "react-native";
import {PageContext} from "../../../App";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import MaterialInput from "../../components/MaterialInput";
import {storageImageUrl} from "../../tools/Helpers";

const DATA = [
    {id: '1', image: 'food_10_img_1.jpg', title: 'Spirits Musical Cheese'},
    {id: '2', image: 'food_10_img_2.jpg', title: 'Cheese Burger'},
    {id: '3', image: 'food_10_img_3.jpg', title: 'Spirits Musical Cheese'},
    {id: '4', image: 'food_10_img_4.jpg', title: 'Cheese Burger'},
    {id: '5', image: 'food_10_img_1.jpg', title: 'Spirits Musical Cheese'},
    {id: '6', image: 'food_10_img_2.jpg', title: 'Cheese Burger'},
];

const screenWidth = Dimensions.get('window').width;

function FoodStyle10() {
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);

    return (
        <View style={{flex: 1, backgroundColor: '#f1f5f7', alignItems: 'center'}}>
            <HeaderFood
                navPress={() => pageContext.pageDispatch({page: 'pop'})}
                searchPress={() => snackbarRef.current.ShowSnackBarFunction('search clicked')}
                bgColor='#ff3d00'
            />
            <Text style={{fontSize: 14, color: '#263238', alignSelf: 'flex-start', margin: 15}}>24 Found "Canoli
                cheese"</Text>
            <FlatList
                contentContainerStyle={{padding: 5}}
                showsHorizontalScrollIndicator={false}
                numColumns={2}
                data={DATA}
                renderItem={({item}) => <ItemData data={item}/>}
                keyExtractor={item => item.id}
            />
            <MaterialSnackbar ref={snackbarRef}/>
        </View>
    );
}

function HeaderFood({navPress, searchPress}) {
    return (
        <View style={{
            width: '100%',
            height: 56,
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 6,
            backgroundColor: '#ff3d00',
        }}>
            <View style={{
                width: '100%',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                backgroundColor: 'white',
                marginRight: 20,
                paddingRight: 15,
            }}>
                <TouchableOpacity onPress={navPress} style={{padding: 10}}>
                    <Image source={require('../../assets/icon/ic_chevron_left.png')}
                           style={{height: 18, width: 18, tintColor: 'gray', resizeMode: 'contain'}}/>
                </TouchableOpacity>
                <MaterialInput style={{flex: 1}} bgColor='transparent' margin={0} placeholder='Search'/>
                <Image source={require('../../assets/icon/ic_search_gray.png')}
                       style={{height: 18, width: 18, resizeMode: 'contain'}}/>
            </View>
        </View>
    );
}

function ItemData({data}) {
    return (
        <View style={{width: (screenWidth / 2) - 5, padding: 5}}>
            <View style={{
                justifyContent: 'space-between',
                borderRadius: 3,
                shadowRadius: 3,
                elevation: 3,
                shadowOffset: {width: 0, height: 2},
                shadowOpacity: 0.3,
                backgroundColor: 'white'
            }}>
                <Image source={{uri: storageImageUrl('food', data.image)}}
                       style={{
                           height: 170,
                           justifyContent: 'flex-end',
                           padding: 10,
                           borderRadius: 3,
                           shadowRadius: 3,
                           shadowOffset: {width: 0, height: 2},
                           shadowOpacity: 0.3,
                           overflow: 'hidden'
                       }}/>
                <View style={{padding: 10}}>
                    <Text style={{fontSize: 14, color: '#263238'}}>{data.title}</Text>
                    <View style={{flexDirection: 'row', marginTop: 5, alignItems: 'center'}}>
                        <Image source={require('../../assets/icon/ic_history.png')}
                               style={{width: 10, height: 10, tintColor: 'gray', resizeMode: 'contain'}}/>
                        <Text style={{fontSize: 12, color: 'black', marginLeft: 5}}>15 min</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

export default FoodStyle10;