import React, {useContext, useRef} from 'react';
import {Dimensions, Image, ScrollView, Text, TouchableOpacity, View} from "react-native";
import {PageContext} from "../../../App";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import {storageImageUrl} from "../../tools/Helpers";

const screenWidth = Dimensions.get('window').width;

const ingredientsData = [
    {id: '1', item: '2 ounce wheat pasta'},
    {id: '2', item: '1 tablespoon olive oil'},
    {id: '3', item: '3,4 ounce Mozarella Cheese'},
    {id: '4', item: '1/2 ounce Canoli'},
];

const howToCookData = 'I should be incapable of drawing a single stroke at the present moment and yet I feel that I never was a greater artist than now. When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface.';

const commentData = [
    {id: '1', user: 'Christina', avatar: require('../../assets/icon/ic_profile3.png'), datetime: '1 hour'},
    {id: '2', user: 'Ludwig Beethoven', avatar: require('../../assets/icon/ic_profile2.png'), datetime: '3 hour'},
    {id: '3', user: 'Remi Boucher', avatar: require('../../assets/icon/ic_profile4.png'), datetime: '3 hour'},
];

function FoodStyle7() {
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);

    return (
        <View style={{flex: 1, backgroundColor: 'white'}}>
            <HeaderFood
                navPress={() => pageContext.pageDispatch({page: 'pop'})}
                sharePress={() => snackbarRef.current.ShowSnackBarFunction('share clicked')}
                morePress={() => snackbarRef.current.ShowSnackBarFunction('more clicked')}
                bgColor='#ff3d00'
            />
            <ScrollView>
                <Image source={{uri: storageImageUrl('food', 'food_7_header.jpg')}}
                       style={{ width: screenWidth, height: 230}}/>
                <View style={{
                    padding: 20,
                    borderBottomColor: '#bdbdbd',
                    borderBottomWidth: 0.5
                }}>
                    <Text style={{fontSize: 22, color: '#212121'}}>Pasta Manicotti with Canoli and
                        Cheese</Text>
                    <View style={{flexDirection: 'row', marginTop: 15, alignItems: 'center'}}>
                        <Text style={{fontSize: 14, color: '#757575', marginRight: 50}}>Michael Adams</Text>
                        <Image source={require('../../assets/icon/ic_history.png')}
                               style={{width: 10, height: 10, resizeMode: 'contain'}}/>
                        <Text style={{fontSize: 14, color: '#757575', marginLeft: 5}}>15 min</Text>
                    </View>
                </View>
                <View style={{
                    padding: 20,
                    borderBottomColor: '#bdbdbd',
                    borderBottomWidth: 0.5
                }}>
                    <Text style={{fontSize: 16, fontWeight: 'bold', color: '#263238', marginBottom: 10}}>Nutrition
                        Facts</Text>
                    <View style={{flexDirection: 'row', marginVertical: 20, justifyContent: 'space-between'}}>
                        <ItemHeader title='Calories' value='450'/>
                        <View style={{width: 1, height: 46, backgroundColor: '#757575'}}/>
                        <ItemHeader title='Protein.g' value='12,5'/>
                        <View style={{width: 1, height: 46, backgroundColor: '#757575'}}/>
                        <ItemHeader title='Fat, g' value='9,2'/>
                        <View style={{width: 1, height: 46, backgroundColor: '#757575'}}/>
                        <ItemHeader title='Carb,g' value='11,7'/>
                    </View>
                </View>
                <View style={{padding: 20, borderBottomColor: '#bdbdbd', borderBottomWidth: 0.5}}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 'bold',
                        color: '#263238',
                        marginBottom: 10
                    }}>Ingredients</Text>
                    {ingredientsData.map((dt) => <ItemIngredients key={dt.id} text={dt.item}/>)}
                </View>
                <View style={{padding: 20, borderBottomColor: '#bdbdbd', borderBottomWidth: 0.5}}>
                    <Text style={{fontSize: 16, fontWeight: 'bold', color: '#263238'}}>How to Cook</Text>
                    <Text style={{fontSize: 14, color: '#263238', marginTop: 10, lineHeight: 27}}>{howToCookData}</Text>
                </View>
                <View style={{padding: 20}}>
                    <Text style={{fontSize: 16, fontWeight: 'bold', color: '#263238'}}>Comments (3)</Text>
                    {commentData.map((dt) => <CommentItem key={dt.id} data={dt}/>)}
                </View>
            </ScrollView>
            <MaterialSnackbar ref={snackbarRef}/>
        </View>
    );
}

function HeaderFood({navPress, sharePress, morePress}) {

    return (
        <View>
            <View style={{
                height: 56,
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 10,
                backgroundColor: '#ff3d00',
                elevation: 3,
            }}>
                <TouchableOpacity onPress={navPress} style={{padding: 10}}>
                    <Image source={require('../../assets/icon/ic_chevron_left.png')}
                           style={{height: 18, width: 18, resizeMode: 'contain'}}/>
                </TouchableOpacity>
                <View style={{flex: 1}}/>
                <TouchableOpacity onPress={sharePress} style={{padding: 10, marginRight: 15}}>
                    <Image source={require('../../assets/icon/ic_share.png')}
                           style={{height: 18, width: 18, tintColor: 'white', resizeMode: 'contain'}}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={morePress} style={{padding: 10}}>
                    <Image source={require('../../assets/icon/ic_more.png')}
                           style={{height: 18, width: 10, resizeMode: 'contain'}}/>
                </TouchableOpacity>
            </View>
        </View>
    );
}

function ItemHeader({title, value}) {
    return (
        <View style={{alignItems: 'center'}}>
            <Text style={{fontSize: 14, color: '#757575'}}>{title}</Text>
            <Text style={{fontSize: 20, color: '#212121', marginTop: 10}}>{value}</Text>
        </View>
    );
}

function ItemIngredients({text}) {
    return (
        <View style={{paddingVertical: 8}}>
            <Text style={{fontSize: 16, color: '#263238'}}>{text}</Text>
        </View>
    );
}

function ItemToCook({data}) {
    return (
        <View style={{padding: 20}}>
            <Text style={{fontSize: 14, fontWeight: 'bold', color: '#263238'}}>{data.id}. {data.title}</Text>
            <Text style={{
                fontSize: 14,
                color: '#263238',
                marginLeft: 20,
                marginTop: 10,
                lineHeight: 27
            }}>{data.desc}</Text>
        </View>
    );
}

function CommentItem({data}) {
    return (
        <View>
            <View style={{flexDirection: 'row', marginTop: 30}}>
                <Image source={data.avatar}
                       style={{height: 40, width: 40, resizeMode: 'cover'}}/>
                <View style={{marginLeft: 10}}>
                    <Text style={{fontSize: 14, fontWeight: 'bold', color: '#616161'}}>{data.user}</Text>
                    <Text style={{fontSize: 12, color: '#616161'}}>{data.datetime}</Text>
                </View>
            </View>
            <Text style={{fontSize: 14, color: '#616161', marginTop: 10}}>Weasel the jeeper goodness
                inconsiderately spelled so ubiquitous amused knitted and altruistic amiable...</Text>
        </View>
    );
}

export default FoodStyle7;