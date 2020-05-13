import React, {useContext, useRef} from 'react';
import {Image, ScrollView, Text, View} from "react-native";
import {PageContext} from "../../../App";
import HeaderThreeButton from "../../components/HeaderThreeButton";
import MaterialSnackbar from "../../components/MaterialSnackbar";

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

function ActivityStyle25() {
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
            <ItemDataContainer
                containerStyle={{flex: 1}}
                data={DATA}
                renderItem={(item, status) => <ItemActivity data={item} disable={status}/>}
            />
            <MaterialSnackbar ref={snackbarRef}/>
        </View>
    );
}

function ItemDataContainer({data, renderItem, containerStyle={}}) {
    let itemData = [];
    itemData.push(<ItemHeader key='title1' title='Today, 25 July 2020'/>);
    data.map((dt) => {
        itemData.push(<View key={dt.id}>{renderItem(dt, false)}</View>);
    });
    itemData.push(<View style={{height: 10}}/>);
    itemData.push(<ItemHeader key='title2' title='Yesterday, 24 July 2020'/>);
    data.map((dt) => {
        itemData.push(<View key={dt.id + 'last'}>{renderItem(dt, true)}</View>);
    });
    return (
        <ScrollView style={containerStyle}>
            {itemData}
        </ScrollView>
    );
}

function ItemHeader({title}) {
    return (
        <View style={{
            width: '100%',
            height: 57,
            backgroundColor: 'white',
            justifyContent: 'center',
            paddingLeft: 10
        }}>
            <Text style={{alignSelf: 'center', fontSize: 14, color: '#616161'}}>{title}</Text>
        </View>
    );
}

function ItemActivity({data, disable=false}) {
    return (
        <View style={{flexDirection: 'row'}}>
            <View style={{
                flex: 1,
                marginHorizontal: 10,
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
                <View style={{flexDirection: 'row', opacity: disable ? 0.3 : 1}}>
                    <Image source={data.avatar}
                           style={{height: 40, width: 40, resizeMode: 'cover'}}/>
                    <View style={{flex: 1, marginLeft: 10}}>
                        <View style={{flexDirection: 'row', alignSelf: 'flex-end'}}>
                            <Text style={{flex: 1, fontSize: 13, color: '#616161', fontWeight: 'bold'}}>{data.user}</Text>
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
                        <Text style={{fontSize: 14, color: '#616161', marginTop: 5}}>{data.text}</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

export default ActivityStyle25;