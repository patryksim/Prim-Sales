import React, {useContext, useRef} from 'react';
import {FlatList, Image, Text, View, TouchableOpacity} from "react-native";
import {PageContext} from "../../../App";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import SwipeBackView from "../../components/SwipeBack";

const menuData = [
    {id: '1', title: 'Send', icon: require('../../assets/icon/ic_send.png')},
    {id: '2', title: 'Top Up', icon: require('../../assets/icon/ic_topup.png')},
    {id: '3', title: 'Pay', icon: require('../../assets/icon/ic_pay.png')},
    {id: '4', title: 'Request', icon: require('../../assets/icon/ic_request.png')},
];

const cardTransactionData = [
    {id: '1', title: 'Visa', cardNumber: '123 456 789', total: '$ 50,000'},
    {id: '2', title: 'Paypal', cardNumber: '123 456 789', total: '$ 50,000'},
    {id: '3', title: 'Master Card', cardNumber: '123 456 789', total: '$ 50,000'},
    {id: '4', title: 'Maestro', cardNumber: '123 456 789', total: '$ 50,000'},
];

function DashboardStyle3() {
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);

    return (
        <SwipeBackView style={{flex: 1, backgroundColor: '#f1f5f7'}}
                       onSwipeBack={() => pageContext.pageDispatch({page: 'pop'})}>
            <View style={{height: 127, backgroundColor: '#4456ca'}}>
                <View style={{flexDirection: 'row', paddingVertical: 24, paddingHorizontal: 15, alignItems: 'center'}}>
                    <View style={{width: 30, height: 30, borderRadius: 15, backgroundColor: 'white'}}/>
                    <View style={{flex: 1, paddingHorizontal: 10}}>
                        <Text style={{fontSize: 14, color: 'white'}}>Good Afternoon</Text>
                        <Text style={{fontSize: 14, fontWeight: 'bold', color: 'white', marginTop: 4}}>John
                            Salihamidzic</Text>
                    </View>
                    <View style={{
                        width: 30,
                        height: 30,
                        borderRadius: 15,
                        backgroundColor: 'white',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <Image source={require('../../assets/icon/ic_bell_ringing.png')}
                               style={{height: 14, width: 14, resizeMode: 'contain'}}/>
                        <View style={{
                            width: 14,
                            height: 14,
                            borderRadius: 7,
                            borderWidth: 3,
                            borderColor: 'white',
                            position: 'absolute',
                            top: -2,
                            right: -2,
                            backgroundColor: 'red'
                        }}/>
                    </View>
                </View>
            </View>
            <MainMenu data={menuData}/>
            <TitleCard text='Transaction'/>
            <View>
                <FlatList
                    contentContainerStyle={{padding: 5}}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={[{id: '1'}, {id: '2'}]}
                    renderItem={({item}) => <TransactionItem data={item}/>}
                    keyExtractor={item => item.id}
                />
            </View>
            <TitleCard text='Card'/>
            <FlatList
                contentContainerStyle={{padding: 5}}
                data={cardTransactionData}
                renderItem={({item}) => <CardItem data={item}/>}
                keyExtractor={item => item.id}
            />
            <MaterialSnackbar ref={snackbarRef}/>
        </SwipeBackView>
    );
}

function MainMenu({data}) {
    return (
        <View style={{
            height: 100,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
            marginTop: -45,
            marginHorizontal: 15,
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.3,
            shadowRadius: 5,
            borderRadius: 5,
            elevation: 3,
            backgroundColor: 'white',
            paddingHorizontal: 20,
            paddingVertical: 15
        }}>
            {data.map((dt) => <MenuItem key={dt.id} data={dt}/>)}
        </View>
    );
}

function MenuItem({data}) {
    return (
        <TouchableOpacity style={{alignItems: 'center'}}>
            <View style={{
                width: 40,
                height: 40,
                borderRadius: 20,
                backgroundColor: '#eaecf3',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Image source={data.icon}
                       style={{height: 24, width: 24, resizeMode: 'contain'}}/>
            </View>
            <Text style={{fontSize: 10, fontWeight: 'bold', color: '#272b43', marginTop: 10}}>{data.title}</Text>
        </TouchableOpacity>
    );
}

function TitleCard({text}) {
    return (
        <View style={{marginTop: 30, marginBottom: 10, marginHorizontal: 15}}>
            <Text style={{fontSize: 14, fontWeight: 'bold', color: '#272b43'}}>{text}</Text>
        </View>
    );
}

function TransactionItem({data}) {
    return (
        <View style={{
            height: 70,
            width: 295,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
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
                backgroundColor: '#f5a623'
            }}>
                <Text style={{fontSize: 15, fontWeight: 'bold', color: 'white'}}>F</Text>
            </View>
            <View style={{flex: 1, paddingHorizontal: 10}}>
                <Text style={{fontSize: 14, fontWeight: 'bold', color: '#413d4a'}}>Food</Text>
                <Text style={{fontSize: 14, fontWeight: 'bold', color: '#adb3c8', marginTop: 4}}>Description</Text>
            </View>
            <Text style={{fontSize: 12, fontWeight: 'bold', color: '#dc2929'}}>-250</Text>
        </View>
    );
}

function CardItem({data}) {
    return (
        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 15, marginTop: 15}}>
            <View>
                <Text style={{fontSize: 12, fontWeight: 'bold', color: '#272b43'}}>{data.title}</Text>
                <Text style={{fontSize: 12, color: '#a3a4ac', marginTop: 5}}>{data.cardNumber}</Text>
            </View>
            <Text style={{fontSize: 12, fontWeight: 'bold', color: '#4456ca'}}>{data.total}</Text>

        </View>
    );
}

export default DashboardStyle3;