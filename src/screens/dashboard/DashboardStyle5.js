import React, {useContext, useRef} from 'react';
import {Dimensions, Image, ScrollView, Text, TouchableOpacity, View, FlatList} from "react-native";
import {PageContext} from "../../../App";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import SwipeBackView from "../../components/SwipeBack";
import MultiColumnView from "../../components/MultiColumnView";

const menuData = [
    {id: '1', title: 'Receive', datetime: '17 Sep 2019 08:09'},
    {id: '2', title: 'Receive', datetime: '17 Sep 2019 08:09'},
    {id: '3', title: 'Receive', datetime: '17 Sep 2019 08:09'},
    {id: '4', title: 'Receive', datetime: '17 Sep 2019 08:09'},
    {id: '5', title: 'Receive', datetime: '17 Sep 2019 08:09'},
];

const screenWidth = Dimensions.get('window').width;

function DashboardStyle5() {
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);

    return (
        <SwipeBackView style={{flex: 1, backgroundColor: '#4456ca'}}
                       onSwipeBack={() => pageContext.pageDispatch({page: 'pop'})}>
            <HeaderDashboard
                navPress={() => pageContext.pageDispatch({page: 'pop'})}
                refreshPress={() => snackbarRef.current.ShowSnackBarFunction('refresh clicked')}
            />
            <ScrollView>
                <MainDashboard/>
                <DetailDashboard/>
                <TitleCard text='Today'/>
                <MultiColumnView
                    containerStyle={{padding: 5}}
                    data={menuData}
                    renderItem={(item) => <TransactionItem data={item}/>}
                />
            </ScrollView>
            <MaterialSnackbar ref={snackbarRef}/>
        </SwipeBackView>
    );
}

function HeaderDashboard({navPress, refreshPress}) {
    return (
        <View style={{
            height: 56,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 10,
        }}>
            <TouchableOpacity onPress={navPress} style={{padding: 10}}>
                <Image source={require('../../assets/icon/ic_home.png')}
                       style={{height: 16, width: 18, resizeMode: 'contain'}}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={refreshPress} style={{padding: 18}}>
                <Image source={require('../../assets/icon/ic_refresh_button.png')}
                       style={{height: 24, width: 24, resizeMode: 'contain'}}/>
            </TouchableOpacity>
        </View>
    )
}

function MainDashboard() {
    return (
        <View style={{
            height: 155,
            alignItems: 'center',
            justifyContent: 'space-around',
            marginTop: 10,
            marginHorizontal: 15,
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.3,
            shadowRadius: 5,
            borderRadius: 5,
            elevation: 3,
            backgroundColor: 'white',
            paddingHorizontal: 20,
            paddingVertical: 20
        }}>
            <Text style={{fontSize: 14, color: '#5ca30e'}}>ETH Balance</Text>
            <Text style={{fontSize: 24, fontWeight: 'bold', color: '#272b43'}}>$ 123,456</Text>
            <Text style={{fontSize: 14, color: '#a3a4ac'}}>45.678 USD</Text>
        </View>
    );
}

function DetailDashboard() {
    return (
        <View style={{flexDirection: 'row', paddingHorizontal: 15, paddingVertical: 20}}>
            <ResumeItem title='Send' icon={require('../../assets/icon/ic_send_button.png')}/>
            <View style={{width: 15}}/>
            <ResumeItem title='Receive' icon={require('../../assets/icon/ic_receive_button.png')}/>
        </View>
    );
}

function ResumeItem({title, icon}) {
    return (
        <View style={{
            flex: 1,
            height: 50,
            paddingHorizontal: 10,
            flexDirection: 'row',
            backgroundColor: 'white',
            borderRadius: 5,
            alignItems: 'center',
        }}>
            <View style={{
                width: 30,
                height: 30,
                borderRadius: 15,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#e1e2ee'
            }}>
                <Image style={{width: 25, height: 25, resizeMode: 'contain', marginHorizontal: 5}}
                       source={icon}/>
            </View>
            <Text style={{fontSize: 14, color: '#272b43', marginLeft: 20}}>{title}</Text>
        </View>
    );
}

function TitleCard({text}) {
    return (
        <View style={{marginTop: 30, marginBottom: 10, marginHorizontal: 15, alignItems: 'center'}}>
            <Text style={{fontSize: 14, fontWeight: 'bold', color: 'white'}}>{text}</Text>
        </View>
    );
}

function TransactionItem({data}) {
    return (
        <View style={{
            height: 70,
            width: screenWidth - 30,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
            marginTop: 10,
            marginHorizontal: 10,
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.3,
            shadowRadius: 5,
            borderRadius: 5,
            elevation: 3,
            backgroundColor: 'white',
            paddingHorizontal: 20,
            paddingVertical: 15
        }}>
            <View style={{
                width: 40,
                height: 40,
                borderRadius: 20,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#7ed321'
            }}>
                <Image source={require('../../assets/icon/ic_down_white.png')} style={{width: 24, height: 24}}/>
            </View>
            <View style={{flex: 1, paddingHorizontal: 10}}>
                <Text style={{fontSize: 12, fontWeight: 'bold', color: '#272b43'}}>{data.title}</Text>
                <Text style={{fontSize: 12, color: '#a3a4ac', marginTop: 4}}>{data.datetime}</Text>
            </View>
            <View style={{alignItems: 'flex-end'}}>
                <Text style={{fontSize: 12, fontWeight: 'bold', color: '#5ca30e'}}>1,234 ETH</Text>
                <Text style={{fontSize: 12, color: '#a3a4ac', marginTop: 4}}>23,4 USD</Text>
            </View>
        </View>
    );
}

export default DashboardStyle5;