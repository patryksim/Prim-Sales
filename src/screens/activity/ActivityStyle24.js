import React, {useContext, useRef} from 'react';
import {FlatList, Image, Text, View} from "react-native";
import {PageContext} from "../../../App";
import HeaderThreeButton from "../../components/HeaderThreeButton";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import MaterialInput from "../../components/MaterialInput";

const DATA = [
    {
        id: '1',
        dotColor: '#ff5252',
        user: 'Christina',
        avatar: require('../../assets/icon/ic_profile3.png'),
        text: 'Weasel the jeeper goodness inconsiderate spelled so ubiquitous amused knitted and altruistic amiable...',
        datetime: '17.53',
        isChecked: false
    },
    {
        id: '2',
        dotColor: '#fdd835',
        user: 'Remi Boucher',
        avatar: require('../../assets/icon/ic_profile2.png'),
        text: 'Do you have a time to talk about our meeting last Saturday? Beacuse i have a great vision about it, Please reply, thanks!',
        datetime: '15.09',
        isChecked: true
    },
    {
        id: '3',
        dotColor: '#0091ea',
        user: 'Steve Rogers',
        avatar: require('../../assets/icon/ic_profile1.png'),
        text: 'Hi there! I am sorry i can’t go there right now, I have another appoinment.',
        datetime: '10.11',
        isChecked: false
    },
    {
        id: '4',
        dotColor: '#c0ca33',
        user: 'Ludwig Beethoven',
        avatar: require('../../assets/icon/ic_profile2.png'),
        text: 'Do you need time to use the application or not? Because we don’t have much time like you ask me before lunch today',
        datetime: '07.27',
        isChecked: false
    },
];

function ActivityStyle24() {
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);
    return (
        <View style={{flex: 1, backgroundColor: '#f1f5f7'}}>
            <HeaderThreeButton
                title='Chat'
                isHome={true}
                navPress={() => pageContext.pageDispatch({page: 'pop'})}
                searchPress={() => snackbarRef.current.ShowSnackBarFunction('search clicked')}
                morePress={() => snackbarRef.current.ShowSnackBarFunction('more clicked')}
                bgColor='#f44336'
                shadow={false}
            />
            <View style={{paddingVertical: 10, backgroundColor: '#f44336'}}>
                <View style={{
                    marginHorizontal: 10,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    backgroundColor: 'white',
                    paddingRight: 15,
                }}>
                    <MaterialInput bgColor='transparent' margin={0} placeholder='Search for message or user here'/>
                    <Image source={require('../../assets/icon/ic_search_gray.png')}
                           style={{height: 18, width: 18, resizeMode: 'contain'}}/>
                </View>
            </View>
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
        <View style={{flexDirection: 'row'}}>
            <View style={{width: 2, height: '100%', marginHorizontal: 15, backgroundColor: '#e0e0e0'}}>
                <View style={{
                    width: 10,
                    height: 10,
                    borderRadius: 5,
                    marginLeft: -4,
                    marginTop: 20,
                    backgroundColor: data.dotColor
                }}/>
            </View>
            <View style={{
                width: 0,
                height: 0,
                marginTop: 20,
                borderTopWidth: 6,
                borderBottomWidth: 6,
                borderRightWidth: 12,
                borderStyle: 'solid',
                backgroundColor: 'transparent',
                borderTopColor: 'transparent',
                borderBottomColor: 'transparent',
                borderRightColor: 'white',
            }}/>
            <View style={{
                flex: 1,
                marginRight: 15,
                justifyContent: 'space-between',
                padding: 10,
                marginTop: 10,
                backgroundColor: 'white',
                borderRadius: 3,
                shadowRadius: 3,
                elevation: 1,
                shadowOffset: {width: 0, height: 1},
                shadowOpacity: 0.1,
            }}>
                <View style={{flexDirection: 'row'}}>
                    <Image source={data.avatar}
                           style={{height: 40, width: 40, resizeMode: 'cover'}}/>
                    <View style={{flex: 1, marginLeft: 10}}>
                        <View style={{flexDirection: 'row', alignSelf: 'flex-end'}}>
                            <Text style={{fontSize: 12, color: '#bdbdbd', marginRight: 6}}>{data.datetime}</Text>
                            <Image source={require('../../assets/icon/ic_check.png')}
                                   style={{
                                       height: 16,
                                       width: 12,
                                       alignSelf: 'flex-end',
                                       tintColor: data.isChecked ? '#e0e0e0' : '#0091ea',
                                       resizeMode: 'contain'
                                   }}/>
                        </View>
                        <Text style={{fontSize: 13, color: '#616161', fontWeight: 'bold'}}>{data.user}</Text>
                    </View>
                </View>
                <Text style={{fontSize: 14, color: '#616161', marginTop: 15}}>{data.text}</Text>
            </View>
        </View>
    );
}

export default ActivityStyle24;