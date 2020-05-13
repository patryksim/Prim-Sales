import React, {useContext, useRef} from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from "react-native";
import {PageContext} from "../../../App";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import {storageImageUrl} from "../../tools/Helpers";
import HeaderThreeButton from "../../components/HeaderThreeButton";
import TabHeader from "../../components/TabHeader";

const DATA = [
    {
        id: '1',
        user: 'Christopher Nolan',
        image: 'activity_13_img_1.jpg',
        text: 'Weasel the jeeper goodness inconsiderately spelled so ubiquitous.',
        datetime: 'An hour ago'
    },
    {
        id: '2',
        user: 'Nikita Woods',
        image: 'activity_13_img_2.jpg',
        text: 'Weasel the jeeper goodness inconsiderately spelled so ubiquitous.',
        datetime: 'An hour ago'
    },
    {
        id: '3',
        user: 'Madelaine',
        image: 'activity_13_img_3.jpg',
        text: 'Weasel the jeeper goodness inconsiderately spelled so ubiquitous.',
        datetime: 'An hour ago'
    },
    {
        id: '4',
        user: 'Jonas Bjerre',
        image: 'activity_13_img_1.jpg',
        text: 'Weasel the jeeper goodness inconsiderately spelled so ubiquitous.',
        datetime: 'An hour ago'
    },
];

function ActivityStyle13() {
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);

    const onTabChanged = (index) => {

    };

    return (
        <View style={{flex: 1, backgroundColor: '#f1f5f7'}}>
            <HeaderThreeButton
                title='Activity'
                isHome={true}
                navPress={() => pageContext.pageDispatch({page: 'pop'})}
                searchPress={() => snackbarRef.current.ShowSnackBarFunction('search clicked')}
                morePress={() => snackbarRef.current.ShowSnackBarFunction('more clicked')}
                bgColor='#f44336'
                shadow={false}
            />
            <TabHeader titles={['NEW', 'POPULAR', 'FAVORITED']} bgColor='#f44336' activeIndex={0}
                       onActiveChanged={(i) => onTabChanged(i)}/>
            <FlatList
                contentContainerStyle={{paddingBottom: 10}}
                data={DATA}
                renderItem={({item}) => <ItemActivity data={item}/>}
                keyExtractor={item => item.id}
            />
            <MaterialSnackbar ref={snackbarRef}/>
        </View>
    );
}

function ItemActivity({data}) {
    return (
        <View>
            <View style={{
                marginHorizontal: 10,
                marginTop: 10,
                backgroundColor: 'white',
                flexDirection: 'row',
                borderRadius: 3,
                shadowRadius: 3,
                elevation: 3,
                shadowOffset: {width: 0, height: 2},
                shadowOpacity: 0.3
            }}>
                <Image source={{uri: storageImageUrl('activity', data.image)}}
                       style={{height: 142, width: 136, resizeMode: 'cover'}}/>
                <View style={{flex: 1, padding: 15}}>
                    <Text style={{fontSize: 14, fontWeight: 'bold', color: '#616161'}}>{data.user}</Text>
                    <Text style={{fontSize: 14, color: '#616161', marginTop: 5, lineHeight: 20}}>{data.text}</Text>

                    <View style={{flexDirection: 'row', marginTop: 15, alignItems: 'center', justifyContent: 'space-between'}}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Image source={require('../../assets/icon/ic_love_red.png')}
                                   style={{width: 10, height: 10, resizeMode: 'contain'}}/>
                            <Text style={{fontSize: 12, marginLeft: 5, color: '#616161'}}>1347</Text>
                        </View>
                        <Text style={{fontSize: 12, color: '#bdbdbd'}}>{data.datetime}</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

export default ActivityStyle13;