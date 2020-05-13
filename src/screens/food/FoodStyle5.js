import React, {useContext, useRef} from 'react';
import {Dimensions, FlatList, Image, Text, TouchableOpacity, View} from "react-native";
import {PageContext} from "../../../App";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import {storageImageUrl} from "../../tools/Helpers";
import ParallaxHeader from "../../components/ParallaxHeader";

const screenWidth = Dimensions.get('window').width;

const ingredientsData = [
    {id: '1', item: '2 ounce wheat pasta'},
    {id: '2', item: '1 tablespoon olive oil'},
    {id: '3', item: '3,4 ounce Mozarella Cheese'},
    {id: '4', item: '1/2 ounce Canoli'},
];

const howToCookData = [
    {id: '1', title: 'Prepare', desc: 'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.'},
    {id: '2', title: 'Cooking Direction', desc: 'I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now. When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface.'},
    {id: '3', title: 'Serve', desc: 'When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface.'},
];

const DATA1 = [
    {id: '1', image: 'food_4_img_1.jpg', title: 'Spirits Musical Behaved on Farther'},
    {id: '2', image: 'food_4_img_2.jpg', title: 'Spirits Musical Behaved on Farther'},
    {id: '3', image: 'food_4_img_1.jpg', title: 'Spirits Musical Behaved on Farther'},
];

function FoodStyle5() {
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
                        sharePress={() => snackbarRef.current.ShowSnackBarFunction('share clicked')}
                        favoritePress={() => snackbarRef.current.ShowSnackBarFunction('favorite clicked')}
                        morePress={() => snackbarRef.current.ShowSnackBarFunction('more clicked')}
                    />
                }
            >
                <View style={{padding: 20, borderBottomColor: '#bdbdbd', borderBottomWidth: 0.5}}>
                    <Text style={{fontSize: 16, fontWeight: 'bold',  color: '#263238'}}>Ingredients</Text>
                </View>
                {ingredientsData.map((dt) => <ItemIngredients key={dt.id} text={dt.item} />)}
                <View style={{padding: 20, borderBottomColor: '#bdbdbd', borderBottomWidth: 0.5}}>
                    <Text style={{fontSize: 16, fontWeight: 'bold',  color: '#263238'}}>How to Cook</Text>
                </View>
                {howToCookData.map((dt) => <ItemToCook key={dt.id} data={dt}/>)}
                <ItemData title='You Might Also Like' data={DATA1}/>
            </ParallaxHeader>
            <MaterialSnackbar ref={snackbarRef}/>
        </View>
    );
}

function HeaderFood({navPress, sharePress, favoritePress, morePress}) {

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
                <TouchableOpacity onPress={sharePress} style={{padding: 10}}>
                    <Image source={require('../../assets/icon/ic_share.png')}
                           style={{height: 18, width: 18, tintColor: 'white', resizeMode: 'contain'}}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={favoritePress} style={{padding: 10}}>
                    <Image source={require('../../assets/icon/ic_star.png')}
                           style={{height: 34, width: 34, tintColor: 'white', resizeMode: 'contain'}}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={morePress} style={{padding: 18}}>
                    <Image source={require('../../assets/icon/ic_more.png')}
                           style={{height: 15, width: 12, tintColor: 'white', resizeMode: 'contain'}}/>
                </TouchableOpacity>
            </View>
            <View style={{marginHorizontal: 20, marginTop: 120}}>
                <Text style={{fontSize: 20, color: 'white'}}>Pasta Manicotti with Canoli and Cheese</Text>
                <View style={{flexDirection: 'row', marginTop: 20, justifyContent: 'space-between'}}>
                    <ItemHeader title='Calories' value='450'/>
                    <View style={{width: 1, height: 46, backgroundColor: '#f1f5f7'}}/>
                    <ItemHeader title='Protein.g' value='12,5'/>
                    <View style={{width: 1, height: 46, backgroundColor: '#f1f5f7'}}/>
                    <ItemHeader title='Fat, g' value='9,2'/>
                    <View style={{width: 1, height: 46, backgroundColor: '#f1f5f7'}}/>
                    <ItemHeader title='Carb,g' value='11,7'/>
                </View>
            </View>
        </View>
    );
}

function ItemHeader({title, value}) {
    return (
        <View style={{alignItems: 'center'}}>
            <Text style={{fontSize: 14, color: 'white'}}>{title}</Text>
            <Text style={{fontSize: 20, color: 'white'}}>{value}</Text>
        </View>
    );
}

function ItemIngredients({text}) {
    return (
        <View style={{padding: 20, borderBottomColor: '#bdbdbd', borderBottomWidth: 0.5}}>
            <Text style={{fontSize: 16, color: '#263238'}}>{text}</Text>
        </View>
    );
}

function ItemToCook({data}) {
    return (
        <View style={{padding: 20}}>
            <Text style={{fontSize: 14, fontWeight: 'bold',  color: '#263238'}}>{data.id}.  {data.title}</Text>
            <Text style={{fontSize: 14, color: '#263238', marginLeft: 20, marginTop: 10, lineHeight: 27}}>{data.desc}</Text>
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

export default FoodStyle5;