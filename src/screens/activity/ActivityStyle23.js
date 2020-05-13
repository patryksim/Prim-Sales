import React, {useContext, useRef} from 'react';
import {Image, Text, View} from "react-native";
import {PageContext} from "../../../App";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import HeaderThreeButton from "../../components/HeaderThreeButton";
import TimelineStaggeredView from "../../components/TimelineStaggeredView";

const DATA = [
    {
        id: '1',
        user: 'Christina',
        avatar: require('../../assets/icon/ic_profile1.png'),
        text: 'Weasel the jeeper goodness inconsiderate spelled so ubiquitous amused knitted and altruistic amiable...',
        datetime: '17.43',
        isChecked: true
    },
    {
        id: '2',
        user: 'Remi Boucher',
        avatar: require('../../assets/icon/ic_profile2.png'),
        text: 'Do you have a time to talk about our meeting last Saturday? Beacuse i have a great vision about it, Please reply as soon as possible. thanks, dude!',
        datetime: '15.14',
        isChecked: false
    },
    {
        id: '3',
        user: 'Ludwig Beethoven',
        avatar: require('../../assets/icon/ic_profile2.png'),
        text: 'Do you need time to use the application or not? Because we don’t have much time like you ask me before lunch today',
        datetime: '12.00',
        isChecked: false
    },
    {
        id: '4',
        user: 'Madelaine',
        avatar: require('../../assets/icon/ic_profile3.png'),
        text: 'Hi honey! Can you pick me up at 7 this noon? We could go to mall for buying some dinner',
        datetime: '09.14',
        isChecked: false
    },
];

function ActivityStyle23() {
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
            <View style={{
                width: '100%',
                height: 57,
                backgroundColor: 'white',
                justifyContent: 'center',
                paddingLeft: 10
            }}>
                <Text style={{alignSelf: 'center', fontSize: 14, color: '#616161'}}>Today, 25 June 2020</Text>
            </View>
            <TimelineStaggeredView
                data={DATA}
                renderItem={(data, isLeft) => <ItemStaggered data={data} isLeft={isLeft}/>}
            />
            <MaterialSnackbar ref={snackbarRef}/>
        </View>
    );
}

function ItemStaggered({data, isLeft}) {
    return (
        <View style={{paddingVertical: 15}}>
            {isLeft &&  <ItemLeft data={data}/> }
            {!isLeft && <ItemRight data={data}/> }
        </View>
    );
}

function ItemLeft({data}) {
    return (
        <View style={{alignItems: 'flex-end', marginRight: 20}}>
            <View style={{flexDirection: 'row', alignItems: 'center', marginRight: -25}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        backgroundColor: '#263238',
                        padding: 5,
                        borderRadius: 10
                    }}>
                        <Image source={require('../../assets/icon/ic_history.png')}
                               style={{width: 10, height: 10, marginRight: 5, tintColor: 'white', resizeMode: 'contain'}}/>
                        <Text style={{fontSize: 12, color: 'white'}}>{data.datetime}</Text>
                    </View>
                    <View style={{
                        marginLeft: -2,
                        width: 0,
                        height: 0,
                        borderTopWidth: 6,
                        borderBottomWidth: 6,
                        borderLeftWidth: 12,
                        borderStyle: 'solid',
                        backgroundColor: 'transparent',
                        borderTopColor: 'transparent',
                        borderBottomColor: 'transparent',
                        borderLeftColor: '#263238'
                    }}/>
                </View>
                <View style={{width: 10, height: 10, marginLeft: 5, borderRadius: 5, backgroundColor: '#ff5252'}}/>
            </View>
            <ItemContent data={data}/>
        </View>
    );
}

function ItemRight({data}) {
    return (
        <View style={{alignItems: 'flex-start', marginLeft: 20}}>
            <View style={{flexDirection: 'row', alignItems: 'center', marginLeft: -25}}>
                <View style={{width: 10, height: 10, marginRight: 5, borderRadius: 5, backgroundColor: '#ff5252'}}/>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <View style={{
                        width: 0,
                        height: 0,
                        borderTopWidth: 6,
                        borderBottomWidth: 6,
                        borderRightWidth: 12,
                        borderStyle: 'solid',
                        backgroundColor: 'transparent',
                        borderTopColor: 'transparent',
                        borderBottomColor: 'transparent',
                        borderRightColor: '#263238'
                    }}/>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginLeft: -2,
                        backgroundColor: '#263238',
                        padding: 5,
                        borderRadius: 10
                    }}>
                        <Image source={require('../../assets/icon/ic_history.png')}
                               style={{width: 10, height: 10, marginRight: 5, tintColor: 'white', resizeMode: 'contain'}}/>
                        <Text style={{fontSize: 12, color: 'white'}}>{data.datetime}</Text>
                    </View>
                </View>
            </View>
            <ItemContent data={data}/>
        </View>
    );
}

function ItemContent({data}) {
    return (
        <View style={{
            width: '95%',
            justifyContent: 'space-between',
            padding: 10,
            marginTop: 10,
            backgroundColor: 'white',
            borderRadius: 3,
            shadowRadius: 3,
            elevation: 3,
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.3,
        }}>
            <View style={{flexDirection: 'row'}}>
                <Image source={data.avatar}
                       style={{height: 40, width: 40, resizeMode: 'cover'}}/>
                <View style={{flex: 1, marginLeft: 10}}>
                    <Image source={require('../../assets/icon/ic_check.png')}
                           style={{
                               height: 16,
                               width: 12,
                               alignSelf: 'flex-end',
                               tintColor: data.isChecked ? '#e0e0e0' : '#0091ea',
                               resizeMode: 'contain'
                           }}/>
                    <Text style={{fontSize: 13, color: '#616161', fontWeight: 'bold'}}>{data.user}</Text>
                </View>
            </View>
            <Text style={{fontSize: 14, color: '#616161'}}>{data.text}</Text>
        </View>
    );
}

export default ActivityStyle23;