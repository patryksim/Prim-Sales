import React, {useContext, useRef} from 'react';
import {Dimensions, FlatList, Image, ImageBackground, ScrollView, Text, TouchableOpacity, View} from "react-native";
import {PageContext} from "../../../App";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import HeaderThreeButton from "../../components/HeaderThreeButton";
import {storageImageUrl} from "../../tools/Helpers";

const DATA1 = [
    {id: '1', image: 'food_4_img_1.jpg', title: 'Spirits Musical Behaved on Farther'},
    {id: '2', image: 'food_4_img_2.jpg', title: 'Spirits Musical Behaved on Farther'},
    {id: '3', image: 'food_4_img_1.jpg', title: 'Spirits Musical Behaved on Farther'},
];

const DATA2 = [
    {id: '1', image: 'food_4_img_3.jpg', title: 'Spirits Musical Behaved on Farther'},
    {id: '2', image: 'food_4_img_4.jpg', title: 'Spirits Musical Behaved on Farther'},
    {id: '3', image: 'food_4_img_3.jpg', title: 'Spirits Musical Behaved on Farther'},
];

const screenWidth = Dimensions.get('window').width;

function FoodStyle4() {
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);

    return (
        <View style={{flex: 1, backgroundColor: '#f1f5f7', alignItems: 'center'}}>
            <HeaderThreeButton
                title='Trending Recipes'
                isHome={true}
                navPress={() => pageContext.pageDispatch({page: 'pop'})}
                searchPress={() => snackbarRef.current.ShowSnackBarFunction('search clicked')}
                morePress={() => snackbarRef.current.ShowSnackBarFunction('more clicked')}
                bgColor='#ff3d00'
            />
            <ScrollView>
                <ImageBackground source={{uri: storageImageUrl('food', 'food_4_header.jpg')}}
                                 style={{
                                     width: screenWidth,
                                     height: 190,
                                     alignItems: 'center',
                                     justifyContent: 'center',
                                     paddingHorizontal: 50
                                 }}>
                    <Text style={{
                        fontSize: 20,
                        fontWeight: 'bold',
                        marginTop: 20,
                        color: 'white',
                        textAlign: 'center'
                    }}>Find The Most Trending Recipes in 2017</Text>
                    <Text style={{fontSize: 14, marginTop: 10, color: 'white', textAlign: 'center'}}>Lorem ipsum dolor
                        sit amet, consectetur adipiscing elit, sed do eiusmod.</Text>
                </ImageBackground>
                <ItemData title='My Recipes' data={DATA1}/>
                <ItemData title='Favorite Recipes' data={DATA2}/>
            </ScrollView>
            <MaterialSnackbar ref={snackbarRef}/>
        </View>
    );
}

function ItemData({title, data}) {
    return (
        <>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: 20,
                backgroundColor: 'white',
            }}>
                <Text style={{fontSize: 14, fontWeight: 'bold', color: '#616161'}}>{title}</Text>
                <TouchableOpacity>
                    <Text style={{fontSize: 12, color: '#ff3d00'}}>VIEW ALL</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                contentContainerStyle={{padding: 5}}
                horizontal
                showsHorizontalScrollIndicator={false}
                data={data}
                renderItem={({item}) => <ItemImage data={item}/>}
                keyExtractor={item => item.id}
            />
        </>
    );
}

function ItemImage({data}) {
    return (
        <View style={{padding: 5}}>
            <View style={{
                width: 160,
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
                    <View style={{flexDirection: 'row', marginTop: 10, alignItems: 'center'}}>
                        <Image source={require('../../assets/icon/ic_history.png')}
                               style={{width: 10, height: 10, tintColor: 'gray', resizeMode: 'contain'}}/>
                        <Text style={{fontSize: 12, color: 'black', marginLeft: 5}}>15 min</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

export default FoodStyle4;