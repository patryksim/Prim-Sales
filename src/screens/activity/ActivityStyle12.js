import React, {useContext, useRef} from 'react';
import {FlatList, Image, ImageBackground, Text, View} from "react-native";
import {PageContext} from "../../../App";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import {storageImageUrl} from "../../tools/Helpers";
import HeaderThreeButton from "../../components/HeaderThreeButton";
import MaterialInput from "../../components/MaterialInput";
import MaterialButton from "../../components/MaterialButton";

const DATA = [
    {
        id: '1',
        user: 'Tony Ramirez',
        avatar: require('../../assets/icon/ic_profile2.png'),
        text: 'Weasel the jeeper goodness inconsiderately spelled soubiquitous amused knitted and altruistic amiable...',
        datetime: 'An hour ago'
    },
    {
        id: '2',
        user: 'Ludwig',
        avatar: require('../../assets/icon/ic_profile1.png'),
        text: 'Weasel the jeeper goodness inconsiderately spelled soubiquitous amused knitted and altruistic amiable...',
        datetime: '2 hour ago'
    },
    {
        id: '3',
        user: 'Christina',
        avatar: require('../../assets/icon/ic_profile3.png'),
        text: 'Weasel the jeeper goodness inconsiderately spelled soubiquitous amused knitted and altruistic amiable...',
        datetime: '3 hour ago'
    },
    {
        id: '4',
        user: 'Remi Boucher',
        avatar: require('../../assets/icon/ic_profile2.png'),
        text: 'Weasel the jeeper goodness inconsiderately spelled soubiquitous amused knitted and altruistic amiable...',
        datetime: '3 hour ago'
    },
    {
        id: '5',
        user: 'Tony Ramirez',
        avatar: require('../../assets/icon/ic_profile2.png'),
        text: 'Weasel the jeeper goodness inconsiderately spelled soubiquitous amused knitted and altruistic amiable...',
        datetime: 'An hour ago'
    },
    {
        id: '6',
        user: 'Ludwig',
        avatar: require('../../assets/icon/ic_profile1.png'),
        text: 'Weasel the jeeper goodness inconsiderately spelled soubiquitous amused knitted and altruistic amiable...',
        datetime: '2 hour ago'
    },
];

function ActivityStyle12() {
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
                bgColor='#f44336'
            />
            <MainContent/>
            <FlatList
                contentContainerStyle={{paddingBottom: 10}}
                data={DATA}
                renderItem={({item}) => <ItemActivity data={item}/>}
                keyExtractor={item => item.id}
            />
            <ChatContainer snackbarRef={snackbarRef}/>
            <MaterialSnackbar ref={snackbarRef}/>
        </View>
    );
}

function MainContent() {
    return (
        <ImageBackground source={{uri: storageImageUrl('activity', 'activity_12_img.jpg')}}
                         style={{justifyContent: 'flex-end', padding: 25}}>
            <View style={{flexDirection: 'row', marginTop: 100}}>
                <Image source={require('../../assets/icon/ic_profile2.png')}
                       style={{height: 40, width: 40, resizeMode: 'cover'}}/>
                <View style={{marginLeft: 10}}>
                    <Text style={{fontSize: 14}}>
                        <Text style={{fontWeight: 'bold', color: 'white'}}>Tony Ramirez</Text>
                    </Text>
                    <View style={{flexDirection: 'row', marginTop: 4, alignItems: 'center'}}>
                        <Image source={require('../../assets/icon/ic_history.png')}
                               style={{width: 10, height: 10, resizeMode: 'contain'}}/>
                        <Text style={{fontSize: 12, color: 'white', marginLeft: 5}}>An hour ago</Text>
                    </View>
                </View>
            </View>
            <Text style={{fontSize: 20, fontWeight: 'bold', marginTop: 20, color: 'white'}}>Shanghai City
                Landscape</Text>
            <View style={{
                marginTop: 5,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Image source={require('../../assets/icon/ic_love_red.png')}
                           style={{width: 10, height: 10, tintColor: 'white', resizeMode: 'contain'}}/>
                    <Text style={{fontSize: 12, marginLeft: 5, color: 'white'}}>1347</Text>
                    <Image source={require('../../assets/icon/ic_viewer_blue.png')}
                           style={{
                               width: 14,
                               height: 10,
                               tintColor: 'white',
                               marginLeft: 25,
                               resizeMode: 'contain'
                           }}/>
                    <Text style={{fontSize: 12, marginLeft: 5, color: 'white'}}>19546</Text>
                </View>
            </View>
        </ImageBackground>

    );
}

function ItemActivity({data}) {
    return (
        <View style={{padding: 10, borderBottomWidth: 0.5, borderBottomColor: '#e0e0e0'}}>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center'
            }}>
                <Image source={data.avatar}
                       style={{height: 40, width: 40, resizeMode: 'cover'}}/>
                <View style={{flex: 1, marginLeft: 10}}>
                    <Text style={{fontSize: 14}}>
                        <Text style={{fontWeight: 'bold', color: '#616161'}}>{data.user}</Text>
                    </Text>
                    <View style={{flexDirection: 'row', marginTop: 2, alignItems: 'center'}}>
                        <Text style={{fontSize: 12, color: '#bdbdbd'}}>{data.datetime}</Text>
                    </View>
                </View>
            </View>
            <Text style={{fontSize: 14, color: '#616161', marginTop: 10}}>{data.text}</Text>
        </View>
    );
}

function ChatContainer({snackbarRef}) {
    return (
        <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: 'white',
            padding: 5,
            elevation: 3,
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.3
        }}>
            <MaterialInput bgColor='transparent' margin={0} placeholder='Write comment here..'/>
            <MaterialButton title='Send' style={{width: 73, borderRadius: 3, backgroundColor: 'transparent'}}
                            titleStyle={{color: '#f44336'}}
                            buttonPress={() => snackbarRef.current.ShowSnackBarFunction('Send clicked')}/>
        </View>
    );
}

export default ActivityStyle12;