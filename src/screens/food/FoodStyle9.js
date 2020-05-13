import React, {useContext, useRef} from 'react';
import {Dimensions, FlatList, Image, Text, TouchableOpacity, View} from "react-native";
import {PageContext} from "../../../App";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import {storageImageUrl} from "../../tools/Helpers";
import ParallaxHeader from "../../components/ParallaxHeader";
import StaggeredView from "../../components/StaggeredView";
import ImageAutoHeight from "../../components/ImageAutoHeight";

const screenWidth = Dimensions.get('window').width;

const DATA1 = [
    {id: '1', image: 'food_4_img_1.jpg', title: 'Spirits Musical Behaved on Farther'},
    {id: '2', image: 'food_4_img_2.jpg', title: 'Spirits Musical Behaved on Farther'},
    {id: '3', image: 'food_4_img_1.jpg', title: 'Spirits Musical Behaved on Farther'},
];

const DATA = [
    {id: '1', title: 'Desert', image: 'food_6_img_1.jpg'},
    {id: '2', title: 'Side Dish', image: 'food_6_img_2.jpg'},
    {id: '3', title: 'Snack', image: 'food_6_img_3.jpg'},
    {id: '4', title: 'Cake', image: 'food_6_img_4.jpg'},
    {id: '5', title: 'Dish', image: 'food_6_img_5.jpg'},
    {id: '6', title: 'Salad', image: 'food_6_img_6.jpg'},
];

function FoodStyle9() {
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);

    return (
        <View style={{flex: 1, backgroundColor: 'white'}}>
            <ParallaxHeader
                contentContainerStyle={{width: screenWidth, backgroundColor: 'white'}}
                headerImage={{uri: storageImageUrl('food', 'food_5_img_1.jpg')}}
                headerColor='#cc0001'
                renderHeader={() =>
                    <HeaderFood
                        navPress={() => pageContext.pageDispatch({page: 'pop'})}
                        morePress={() => snackbarRef.current.ShowSnackBarFunction('more clicked')}
                    />
                }
            >
                <View style={{
                    flexDirection: 'row',
                    marginTop: 20,
                    justifyContent: 'space-between',
                    paddingHorizontal: 50,
                    borderBottomColor: 'gray',
                    borderBottomWidth: 0.5,
                    paddingBottom: 20
                }}>
                    <ItemHeader title='Recipes' value='224'/>
                    <View style={{width: 1, height: 46, backgroundColor: '#757575'}}/>
                    <ItemHeader title='Cookbook' value='12'/>
                    <View style={{width: 1, height: 46, backgroundColor: '#757575'}}/>
                    <ItemHeader title='Friends' value='9,247'/>
                </View>
                <ItemData title='My Recipes' data={DATA1}/>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingTop: 20,
                    paddingHorizontal: 20,
                    backgroundColor: 'white',
                }}>
                    <Text style={{fontSize: 14, fontWeight: 'bold', color: '#616161'}}>My Cookooks</Text>
                    <TouchableOpacity>
                        <Text style={{fontSize: 12, color: '#ff3d00'}}>VIEW ALL</Text>
                    </TouchableOpacity>
                </View>
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

function HeaderFood({navPress, morePress}) {

    return (
        <View>
            <View style={{
                height: 56,
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 10,
                elevation: 3,
            }}>
                <TouchableOpacity onPress={navPress} style={{padding: 10}}>
                    <Image source={require('../../assets/icon/ic_chevron_left.png')}
                           style={{height: 18, width: 18, resizeMode: 'contain'}}/>
                </TouchableOpacity>
                <View style={{flex: 1}}/>
                <TouchableOpacity onPress={morePress} style={{padding: 18}}>
                    <Image source={require('../../assets/icon/ic_more.png')}
                           style={{height: 15, width: 12, tintColor: 'white', resizeMode: 'contain'}}/>
                </TouchableOpacity>
            </View>
            <View style={{marginHorizontal: 20, marginTop: 20, alignItems: 'center'}}>
                <Image source={require('../../assets/icon/ic_profile2.png')}
                       style={{width: 84, height: 84, resizeMode: 'contain'}}/>
                <Text style={{fontSize: 16, fontWeight: 'bold', color: 'white', marginTop: 25}}>Michael Adams</Text>
                <Text style={{fontSize: 14, color: 'white', marginTop: 5}}>Food Specialist</Text>
            </View>
        </View>
    );
}

function ItemHeader({title, value}) {
    return (
        <View style={{alignItems: 'center'}}>
            <Text style={{fontSize: 14, color: '#757575'}}>{title}</Text>
            <Text style={{fontSize: 20, color: '#212121'}}>{value}</Text>
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

export default FoodStyle9;