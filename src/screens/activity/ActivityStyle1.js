import React, {useContext, useRef} from 'react';
import {FlatList, Image, Text, View} from "react-native";
import {PageContext} from "../../../App";
import HeaderThreeButton from "../../components/HeaderThreeButton";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import {storageImageUrl} from "../../tools/Helpers";

const DATA = [
    {id: '1', type: 'picture', user: 'Gabriella Madelaine', actionLabel: 'Posted a photo', datetime: 'An hour ago'},
    {id: '2', type: 'text', user: 'Tony Ramirez', actionLabel: 'Posted a tought', datetime: '3 days ago'},
    {id: '3', type: 'friend', user: 'Anna Kendrick', actionLabel: 'Added 3 new friends', datetime: '3 days ago'},
    {id: '4', type: 'picture', user: 'Jean Basquiat', actionLabel: 'Posted a photo', datetime: '4 days ago'},
];

function ActivityStyle1() {
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);
    return (
        <View style={{flex: 1, backgroundColor: '#f1f5f7'}}>
            <HeaderThreeButton
                title='Activity'
                isHome={true}
                navPress={() => pageContext.pageDispatch({page: 'pop'})}
                searchPress={() => snackbarRef.current.ShowSnackBarFunction('search clicked')}
                morePress={() => snackbarRef.current.ShowSnackBarFunction('more clicked')}
                bgColor='#ff5722'
            />
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
    let dotColor;
    if (data.type === 'picture') dotColor = '#88c057';
    if (data.type === 'text') dotColor = '#f6be1a';
    if (data.type === 'friend') dotColor = '#ff5252';
    return (
        <View style={{flexDirection: 'row'}}>
            <View style={{width: 2, height: '100%', marginHorizontal: 15, backgroundColor: '#e0e0e0'}}>
                <View style={{
                    width: 10,
                    height: 10,
                    borderRadius: 5,
                    marginLeft: -5,
                    marginTop: 10,
                    backgroundColor: dotColor
                }}/>
            </View>
            <View style={{
                flex: 1,
                marginRight: 15,
                padding: 15,
                marginTop: 10,
                backgroundColor: 'white',
                borderRadius: 3,
                shadowRadius: 3,
                elevation: 3,
                shadowOffset: {width: 0, height: 2},
                shadowOpacity: 0.3
            }}>
                <Text style={{fontSize: 14, color: '#616161', marginBottom: 15}}>
                    <Text>{data.user} </Text>
                    <Text style={{color: '#bdbdbd'}}>{data.actionLabel}</Text>
                </Text>
                <RenderContent type={data.type}/>
                <View style={{
                    marginTop: 20,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Image source={require('../../assets/icon/ic_love_red.png')}
                               style={{width: 10, height: 10, resizeMode: 'contain'}}/>
                        <Text style={{fontSize: 12, marginLeft: 5, color: '#616161'}}>1347</Text>
                        <Image source={require('../../assets/icon/ic_viewer_blue.png')}
                               style={{width: 14, height: 10, marginLeft: 25, resizeMode: 'contain'}}/>
                        <Text style={{fontSize: 12, marginLeft: 5, color: '#616161'}}>19546</Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Image source={require('../../assets/icon/ic_history.png')}
                               style={{width: 10, height: 10, resizeMode: 'contain'}}/>
                        <Text style={{fontSize: 12, marginLeft: 5, color: '#bdbdbd'}}>{data.datetime}</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

function RenderContent({type}) {
    if (type === 'picture') {
        return (
            <Image source={{uri: storageImageUrl('activity', 'activity_1_img_1.jpg')}}
                   style={{height: 110, width: '100%', resizeMode: 'cover'}}/>
        );
    } else if (type === 'text') {
        return (
            <Text style={{fontSize: 14, color: '#616161'}}>You're a work of art. not everyone will understand you, but
                the
                ones that do, will never forget about you.</Text>
        );
    } else if (type === 'friend') {
        return (
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image source={require('../../assets/icon/ic_profile1.png')}
                       style={{width: 40, height: 40, resizeMode: 'contain', marginRight: 20}}/>
                <Image source={require('../../assets/icon/ic_profile2.png')}
                       style={{width: 40, height: 40, resizeMode: 'contain', marginRight: 20}}/>
                <Image source={require('../../assets/icon/ic_profile3.png')}
                       style={{width: 40, height: 40, resizeMode: 'contain', marginRight: 20}}/>
            </View>
        );
    }
}

export default ActivityStyle1;