import React, {useContext, useRef} from 'react';
import {Dimensions, FlatList, Image, ImageBackground, Text, View} from "react-native";
import {PageContext} from "../../../App";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import HeaderThreeButton from "../../components/HeaderThreeButton";
import {storageImageUrl} from "../../tools/Helpers";

const DATA = [
    {id: '1', image: 'food_3_img_1.jpg', title: 'Japanese Cuisine Mussels With Lentils'},
    {id: '2', image: 'food_3_img_2.jpg', title: 'French Fries with Chicken Sauce'},
    {id: '3', image: 'food_3_img_3.jpg', title: 'Italian Pasta Manicotti with Canoli and Cheese'},
    {id: '4', image: 'food_3_img_1.jpg', title: 'Japanese Cuisine Mussels With Lentils'},
    {id: '5', image: 'food_3_img_2.jpg', title: 'French Fries with Chicken Sauce'},
];

const screenWidth = Dimensions.get('window').width;

function FoodStyle3 () {
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);

    return (
        <View style={{flex: 1, backgroundColor: '#f1f5f7', alignItems: 'center'}}>
            <HeaderThreeButton
                title='Recipes'
                isHome={true}
                navPress={() => pageContext.pageDispatch({page: 'pop'})}
                searchPress={() => snackbarRef.current.ShowSnackBarFunction('search clicked')}
                morePress={() => snackbarRef.current.ShowSnackBarFunction('more clicked')}
                bgColor='#ff3d00'
            />
            <FlatList
                contentContainerStyle={{}}
                data={DATA}
                renderItem={({item}) => <ItemData data={item}/>}
                keyExtractor={item => item.id}
            />
            <MaterialSnackbar ref={snackbarRef}/>
        </View>
    );
}

function ItemData({data}) {
    return (
        <ImageBackground source={{uri: storageImageUrl('food', data.image)}}
                         style={{
                             width: screenWidth,
                             height: 190,
                             padding: 20,
                             justifyContent: 'flex-end'
                         }}>
            <Text style={{fontSize: 14, color: 'white'}}>Japanese Food Recipe</Text>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white', marginTop: 4}}>{data.title}</Text>
            <View style={{flexDirection: 'row', marginTop: 5, alignItems: 'center'}}>
                <Image source={require('../../assets/icon/ic_history.png')}
                       style={{width: 10, height: 10, resizeMode: 'contain'}}/>
                <Text style={{fontSize: 12, color: 'white', marginLeft: 5}}>15 min</Text>
            </View>
        </ImageBackground>
    );
}

export default FoodStyle3;