import React, {useContext, useRef} from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from "react-native";
import {PageContext} from "../../../App";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import {storageImageUrl} from "../../tools/Helpers";
import HeaderFourButton from "../../components/HeaderFourButton";
import TabHeader from "../../components/TabHeader";

const DATA = [
    {
        id: '1',
        type: 'text',
        user: 'Gabriella Madelaine',
        avatar: require('../../assets/icon/ic_profile1.png'),
        actionLabel: 'Posted a photo',
        datetime: 'An hour ago'
    },
    {
        id: '2',
        type: 'text',
        user: 'Tony Ramirez',
        avatar: require('../../assets/icon/ic_profile2.png'),
        actionLabel: 'Posted a tought',
        datetime: '3 days ago'
    },
    {
        id: '3',
        type: 'picture',
        user: 'Gabriella Madelaine',
        avatar: require('../../assets/icon/ic_profile1.png'),
        actionLabel: 'Posted a photo',
        datetime: '3 days ago'
    },
];

function ActivityStyle3() {
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);

    const onTabChanged = (index) => {

    };

    return (
        <View style={{flex: 1, backgroundColor: 'white'}}>
            <HeaderFourButton
                title='Activity'
                isHome={true}
                navPress={() => pageContext.pageDispatch({page: 'pop'})}
                editPress={() => snackbarRef.current.ShowSnackBarFunction('edit clicked')}
                searchPress={() => snackbarRef.current.ShowSnackBarFunction('search clicked')}
                morePress={() => snackbarRef.current.ShowSnackBarFunction('more clicked')}
                bgColor='#f44336'
                shadow={false}
            />
            <TabHeader titles={['FEED', 'POPULAR', 'MEDIA']} bgColor='#f44336' activeIndex={0}
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
        <View style={{borderBottomWidth: 0.5, borderBottomColor: '#e0e0e0', paddingBottom: 5}}>
            <View style={{padding: 10, flexDirection: 'row', alignItems: 'center'}}>
                <Image source={data.avatar}
                       style={{height: 40, width: 40, resizeMode: 'cover'}}/>
                <View>
                    <Text
                        style={{fontSize: 14, color: '#616161', fontWeight: 'bold', marginLeft: 10}}>{data.user}</Text>
                    <Text style={{fontSize: 12, color: '#bdbdbd', marginLeft: 10, marginTop: 4}}>{data.datetime}</Text>
                </View>
            </View>
            <RenderContent type={data.type}/>
            <View style={{
                padding: 10,
                flexDirection: 'row',
                alignItems: 'center',
            }}>
                <Text style={{fontSize: 12, color: '#bdbdbd'}}>3 Comments</Text>
                <Text style={{fontSize: 12, marginLeft: 30, color: '#bdbdbd'}}>0 Likes</Text>
            </View>
        </View>
    );
}

function RenderContent({type}) {
    if (type === 'picture') {
        return (
            <View>
                <Image source={{uri: storageImageUrl('activity', 'activity_2_img.jpg')}}
                       style={{flex: 1, height: 170, marginHorizontal: 10, resizeMode: 'cover'}}/>
                <Text style={{fontSize: 14, color: '#263238', padding: 10}}>Hipster Foods</Text>
                <Text style={{fontSize: 14, color: '#9e9e9e', paddingHorizontal: 10}}>Weasel the jeeper goodness
                    inconsiderately spelled so ubiquitous amused knitted and altruistic amiable far much toward.</Text>

            </View>
        );
    } else if (type === 'text') {
        return (
            <Text style={{fontSize: 14, color: '#616161', paddingHorizontal: 10}}>Weasel the jeeper goodness
                inconsiderately spelled so ubiquitous amused knitted and altruistic amiable...</Text>
        );
    }
}

export default ActivityStyle3;