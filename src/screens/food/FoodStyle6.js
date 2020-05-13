import React, {useContext, useRef} from 'react';
import {Dimensions, FlatList, Image, Text, TouchableOpacity, View} from "react-native";
import {PageContext} from "../../../App";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import {storageImageUrl} from "../../tools/Helpers";
import ParallaxHeader from "../../components/ParallaxHeader";
import StaggeredView from "../../components/StaggeredView";
import ImageAutoHeight from "../../components/ImageAutoHeight";
import HeaderThreeButton from "../../components/HeaderThreeButton";

const screenWidth = Dimensions.get('window').width;

const DATA = [
    {id: '1', title: 'Desert', image: 'food_6_img_1.jpg'},
    {id: '2', title: 'Side Dish', image: 'food_6_img_2.jpg'},
    {id: '3', title: 'Snack', image: 'food_6_img_3.jpg'},
    {id: '4', title: 'Cake', image: 'food_6_img_4.jpg'},
    {id: '5', title: 'Dish', image: 'food_6_img_5.jpg'},
    {id: '6', title: 'Salad', image: 'food_6_img_6.jpg'},
];

function FoodStyle6() {
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);

    return (
        <View style={{flex: 1, backgroundColor: 'white'}}>
            <ParallaxHeader
                contentContainerStyle={{width: screenWidth, backgroundColor: 'white'}}
                headerImage={{uri: storageImageUrl('food', 'food_6_header.jpg')}}
                headerColor='#cc0001'
                renderHeader={() =>
                    <HeaderThreeButton
                        title=''
                        isHome={false}
                        navPress={() => pageContext.pageDispatch({page: 'pop'})}
                        searchPress={() => snackbarRef.current.ShowSnackBarFunction('search clicked')}
                        morePress={() => snackbarRef.current.ShowSnackBarFunction('more clicked')}
                        shadow={false}
                    />
                }
                renderFloatingButton={() =>
                    <View style={{width: screenWidth - 40, alignItems: 'center', marginTop: -8}}>
                        <Image source={require('../../assets/icon/ic_profile2.png')}
                               style={{width: 84, height: 84, resizeMode: 'contain'}}/>
                    </View>
                }
            >
                <Text style={{fontSize: 16, color: '#616161', alignSelf: 'center', marginTop: 65}}>Michael Adams</Text>
                <Text style={{fontSize: 14, color: '#757575', alignSelf: 'center', marginTop: 5}}>Food Specialist</Text>
                <StaggeredView
                    containerStyle={{padding: 5, marginTop: 20}}
                    data={DATA}
                    numColumns={2}
                    renderItem={(item, numColumns) => <ItemStaggered data={item} numColumns={numColumns}/>}
                />
            </ParallaxHeader>
            <MaterialSnackbar ref={snackbarRef}/>
        </View>
    );
}

function ItemStaggered({data, numColumns = 1}) {

    return (
        <View>
            <View style={{
                justifyContent: 'space-between',
                margin: 5,
                borderRadius: 3,
                shadowRadius: 3,
                elevation: 3,
                shadowOffset: {width: 0, height: 2},
                shadowOpacity: 0.3,
                backgroundColor: 'white'
            }}>
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 10}}>
                    <Text style={{fontSize: 14, marginLeft: 5, color: '#616161'}}>{data.title}</Text>
                    <Image source={require('../../assets/icon/ic_more.png')}
                           style={{width: 15, height: 12, resizeMode: 'contain', tintColor: 'gray'}}/>
                </View>
                <ImageAutoHeight source={{uri: storageImageUrl('food', data.image)}} imageWidth={(screenWidth / numColumns) - 15}/>
            </View>
        </View>
    );
}

export default FoodStyle6;